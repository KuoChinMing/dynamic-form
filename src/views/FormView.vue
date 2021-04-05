<template>
  <v-layout fill-height style="overflow: auto">
    <v-flex
      style="flex: 0 0 auto"
      :style="{ width: expanded ? '100%' : '40%' }"
    >
      <v-layout column fill-height>
        <div class="grey lighten-3 pa-6" style="flex: 1 0 0; overflow: auto">
          <v-sheet class="pa-2" elevation="6" style="overflow: auto">
            <t-form :template="template" :binding-data="bindingData"></t-form>
          </v-sheet>
        </div>
      </v-layout>
    </v-flex>
    <v-flex style="flex: 0 0 auto" :style="{ width: expanded ? '50%' : '30%' }">
      <operation-panel
        :template="template"
        @selectNode="selectNode"
      ></operation-panel>
    </v-flex>
    <v-flex style="flex: 0 0 auto" :style="{ width: expanded ? '50%' : '30%' }">
      <element-setting-panel
        class="grey lighten-3"
        :element="selectedNode && selectedNode.type"
      ></element-setting-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import TForm from "@/components/TForm.vue";
import OperationPanel from "@/components/OperationPanel.vue";
import ElementSettingPanel from "@/components/ElementSettingPanel.vue";
import { mapState } from "vuex";

import { bindingData } from "@/showcase.js";

export default {
  name: "FormView",

  components: {
    TForm,
    OperationPanel,
    ElementSettingPanel,
  },

  props: {
    expanded: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      selectedNode: null,
    };
  },

  computed: {
    ...mapState(["template"]),
  },

  watch: {
    bindingData: {
      handler() {
        console.log("binding data changed.");
      },
      deep: true,
    },
  },

  created() {
    // TODO: binding data
    this.bindingData = bindingData.diagnosisTypeBindingData;
  },

  methods: {
    selectNode(selectedNode) {
      this.selectedNode = selectedNode;
    },
  },
};
</script>
