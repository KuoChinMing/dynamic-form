<template>
  <v-container>
    <element-setting-input-box
      :value="element['type']"
      type="textField"
      label="type"
      hide-details
      dense
      outlined
      disabled
    ></element-setting-input-box>

    <element-setting-input-box
      :value="element['id']"
      type="textField"
      label="id"
      disabled
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['colspan']"
      input-class="white"
      label="colspan"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['rowspan']"
      input-class="white"
      label="rowspan"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['verticalAlign']"
      input-class="white"
      label="verticalAlign"
      type="select"
      :items="['top', 'middle', 'bottom']"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['backgroundColor']"
      input-class="white"
      label="backgroundColor"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['width']"
      input-class="white"
      label="width"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['borderWidth']"
      input-class="white"
      label="borderWidth"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['borderStyle']"
      input-class="white"
      type="select"
      label="borderStyle"
      :items="['none', 'dotted', 'dashed', 'solid']"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['borderColor']"
      input-class="white"
      label="borderColor"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <v-divider class="my-6"></v-divider>
    <p class="text-h5 font-weight-bold">Padding</p>
    <element-setting-input-box
      v-model="element['paddingAll']"
      type="textField"
      label="paddingAll"
      input-class="white"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['paddingTop']"
      type="textField"
      label="paddingTop"
      input-class="white"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['paddingRight']"
      type="textField"
      label="paddingRight"
      input-class="white"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['paddingBottom']"
      type="textField"
      label="paddingBottom"
      input-class="white"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['paddingLeft']"
      type="textField"
      label="paddingLeft"
      input-class="white"
      dense
      outlined
      hide-details
    ></element-setting-input-box>
  </v-container>
</template>

<script>
import ElementSettingInputBox from "@/components/panel/ElementSettingInputBox.vue";

export default {
  name: "TTcolSettingPanel",

  components: {
    ElementSettingInputBox,
  },

  props: {
    element: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
