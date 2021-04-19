<template>
  <v-layout column fill-height>
    <v-flex class="pa-4" style="flex: 1 0 0; overflow: auto">
      <component
        :is="elementSettingPanel"
        :element="element"
        :binding-data="bindingData"
      ></component>
    </v-flex>
  </v-layout>
</template>

<script>
import LoadingComponent from "@/components/Loading.vue";
import ErrorComponent from "@/components/Error.vue";
import camelToDash from "@/utils/camelCaseToDashCase.js";

const handleAsyncImport = (component) => ({
  component,
  loading: LoadingComponent,
  error: ErrorComponent,
});

export default {
  name: "ElementSettingPanel",

  components: {
    TTextSettingPanel: () =>
      handleAsyncImport(import("@/components/panel/TTextSettingPanel.vue")),
    TTableSettingPanel: () =>
      handleAsyncImport(import("@/components/panel/TTableSettingPanel.vue")),
    TTrowSettingPanel: () =>
      handleAsyncImport(import("@/components/panel/TTrowSettingPanel.vue")),
    TTcolSettingPanel: () =>
      handleAsyncImport(import("@/components/panel/TTcolSettingPanel.vue")),
    TBoxSettingPanel: () =>
      handleAsyncImport(import("@/components/panel/TBoxSettingPanel.vue")),
    TRadioGroupSettingPanel: () =>
      handleAsyncImport(
        import("@/components/panel/TRadioGroupSettingPanel.vue")
      ),
    TTextFieldSettingPanel: () =>
      handleAsyncImport(
        import("@/components/panel/TTextFieldSettingPanel.vue")
      ),
    TTextareaSettingPanel: () =>
      handleAsyncImport(
        import("@/components/panel/TTextareaSettingPanel.vue")
      ),
    TCheckboxSettingPanel: () =>
      handleAsyncImport(import("@/components/panel/TCheckboxSettingPanel.vue")),
    TIconSettingPanel: () =>
      handleAsyncImport(import("@/components/panel/TIconSettingPanel.vue")),
    TSelectSettingPanel: () =>
      handleAsyncImport(import("@/components/panel/TSelectSettingPanel.vue")),
    TDatePickerSettingPanel: () =>
      handleAsyncImport(
        import("@/components/panel/TDatePickerSettingPanel.vue")
      ),
    TMultiSelectSettingPanel: () =>
      handleAsyncImport(
        import("@/components/panel/TMultiSelectSettingPanel.vue")
      ),
    TTimeIntervalSelectSettingPanel: () =>
      handleAsyncImport(
        import("@/components/panel/TTimeIntervalSelectSettingPanel.vue")
      ),
    TSeparatorSettingPanel: () =>
      handleAsyncImport(
        import("@/components/panel/TSeparatorSettingPanel.vue")
      ),
    TChipGroupSettingPanel: () =>
      handleAsyncImport(
        import("@/components/panel/TChipGroupSettingPanel.vue")
      ),
    TChipSettingPanel: () =>
      handleAsyncImport(import("@/components/panel/TChipSettingPanel.vue")),
    TImageUploaderSettingPanel: () =>
      handleAsyncImport(
        import("@/components/panel/TImageUploaderSettingPanel.vue")
      ),
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

      const type = camelToDash(this.element?.type);

      return `t-${type}-setting-panel`;
    },
  },
};
</script>
