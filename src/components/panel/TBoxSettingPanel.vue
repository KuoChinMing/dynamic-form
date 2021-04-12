<template>
  <v-container>
    <element-setting-input-box
      v-model="element['layout']"
      input-class="white"
      type="select"
      label="layout"
      :items="['', 'horizontal', 'vertical']"
      hide-details
      dense
      outlined
    ></element-setting-input-box>
  </v-container>
</template>

<script>
import ElementSettingInputBox from "@/components/panel/ElementSettingInputBox.vue";

export default {
  name: "TBoxSettingPanel",

  components: {
    ElementSettingInputBox,
  },

  props: {
    element: Object,
    default: () => {},
  },
};
</script>
