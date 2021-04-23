<template>
  <v-container>
    <div class="text-h4 font-weight-bold">
      {{ element.type | camelToSentence }}
    </div>

    <element-setting-input-box
      :value="element['type']"
      type="textField"
      label="type"
      disabled
      dense
      outlined
      hide-details
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
      v-model="element['text']"
      type="textField"
      input-class="white"
      label="text"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['width']"
      type="textField"
      label="width"
      input-class="white"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['grow']"
      input-class="white"
      type="select"
      label="grow"
      :items="[
        { text: 'true', value: 1 },
        { text: 'false', value: 0 },
      ]"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['shrink']"
      input-class="white"
      type="select"
      label="shrink"
      :items="[
        { text: 'true', value: 1 },
        { text: 'false', value: 0 },
      ]"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['marginTop']"
      input-class="white"
      label="marginTop"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['marginLeft']"
      input-class="white"
      label="marginLeft"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['marginBottom']"
      input-class="white"
      label="marginBottom"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['marginRight']"
      input-class="white"
      label="marginRight"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['fontSize']"
      type="textField"
      label="size"
      input-class="white"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['color']"
      type="textField"
      label="color"
      input-class="white"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['backgroundColor']"
      type="textField"
      label="backgrounColor"
      input-class="white"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['fontWeight']"
      :items="[
        { text: 'bold', value: 'bold' },
        { text: 'regular', value: 'normal' },
        { text: 'lighter', value: 'lighter' },
      ]"
      type="select"
      label="weight"
      input-class="white"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['fontStyle']"
      :items="[
        { text: 'normal', value: 'normal' },
        { text: 'italic', value: 'italic' },
      ]"
      type="select"
      label="style"
      input-class="white"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['textDecoration']"
      :items="[
        { text: 'none', value: 'none' },
        { text: 'line-through', value: 'line-through' },
        { text: 'underline', value: 'underline' },
      ]"
      type="select"
      label="decoration"
      input-class="white"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['position']"
      :items="[
        { text: 'relative', value: 'relative' },
        { text: 'absolute', value: 'absolute' },
      ]"
      type="select"
      label="position"
      input-class="white"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['textAlign']"
      :items="[
        { text: 'center', value: 'center' },
        { text: 'left', value: 'left' },
        { text: 'right', value: 'right' },
        { text: 'justify', value: 'justify' },
      ]"
      type="select"
      label="align"
      input-class="white"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['whiteSpace']"
      :items="[
        { text: 'true', value: 'normal' },
        { text: 'false', value: 'nowrap' },
      ]"
      type="select"
      label="wrap"
      input-class="white"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <v-divider class="my-6"></v-divider>
    <p class="text-h5 font-weight-bold">Padding</p>
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

    <v-divider class="my-6"></v-divider>

    <p class="text-h5 font-weight-bold">Offset</p>

    <element-setting-input-box
      v-model="element['top']"
      type="textField"
      label="offsetTop"
      input-class="white"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['right']"
      type="textField"
      label="offsetEnd"
      input-class="white"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['bottom']"
      type="textField"
      label="offsetBottom"
      input-class="white"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['left']"
      type="textField"
      label="offsetStart"
      input-class="white"
      dense
      outlined
      hide-details
    ></element-setting-input-box>
  </v-container>
</template>

<script>
import camelToSentence from "@/utils/camelCaseToSentenceCase.js";
import ElementSettingInputBox from "@/components/panel/ElementSettingInputBox.vue";

export default {
  name: "TTextSettingPanel",

  components: {
    ElementSettingInputBox,
  },

  filters: {
    camelToSentence,
  },

  props: {
    element: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
