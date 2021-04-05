<template>
  <v-layout column fill-height>
    <v-flex class="pa-4" style="flex: 1 0 0; overflow: auto" v-if="element">
      <div class="text-h4 font-weight-bold">{{ element.type }}</div>

      <t-text-setting-panel
        v-if="element.type === 'text'"
        :element="element"
      ></t-text-setting-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import TTextSettingPanel from "@/components/TTextSettingPanel.vue";

export default {
  name: "ElementSettingPanel",

  components: {
    TTextSettingPanel,
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
};
</script>
