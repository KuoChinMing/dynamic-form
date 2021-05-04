<template>
  <v-container>
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
      v-model="element['layout']"
      type="select"
      :items="['auto', 'fixed']"
      input-class="white"
      label="layout"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['width']"
      type="textField"
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
  name: "TTableSettingPanel",

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
