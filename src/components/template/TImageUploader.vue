<template>
  <!-- 圖片標住 -->
  <div v-if="dataItem.class == 'picAnnotate'" class="pt-2">
    <!-- 確定單排/多排 -->
    <!-- 1:單排(horizontalValue為1) -->
    <div
      v-if="dataItem.horizontalValue == '1'"
      class="d-flex"
      :style="`width:${dataItem.totalSizeWidthValue}px; 
            height:${dataItem.totalSizeHeightValue}px`"
    >
      <!-- 渲染每個圖片元件 -->
      <div
        v-for="(layer2_item, index2) in dataItem.group"
        :key="index2"
        class="pt-2 pl-2 pr-2 w-100 h-100 d-inline-flex"
        style="flex-direction: column; float: left"
      >
        <!-- 確定是否有預覽圖 -->
        <!-- 1.1無預設圖 -->
        <template v-if="layer2_item.defaultPic == 'no_default'">
          <!-- 確定遠端是否有存圖片 -->
          <!-- 1.1.1遠端沒圖片:顯示灰底 -->
          <div v-if="layer2_item.image == ''" class="h-100">
            <a
              class="d-flex justify-center grey lighten-2 h-100 canvasImage"
              :style="{ width: `${100}%` }"
              @click="
                isPreview == true ? '' : activeUploadPicFunc(dataItem, index2)
              "
            >
              <v-icon color="white">mdi-upload</v-icon>
            </a>
          </div>
          <!-- 1.1.2 遠端有圖片:顯示圖片 -->
          <a
            v-if="layer2_item.image !== ''"
            class="h-100 w-100 d-block"
            :style="`background-size: contain; background-position: center; background-color: #DDD; background-image: url(${layer2_item.image});`"
            @click="isPreview == true ? '' : activeAnnotate(dataItem, index2)"
          >
          </a>
        </template>
        <!-- 1.2有預設圖 -->
        <div v-if="layer2_item.defaultPic == 'default'" class="w-100 h-100">
          <!-- 確定遠端是否有存圖片 -->
          <!-- 1.2.1 遠端沒圖片:顯示預設 -->
          <div v-if="patientImage.length == 0" class="">
            <a
              class="d-flex justify-center lighten-2"
              :style="{
                'background-image': `url(${layer2_item.defaultPicB64})`,
              }"
              style="
                background-size: cover;
                background-position: center;
                padding-bottom: 100%;
              "
              @click="activeAnnotate(dataItem.group[dataItemIndex], index2)"
            >
            </a>
          </div>
          <!-- 1.2.2 遠端有圖片:顯示圖片 -->
          <a
            v-if="patientImage.length !== 0"
            class="d-flex justify-center lighten-2 w-100"
            :style="{ 'background-image': `url(${patientImageUrl})` }"
            style="
              background-size: cover;
              background-position: center;
              padding-bottom: 100%;
            "
            @click="activeAnnotate(dataItem.group[dataItemIndex], index2)"
          >
          </a>

          <v-select outlined hide-details></v-select>
        </div>

        <!-- 圖片下拉選單 -->
        <v-select
          v-if="layer2_item.options.length !== 0"
          v-model="layer2_item.optionsValue"
          :items="layer2_item.options"
          item-text="value"
          :disabled="isPreview"
          return-object
          hide-details
          class="mt-0"
        ></v-select>
      </div>
    </div>

    <!-- 2.多排(horizontalValue不為1) -->
    <div
      v-if="dataItem.horizontalValue !== '1'"
      :style="`width:${dataItem.totalSizeWidthValue}px; 
            height:${dataItem.totalSizeHeightValue}px; max-width:100%; min-height:auto; `"
    >
      <!-- 渲染每個圖片元件 -->
      <div
        v-for="(layer2_item, index2) in dataItem.group"
        :key="index2"
        class="p-2 d-inline-flex test"
        style="flex-direction: column; float: left"
        :style="[
          { width: `calc((1/${dataItem.verticalValue})*100%)` },
          { height: `calc((1/${dataItem.horizontalValue})*100%)` },
        ]"
      >
        <!-- 2.1 無預設圖 -->
        <template v-if="layer2_item.defaultPic == 'no_default'">
          <!-- 2.1.1 遠端沒圖片:顯示灰底 -->
          <a
            v-if="layer2_item.image == ''"
            class="w-100 h-100 d-flex justify-center grey lighten-2 canvasImage"
            style="line-height: 1"
            @click="
              isPreview == true ? '' : activeUploadPicFunc(dataItem, index2)
            "
          >
            <v-icon color="white">mdi-upload</v-icon>
          </a>
          <!-- </div> -->

          <!-- 2.1.2 遠端有圖片:顯示圖片 -->
          <!-- style="background-size: cover; background-image: url('https://picsum.photos/200/300');" -->
          <a
            v-if="layer2_item.image !== ''"
            class="w-100 h-100 d-block"
            :style="`background-size: contain; background-position: center; background-color: #DDD; background-image: url(${layer2_item.image});`"
            @click="isPreview == true ? '' : activeAnnotate(dataItem, index2)"
          >
          </a>
        </template>
        <!-- 2.2 有預設圖 -->
        <div v-if="layer2_item.defaultPic == 'default'" class="w-100">
          <!-- 2.2.1 遠端沒圖片:顯示預設 -->
          <div v-if="patientImage.length == 0" class="">
            <a
              class="d-flex justify-center lighten-2"
              :style="{
                'background-image': `url(${layer2_item.defaultPicB64})`,
              }"
              style="
                background-size: cover;
                background-position: center;
                padding-bottom: 100%;
              "
              @click="activeAnnotate(dataItem.group[dataItemIndex], index2)"
            >
            </a>
          </div>
          <!-- 2.2.2 遠端有圖片:顯示圖片 -->
          <a
            v-if="patientImage.length !== 0"
            class="d-flex justify-center lighten-2 w-100"
            :style="{ 'background-image': `url(${patientImageUrl})` }"
            style="
              background-size: cover;
              background-position: center;
              padding-bottom: 100%;
            "
            @click="activeAnnotate(dataItem.group[dataItemIndex], index2)"
          >
          </a>
        </div>

        <!-- 圖片下拉選單
        <v-select
          v-if="layer2_item.options.length !== 0"
          v-model="layer2_item.optionsValue"
          :items="layer2_item.options"
          item-text="value"
          :disabled="isPreview"
          return-object
          hide-details
          class="mt-0"
        ></v-select> -->
      </div>
    </div>

    <!-- 上傳圖片 -->
    <div v-if="JSON.stringify(this.picData) !== '{}'">
      <TUploadAnnotatePic
        :windowMaxWidth="600"
        :activeDialog="activeUploadPic"
        :picData="this.picData"
        @childMethod="parentMethod"
      ></TUploadAnnotatePic
      >>
    </div>
  </div>
