<style scoped>
* >>> .um-edit-dialog {
  max-width: 90%;
  width: 30em;
}
</style>

<template>
  <el-dialog @close="cancel()" title="音乐标签编辑" :visible="show" custom-class="um-edit-dialog" center>
    <el-form ref="form" status-icon :model="form" label-width="0">
      <section>
        <div class="music-cover">
          <el-image v-show="!editPicture" :src="imgFile.url || picture">
            <div slot="error" class="image-slot el-image__error">暂无封面</div>
          </el-image>
          <el-upload v-show="editPicture" :auto-upload="false" :on-change="addFile" :on-remove="rmvFile" :show-file-list="true" :limit="1" list-type="picture" action="" drag>
            <i class="el-icon-upload" />
            <div class="el-upload__text">将新图片拖到此处，或<em>点击选择</em><br />以替换自动匹配的图片</div>
            <div slot="tip" class="el-upload__tip">
              新拖到此处的图片将覆盖原始图片
            </div>
          </el-upload>
          <i :class="{'el-icon-edit': !editPicture, 'el-icon-check': editPicture}"
               @click="changeCover"></i>
        </div>

        <div class="edit-item">
          <div class="label">标题</div>
          <div class="value" v-show="!editTitle">{{title}}</div>
          <el-input class="input" size="small" v-show="editTitle" v-model="title"/>
          <i :class="{'el-icon-edit': !editTitle, 'el-icon-check': editTitle}"
             @click="editTitle = !editTitle"/>
        </div>
        <div class="edit-item">
          <div class="label">艺术家</div>
          <div class="value" v-show="!editArtist">{{artist}}</div>
          <el-input class="input" size="small" v-show="editArtist" v-model="artist"/>
          <i :class="{'el-icon-edit': !editArtist, 'el-icon-check': editArtist}"
             @click="editArtist = !editArtist"
          />
        </div>
        <div class="edit-item">
          <div class="label">专辑</div>
          <div class="value" v-show="!editAlbum">{{album}}</div>
          <el-input class="input" size="small" v-show="editAlbum" v-model="album"/>
          <i :class="{'el-icon-edit': !editAlbum, 'el-icon-check': editAlbum}"
             @click="editAlbum = !editAlbum"
          />
        </div>
        <div class="edit-item">
          <div class="label">专辑艺术家</div>
          <div class="value" v-show="!editAlbumartist">{{albumartist}}</div>
          <el-input class="input" size="small" v-show="editAlbumartist" v-model="albumartist"/>
          <i :class="{'el-icon-edit': !editAlbumartist, 'el-icon-check': editAlbumartist}"
             @click="editAlbumartist = !editAlbumartist"
          />
        </div>
        <div class="edit-item">
          <div class="label">风格</div>
          <div class="value" v-show="!editGenre">{{genre}}</div>
          <el-input class="input" size="small" v-show="editGenre" v-model="genre"/>
          <i :class="{'el-icon-edit': !editGenre, 'el-icon-check': editGenre}"
             @click="editGenre = !editGenre"
          />
        </div>

        <p class="tip">
          为了节省您设备的资源，请在确定前充分检查，避免反复修改。<br />
          直接关闭此对话框不会保留所作的更改。
        </p>
      </section>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="emitConfirm()">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import Ruby from './Ruby';

export default {
  components: {
    Ruby,
  },
  props: {
    show: { type: Boolean, required: true },
    picture: { type: String | undefined, required: true },
    title: { type: String | undefined, required: true },
    artist: { type: String | undefined, required: true },
    album: { type: String | undefined, required: true },
    albumartist: { type: String | undefined, required: true },
    genre: { type: String | undefined, required: true },
  },
  data() {
    return {
      form: {
      },
      imgFile: { tmpblob: undefined, blob: undefined, url: undefined },
      editPicture: false,
      editTitle: false,
      editArtist: false,
      editAlbum: false,
      editAlbumartist: false,
      editGenre: false,
    };
  },
  async mounted() {
    this.refreshForm();
  },
  methods: {
    addFile(file) {
      this.imgFile.tmpblob = file.raw;
    },
    rmvFile() {
      this.imgFile.tmpblob = undefined;
    },
    changeCover() {
      this.editPicture = !this.editPicture;
      if (!this.editPicture && this.imgFile.tmpblob) {
        this.imgFile.blob = this.imgFile.tmpblob;
        if (this.imgFile.url) {
          URL.revokeObjectURL(this.imgFile.url);
        }
        this.imgFile.url = URL.createObjectURL(this.imgFile.blob);
      }
    },

    async refreshForm() {
      if (this.imgFile.url) {
        URL.revokeObjectURL(this.imgFile.url);
      }
      this.imgFile = { tmpblob: undefined, blob: undefined, url: undefined };
      this.editPicture = false;
      this.editTitle = false;
      this.editArtist = false;
      this.editAlbum = false;
      this.editAlbumartist = false;
      this.editGenre = false;
    },
    async cancel() {
      this.refreshForm();
      this.$emit('cancel');
    },
    async emitConfirm() {
      if (this.editPicture) {
        this.changeCover();
      }
      if (this.imgFile.url) {
        URL.revokeObjectURL(this.imgFile.url);
      }
      this.$emit('ok', {
        picture: this.imgFile.blob,
        title: this.title,
        artist: this.artist,
        album: this.album,
        albumartist: this.albumartist,
        genre: this.genre,
      });
    },
  },
};
</script>
