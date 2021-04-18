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
            style="overflow-x: auto; overflow-y: hidden; position: relative"
            ref="formSheet"
          >
            <!-- warning: template is mutating -->
            <!-- warning: binding data is mutating -->
            <t-form :template="template" :binding-data="bindingData"></t-form>
            <div
              ref="overlay"
              style="position: absolute; z-index: 9999; opacity: 0.4"
              class="grey"
              :class="{ 'd-none': !highlight }"
            ></div>
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
        @hover-node="highLightElement"
        @unhover-node="removeHighLight"
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
      highlight: false,
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
    highLightElement({ id }) {
      const el = document.getElementById(`form-element-${id}`);

      // form-element is not generated yet.
      if (!el) return;

      const formSheet = this.$refs.formSheet.$el;
      const {
        scrollTop: formSheetScrollTop,
        scrollLeft: formSheetScrollLeft,
      } = formSheet;

      // offsetTop() will return integer value,
      // so use getBoundingClientRect() to prevent precision problem.
      // getBoundingClientRect() 是元素距離視窗可視範圍左上角 (0, 0) 的相對位置
      const {
        top: formSheetTop,
        left: formSheetLeft,
      } = formSheet.getBoundingClientRect();
      const {
        top: elmentTop,
        left: elementLeft,
        width,
        height,
      } = el.getBoundingClientRect();

      // overlay 元素距離 form sheet 位置 = for sheet scroll 偏移量 + (hover 元素距離可視視窗相對位置 - form sheet 距離可視視窗相對位置)
      this.$refs.overlay.style.top =
        formSheetScrollTop + (elmentTop - formSheetTop) + "px";
      this.$refs.overlay.style.left =
        formSheetScrollLeft + (elementLeft - formSheetLeft) + "px";
      this.$refs.overlay.style.width = width + "px";
      this.$refs.overlay.style.height = height + "px";

      this.highlight = true;
    },
    removeHighLight() {
      this.highlight = false;
    },
    selectNode(selectedNode) {
      this.selectedNode = selectedNode;
    },
  },
};
</script>
