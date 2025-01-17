import { AudioMimeType, GetArrayBuffer, SniffAudioExt } from '@/decrypt/utils';

import { DecryptResult } from '@/decrypt/entity';
import { DecryptQmcWasm } from '@/decrypt/qmc_wasm';
import { extractQQMusicMeta } from '@/utils/qm_meta';

interface Handler {
  ext: string;
  version: number;
}

export const HandlerMap: { [key: string]: Handler } = {
  mgg: { ext: 'ogg', version: 2 },
  mgg0: { ext: 'ogg', version: 2 },
  mggl: { ext: 'ogg', version: 2 },
  mgg1: { ext: 'ogg', version: 2 },
  mflac: { ext: 'flac', version: 2 },
  mflac0: { ext: 'flac', version: 2 },
  mmp4: { ext: 'mp4', version: 2 },

  // qmcflac / qmcogg:
  // 有可能是 v2 加密但混用同一个后缀名。
  qmcflac: { ext: 'flac', version: 2 },
  qmcogg: { ext: 'ogg', version: 2 },

  qmc0: { ext: 'mp3', version: 2 },
  qmc2: { ext: 'ogg', version: 2 },
  qmc3: { ext: 'mp3', version: 2 },
  qmc4: { ext: 'ogg', version: 2 },
  qmc6: { ext: 'ogg', version: 2 },
  qmc8: { ext: 'ogg', version: 2 },
  bkcmp3: { ext: 'mp3', version: 1 },
  bkcm4a: { ext: 'm4a', version: 1 },
  bkcflac: { ext: 'flac', version: 1 },
  bkcwav: { ext: 'wav', version: 1 },
  bkcape: { ext: 'ape', version: 1 },
  bkcogg: { ext: 'ogg', version: 1 },
  bkcwma: { ext: 'wma', version: 1 },
  tkm: { ext: 'm4a', version: 1 },
  '666c6163': { ext: 'flac', version: 1 },
  '6d7033': { ext: 'mp3', version: 1 },
  '6f6767': { ext: 'ogg', version: 1 },
  '6d3461': { ext: 'm4a', version: 1 },
  '776176': { ext: 'wav', version: 1 },
};

export async function Decrypt(file: Blob, raw_filename: string, raw_ext: string): Promise<DecryptResult> {
  if (!(raw_ext in HandlerMap)) throw `Qmc cannot handle type: ${raw_ext}`;
  const handler = HandlerMap[raw_ext];
  let { version } = handler;

  const fileBuffer = await GetArrayBuffer(file);
  let musicDecoded = new Uint8Array();
  let musicID: number | string | undefined;

  if (version === 2 && globalThis.WebAssembly) {
    const v2Decrypted = await DecryptQmcWasm(fileBuffer, raw_ext);
    // 若 v2 检测失败，降级到 v1 再尝试一次
    if (v2Decrypted.success) {
      musicDecoded = v2Decrypted.data;
      musicID = v2Decrypted.songId;
      console.log('qmc wasm decoder suceeded');
    } else {
      throw new Error(v2Decrypted.error || '(unknown error)');
    }
  }

  const ext = SniffAudioExt(musicDecoded, handler.ext);
  const mime = AudioMimeType[ext];

  const { album, artist, imgUrl, blob, title } = await extractQQMusicMeta(
    new Blob([musicDecoded], { type: mime }),
    raw_filename,
    ext,
    musicID,
  );

  return {
    title: title,
    artist: artist,
    ext: ext,
    album: album,
    picture: imgUrl,
    file: URL.createObjectURL(blob),
    blob: blob,
    mime: mime,
  };
}
