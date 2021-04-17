<template>
  <v-dialog
    v-model="activeDialog"
    :max-width="windowMaxWidth"
    persistent
    width="750"
    class="uploadDialog"
  >
    <v-card style="min-height: 200px">
      <!-- 上傳圖片及相關操作 -->
      <form action="/somewhere/to/upload" enctype="multipart/form-data">
        <div class="d-flex align-items-cente" style="position: relative">
          <v-toolbar dense flat class="d-flex justify-content-center mt-2">
            <!-- 功能寫在toolbar-title中 -->
            <v-toolbar-title class="d-flex align-items-center">
              <!-- 上傳圖片 -->
              <label
                class="action d-flex align-items-center ml-2"
                for="uploadPic"
              >
                <a class="d-flex black--text align-items-center">
                  <v-icon color="black">mdi-cloud-upload</v-icon>
                  <p class="mb-0 ml-1 h6">
                    uploadPic
                    <!-- {{ $t(`__uploadPic`) }} -->
                  </p>
                </a>
                <input
                  type="file"
                  id="uploadPic"
                  hidden
                  accept="image/jpeg"
                  multiple
                  @change="previewImage"
                />
              </label>
              <!-- 送出資料 -->
              <v-btn
                text
                small
                class="ml-2"
                @click="uploadFiles"
                :disabled="previewPicDataList.length == 0 || isSend"
              >
                <v-icon style="color: black">mdi-clipboard-arrow-right</v-icon>
                <span class="mb-0 ml-1 h6" style="text-transform: capitalize">
                  sendUploadPic
                  <!-- {{ $t(`__sendUploadPic`) }} -->
                </span>
              </v-btn>
              <v-btn text small class="pl-1" @click="clearFiles">
                <v-icon style="color: black">mdi-broom</v-icon>
                <span class="mb-0 ml-1 h6" style="text-transform: capitalize">
                  deleteUploadPic
                  <!-- {{$t(`__deleteUploadPic`)}} -->
                </span>
              </v-btn>
            </v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <!-- 關閉視窗  -->
          <v-btn
            v-if="activeDialog"
            icon
            style="position: absolute; right: 0"
            @click="closeWindow"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </form>
      <!-- 圖片預覽 -->
      <v-row class="px-2">
        <v-col
          class=""
          cols="12"
          sm="3"
          v-for="(picItem, picItemIndex) in previewPicDataList"
          :key="picItemIndex"
        >
          <img
            :src="picItem.b64Data"
            alt=""
            width="100%"
            height="100"
            class=""
          />
          <v-select
            :items="picNameArray"
            label="Number"
            v-model="picItem.picName"
          ></v-select>
        </v-col>
      </v-row>

      <!-- 讀取動畫 -->
      <v-overlay :value="openOverlay">
        <v-progress-circular indeterminate size="36"></v-progress-circular>
      </v-overlay>
      <!-- 訊息提示 -->
      <!-- <message-dialog v-model="messageDialogOpen" :message="messageHint" :closeFunction="refreshFunction"></message-dialog> -->
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
// import moment from "moment";
//import axios from 'axios';
//import dayFormat from '@/util/extensions/dayFormat.js';
//import messageDialog from '@/components/MessageDialog';

