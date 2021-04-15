<template>
  <v-layout fill-height style="overflow: auto">
    <v-flex
      style="flex: 0 0 auto"
      :style="{ width: expanded ? '100%' : '40%' }"
    >
      <v-layout column fill-height>
        <div class="grey lighten-3 pa-6" style="flex: 1 0 0; overflow: auto">
          <v-sheet
            class="pa-2"
            elevation="6"
            style="overflow-x: auto; overflow-y: hidden"
          >
            <!-- warning: template is mutating -->
            <!-- warning: binding data is mutating -->
            <t-form :template="template" :binding-data="bindingData"></t-form>
          </v-sheet>
        </div>
      </v-layout>
    </v-flex>
    <v-flex style="flex: 0 0 auto" :style="{ width: expanded ? '50%' : '30%' }">
      <!-- warning: template is mutating -->
      <operation-panel
        :template="template"
        :binding-data="bindingData"
        @select-node="selectNode"
      ></operation-panel>
    </v-flex>
    <v-flex style="flex: 0 0 auto" :style="{ width: expanded ? '50%' : '30%' }">
      <!-- warning: template is mutating -->
      <!-- warning: binding data is mutating -->
      <element-setting-panel
        class="grey lighten-3"
        :element="selectedNode"
        :binding-data="bindingData"
      ></element-setting-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import TForm from "@/components/TForm.vue";
import OperationPanel from "@/components/OperationPanel.vue";
import ElementSettingPanel from "@/components/panel/ElementSettingPanel.vue";
import { mapState } from "vuex";

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
    ...mapState(["template", "bindingData"]),
  },

  // TODO for testing
  created() {
    setInterval(() => {
      localStorage.setItem("template", JSON.stringify(this.template));
      localStorage.setItem("bindingData", JSON.stringify(this.bindingData));
    }, 5000);
  },

  methods: {
    selectNode(selectedNode) {
      this.selectedNode = selectedNode;
    },
  },
};
</script>
