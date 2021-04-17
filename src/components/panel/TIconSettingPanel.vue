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
      v-model="element['url']"
      type="textField"
      label="url"
      input-class="white"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['margin']"
      type="textField"
      label="margin"
      input-class="white"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['size']"
      type="textField"
      label="size"
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
  name: "TIconSettingPanel",

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