export default {
  name: "TUploadAnnotatePic",
  //改成外部提供data/function
  props: {
    windowMaxWidth: {
      type: Number,
      default: 0,
    },
    activeDialog: {
      type: Boolean,
      default: false,
    },
    picPosition: {
      type: Number,
      default: 0,
    },
    picData: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    //messageDialog
  },
  data() {
    return {
      fileInput: null,
      previewPicData: {
        b64Data: null,
        picName: null,
      },
      previewPicDataList: [], //預覽圖片
      sendPreviewList: [
        //要送出給外面顯示的圖片清單
        {
          position: 0,
          image: "",
        },
        {
          position: 1,
          image: "",
        },
        {
          position: 2,
          image: "",
        },
        {
          position: 3,
          image: "",
        },
      ],
      fileList: [],
      //picNameArray:["1","2","3","4"], //最多會有的編號
      picNameArray: [],
      //picNameArrayReal:[],//實際上有的編號
      //date
      isMenu: false,
      datePicker: new Date(), // moment().format("YYYY-MM-DD"),
      //送出資料
      // sendArray:[],
      openOverlay: false,
      isSend: false,
      //錯誤訊息
      messageDialogOpen: false,
      messageHint: "",
      URLList: [],
      responseTimes: [],
      refreshFunction: function () {
        let refreshKey = (this.refreshPatientInforKey += 1);
        this.$store.commit("StoreRefreshInforKey", refreshKey);
      },
    };
  },
  methods: {
    closeWindow() {
      //const vm = this;
      this.$emit("childMethod");

      //鎖jpeg
    },
    async previewImage() {
      //讀取圖片及建立callback供轉換完產生previewPicData,最後存成list
      const vm = this;
      vm.previewPicDataList = []; //reset last pics
      vm.picNameArray = [];
      const fileInput = document.querySelector("#uploadPic");
      let fileLength = fileInput.files.length;
      if (fileLength == 0) {
        fileInput.value = ""; //clear input data
      }

      const callback = (b64Data, index) => {
        let previewPicData = JSON.parse(JSON.stringify(vm.previewPicData)); //avoid call reference
        previewPicData.b64Data = b64Data;
        previewPicData.picName = JSON.stringify(index + 1); //上傳圖片的順序編號

        //將圖片資料推入並進行排序(每推入一張執行一次)
        vm.previewPicDataList.push(previewPicData);
        vm.picNameArray.push(previewPicData.picName);
        vm.sortPreviewImage();
      };

      //對所有檔案進行遍歷,轉b64並執行上面的callback
      for (let fileIndex = 0; fileIndex < fileLength; fileIndex++) {
        vm.blobTob64(fileInput.files[fileIndex], callback, fileIndex);
      }

      vm.fileList = fileInput.files; //傳參考賦值,提供uploadFiles()使用,使用完需清空
    },
    sortPreviewImage() {
      const vm = this;
      vm.previewPicDataList.sort((a, b) => {
        const nameA = a.picName.toUpperCase(); // ignore upper and lowercase
        const nameB = b.picName.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        } else {
          return 0;
        }
      });
    },
    async uploadFiles() {
      this.openOverlay = true;

      //修正position位置並將圖片批次上傳
      let picDataList = JSON.parse(JSON.stringify(this.previewPicDataList));
      console.log(picDataList);
      for (
        let i = this.picData.currentPicIndex;
        i < this.picData.picsInfor.group.length;
        i++
      ) {
        const uploadPic = picDataList.shift();

        //進行上傳後得到imageId,之後把圖片跟id存入JSON中(this.picData.picsInfor)確認顯示
        //uploadPic不等於undefined說明有匹配的圖要上傳
        if (uploadPic !== undefined) {
          let base64Data = uploadPic.b64Data;
          const image = base64Data.replace(
            /^data:image\/(png|jpg|jpeg);base64,/,
            ""
          );
          let data = {
            position: i, //實際索引
            image: image, //canvas轉完是jpg,上傳圖片是jpeg
          };
          data.documentImageGuid = localStorage.getItem("documentImageGuid"); //guid在ReportEdit建立時產生
          await this.$store
            .dispatch("AskStoreDocumentNewImage", data)
            .then((res) => {
              //上傳完後加入圖片資訊存回JSON做顯示
              this.picData.picsInfor.group[i].imageId =
                res.data.data.documentImageId;
              this.picData.picsInfor.group[i].image = base64Data;
            });
          this.previewPicDataList = [];
          this.openOverlay = false;
          this.closeWindow();
        }
      }
      this.openOverlay = false;
    },
    generateGuid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          const r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
    },
    async blobTob64(blob, callback, data) {
      //data為客製資料
      //const vm = this;
      const reader = new FileReader();
      //將blob傳入reader後會觸發onload
      reader.onload = await function (e) {
        callback(e.target.result, data);
      };
      reader.readAsDataURL(blob);
    },
    clearFiles() {
      const vm = this;
      vm.previewPicDataList = [];

      const fileInput = document.querySelector("#uploadPic");
      fileInput.value = "";
    },
    checkPicIndex(itemText) {
      //使圖片名稱對應正確的索引
      const picList = [
        {
          text: "1",
          value: 0,
        },
        {
          text: "2",
          value: 1,
        },
        {
          text: "3",
          value: 2,
        },
        {
          text: "4",
          value: 3,
        },
      ];

      let index = 0;
      picList.forEach((pic, picIndex) => {
        if (itemText == pic.text) {
          index = picIndex;
        }
      });
      return index;
    },
    //dayFormat
  },
  created() {
    // this.queryImageType();
  },
  computed: {
    ...mapState({
      //patientInfor: 'patientInfor',
      //refreshPatientInforKey: 'refreshPatientInforKey'
    }),
  },
  watch: {
    // previewPicDataList() {
    // 	const vm = this;
    // 	//圖片數為0則disable上傳按鈕
    // 	if (vm.previewPicDataList.length == 0) {
    // 		vm.isSend = false;
    // 	}
    // }
  },
};
</script>
