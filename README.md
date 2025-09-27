# unlock-music
音乐解锁：移除已购音乐的加密保护。 目前支持网易云音乐(ncm)、QQ音乐(qmc, mflac, tkm, ogg) 。                  

原仓库为[git.unlock-music.dev/um/web](https://git.unlock-music.dev/um/web)，本仓库为预构建版本，具体版本不得而知，可在[git.unlock-music.dev/um/web/releases](https://git.unlock-music.dev/um/web/releases/)下载最新版本。  

直接部署可使用Fork本仓库后使用GitHub Pages。

或者使用 `Docker` 部署：

使用以下命令构建和运行容器： 

```
docker build -t unlock-music .
docker run -d -p 9200:9200 unlock-music
```

或者使用 `docker-compose` 部署：

```
docker-compose up -d
```