</template>

<script>
import TUploadAnnotatePic from "@/components/template/templateComponent/TUploadAnnotatePic";

export default {
  components: {
    TUploadAnnotatePic,
  },
  data() {
    return {
      dataItem: {
        group: [
          {
            value: "",
            type: "",
            group: [],
            class: "annotatePic",
            style: {},
            defaultPic: "no_default",
            defaultPicB64: "",
            position: 0,
            image: "",
            imageId: "",
          },
          {
            value: "",
            type: "",
            group: [],
            class: "annotatePic",
            style: {},
            defaultPic: "no_default",
            defaultPicB64: "",
            position: 1,
            image: "",
            imageId: "",
          },
          {
            value: "",
            type: "",
            group: [],
            class: "annotatePic",
            style: {},
            defaultPic: "no_default",
            defaultPicB64: "",
            position: 2,
            image: "",
            imageId: "",
          },
          {
            value: "",
            type: "",
            group: [],
            class: "annotatePic",
            style: {},
            defaultPic: "no_default",
            defaultPicB64: "",
            position: 3,
            image: "",
            imageId: "",
          },
        ],
        class: "picAnnotate",
        title: "圖片標注",
        totalNumberText: "圖片總數",
        totalNumberValue: 4,
        horizontalText: "橫向數",
        horizontalValue: "2",
        verticalText: "縱向數",
        verticalValue: "2",
        totalSizeWidthText: "總寬",
        totalSizeWidthValue: "500",
        totalSizeHeightText: "總高",
        totalSizeHeightValue: "500",
      },
      picData: {
        // currentPicIndex:1,
        // picsInfor:{
        //   class:"picAnnotate",
        //   group:[
        //     {
        //       class: "annotatePic",
        //       defaultPic: "no_default",
        //       defaultPicB64: "",
        //       group: [],
        //       image: "",
        //       imageId: 386,
        //       position: 0,
        //       style: {},
        //       type: "",
        //       value: ""
        //     }
        //   ],
        //   horizontalText:"橫向數",
        //   horizontalValue:"2",
        //   title:"圖片標注",
        //   totalNumberText:"圖片總數",
        //   totalNumberValue:4,
        //   totalSizeHeightText:"總高",
        //   totalSizeHeightValue:"300",
        //   totalSizeWidthText:"總寬",
        //   totalSizeWidthValue:"400",
        //   type:"",
        //   value:"",
        //   verticalText:"縱向數",
        //   verticalValue:"2"
        // }
      },
      isPreview: false,
      activeUploadPic: false,
    };
  },

  methods: {
    activeUploadPicFunc(picsInfor, currentPicIndex) {
      const picData = {
        picsInfor: picsInfor,
        currentPicIndex: currentPicIndex,
      };
      //console.log(picData);
      this.picData = picData;
      this.activeUploadPic = true;
      console.log(picData);
      // this.$emit("callActiveUploadPicFunc", picData);
    },
    parentMethod(){
      this.$nextTick(() => {
				this.activeUploadPic = false;
			});
    }
  },
};
</script>

<style lang="scss">
.h-100 {
  height: 100%;
}

.w-100 {
  width: 100%;
}
</style>
