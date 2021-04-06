<template>
  <v-container>
    <element-setting-input-box
      v-model="element['direction']"
      input-class="white"
      label="layout"
      hide-details
      dense
      outlined
    ></element-setting-input-box>
  </v-container>
</template>

<script>
import ElementSettingInputBox from "@/components/ElementSettingInputBox.vue";

export default {
  name: "TTestSettingPanel",

  components: {
    ElementSettingInputBox,
  },

  props: {
    element: Object,
    default: () => {},
  },
};
</script>
