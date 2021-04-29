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
