<template>
  <v-container>
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
import ElementSettingInputBox from "@/components/ElementSettingInputBox.vue";

export default {
  name: "TTcolSettingPanel",

  components: {
    ElementSettingInputBox,
  },

  props: {
    element: Object,
    default: () => {},
  },
};
</script>
