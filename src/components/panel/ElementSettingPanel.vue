<template>
  <v-layout column fill-height>
    <v-flex class="pa-4" style="flex: 1 0 0; overflow: auto" v-if="element">
      <div class="text-h4 font-weight-bold">{{ element.type }}</div>

      <component
        :is="elementSettingPanel"
        :element="element"
        :binding-data="bindingData"
      ></component>
    </v-flex>
  </v-layout>
</template>

<script>
import TTextSettingPanel from "@/components/panel/TTextSettingPanel.vue";
import TTcolSettingPanel from "@/components/panel/TTcolSettingPanel.vue";
import TBoxSettingPanel from "@/components/panel/TBoxSettingPanel.vue";
import TTestSettingPanel from "@/components/panel/TTestSettingPanel.vue";
import TTextFieldSettingPanel from "@/components/panel/TTextFieldSettingPanel.vue";
import TImageUploaderSettingPanel from "@/components/panel/TImageUploaderSettingPanel.vue";

export default {
  name: "ElementSettingPanel",

  components: {
    TTextSettingPanel,
    TTcolSettingPanel,
    TBoxSettingPanel,
    TTestSettingPanel,
    TTextFieldSettingPanel,
    TImageUploaderSettingPanel
  },

  props: {
    // bindingData and element is mutating
    bindingData: {
      type: [Object, null],
      default: null,
    },
    element: {
      type: [Object, null],
      default: null,
    },
  },

  computed: {
    elementSettingPanel() {
      const settingPanel = {
        text: "t-text-setting-panel",
        tcol: "t-tcol-setting-panel",
        box: "t-box-setting-panel",
        radioGroup: "t-test-setting-panel",
        textField: "t-text-field-setting-panel",
        imageUpader: 't-image-uploader-setting-panel'
      };
      const type = this.element?.type;

      return settingPanel[type];
    },
  },
};
</script>
