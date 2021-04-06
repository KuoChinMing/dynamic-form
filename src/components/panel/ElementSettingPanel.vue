<template>
  <v-layout column fill-height>
    <v-flex class="pa-4" style="flex: 1 0 0; overflow: auto" v-if="element">
      <div class="text-h4 font-weight-bold">{{ element.type }}</div>

      <component :is="elementSettingPanel" :element="element"></component>
    </v-flex>
  </v-layout>
</template>

<script>
import TTextSettingPanel from "@/components/panel/TTextSettingPanel.vue";
import TTcolSettingPanel from "@/components/panel/TTcolSettingPanel.vue";
import TBoxSettingPanel from "@/components/panel/TBoxSettingPanel.vue";

export default {
  name: "ElementSettingPanel",

  components: {
    TTextSettingPanel,
    TTcolSettingPanel,
    TBoxSettingPanel,
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
      };
      const type = this.element?.type;

      return settingPanel[type];
    },
  },
};
</script>
