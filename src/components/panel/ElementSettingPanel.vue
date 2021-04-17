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
import TTableSettingPanel from "@/components/panel/TTableSettingPanel.vue";
import TTrowSettingPanel from "@/components/panel/TTrowSettingPanel.vue";
import TTcolSettingPanel from "@/components/panel/TTcolSettingPanel.vue";
import TBoxSettingPanel from "@/components/panel/TBoxSettingPanel.vue";
import TRadioGroupSettingPanel from "@/components/panel/TRadioGroupSettingPanel.vue";
import TTextFieldSettingPanel from "@/components/panel/TTextFieldSettingPanel.vue";
import TImageUploaderSettingPanel from "@/components/panel/TImageUploaderSettingPanel.vue";
import TCheckboxSettingPanel from "@/components/panel/TCheckboxSettingPanel.vue";
import TIconSettingPanel from "@/components/panel/TIconSettingPanel.vue";
import TSelectSettingPanel from "@/components/panel/TSelectSettingPanel.vue";
import TDatePickerSettingPanel from "@/components/panel/TDatePickerSettingPanel.vue";
import TMultiSelectSettingPanel from "@/components/panel/TMultiSelectSettingPanel.vue";
import TTimeIntervalSelectSettingPanel from "@/components/panel/TTimeIntervalSelectSettingPanel.vue";
import TSeparatorSettingPanel from "@/components/panel/TSeparatorSettingPanel.vue";
import TChipGroupSettingPanel from "@/components/panel/TChipGroupSettingPanel.vue";
import TChipSettingPanel from "@/components/panel/TChipSettingPanel.vue";

export default {
  name: "ElementSettingPanel",

  components: {
    TTextSettingPanel,
    TTableSettingPanel,
    TTrowSettingPanel,
    TTcolSettingPanel,
    TBoxSettingPanel,
    TRadioGroupSettingPanel,
    TTextFieldSettingPanel,
    TImageUploaderSettingPanel,
    TCheckboxSettingPanel,
    TIconSettingPanel,
    TSelectSettingPanel,
    TDatePickerSettingPanel,
    TMultiSelectSettingPanel,
    TTimeIntervalSelectSettingPanel,
    TSeparatorSettingPanel,
    TChipGroupSettingPanel,
    TChipSettingPanel,
  },

  props: {
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
      if (!this.element) return;

      const type = this.camelToDash(this.element?.type);

      return `t-${type}-setting-panel`;
    },
  },

  methods: {
    camelToDash(camel) {
      return camel.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
    },
  },
};
</script>
