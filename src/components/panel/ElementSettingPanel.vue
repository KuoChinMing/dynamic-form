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
import TRadioGroupSettingPanel from "@/components/panel/TRadioGroupSettingPanel.vue";
import TTextFieldSettingPanel from "@/components/panel/TTextFieldSettingPanel.vue";
import TImageUploaderSettingPanel from "@/components/panel/TImageUploaderSettingPanel.vue";
import TCheckboxSettingPanel from "@/components/panel/TCheckboxSettingPanel.vue";
import TIconSettingPanel from "@/components/panel/TIconSettingPanel.vue";
import TSelectSettingPanel from "@/components/panel/TSelectSettingPanel.vue";

export default {
  name: "ElementSettingPanel",

  components: {
    TTextSettingPanel,
    TTcolSettingPanel,
    TBoxSettingPanel,
    TRadioGroupSettingPanel,
    TTextFieldSettingPanel,
    TImageUploaderSettingPanel,
    TCheckboxSettingPanel,
    TIconSettingPanel,
    TSelectSettingPanel,
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
        radioGroup: "t-radio-group-setting-panel",
        textField: "t-text-field-setting-panel",
        imageUpader: "t-image-uploader-setting-panel",
        checkbox: "t-checkbox-setting-panel",
        icon: "t-icon-setting-panel",
        select: "t-select-setting-panel",
      };
      const type = this.element?.type;

      return settingPanel[type];
    },
  },
};
</script>
