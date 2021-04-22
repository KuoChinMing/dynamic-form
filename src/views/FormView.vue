<template>
  <v-sheet height="100%" style="overflow: auto">
    <v-layout fill-height :style="{ width: expanded ? '160%' : '100%' }">
      <v-flex id="form-panel-wrapper">
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
                :class="{ 'd-none': !highlightMask }"
              ></div>
            </v-sheet>
          </div>
        </v-layout>
      </v-flex>
      <v-flex id="operation-panel-wrapper" style="overflow: hidden">
        <!-- warning: template is mutating -->
        <!-- warning: binding data is mutating -->
        <operation-panel
          :template="template"
          :binding-data="bindingData"
          @select-node="selectNode"
          @hover-node="highLightElement"
          @unhover-node="removeHighLight"
        ></operation-panel>
      </v-flex>
      <v-flex id="element-setting-panel-wrapper">
        <!-- warning: template is mutating -->
        <!-- warning: binding data is mutating -->
        <element-setting-panel
          class="grey lighten-3"
          :element="selectedNode"
          :binding-data="bindingData"
        ></element-setting-panel>
      </v-flex>
    </v-layout>
  </v-sheet>
</template>

<script>
// https://github.com/nathancahill/split/tree/master/packages/splitjs
import Split from "split.js";

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

  computed: {
    ...mapState(["template", "bindingData"]),
  },

  data() {
    return {
      highlightMask: false,
      selectedNode: null,
      split: null,
    };
  },

  watch: {
    async expanded(expanded) {
      //100%, 30%, 30% = 62.5 : 18.75 : 18.75
      const sizes = expanded ? [62.5, 18.75, 18.75] : [40, 30, 30];

      this.split.setSizes(sizes);
      localStorage.setItem("split-sizes", JSON.stringify(sizes));
    },
  },

  async created() {
    await this.$nextTick();

    let sizes = localStorage.getItem("split-sizes");
    sizes = sizes ? JSON.parse(sizes) : [40, 30, 30];
    this.split = Split(
      [
        "#form-panel-wrapper",
        "#operation-panel-wrapper",
        "#element-setting-panel-wrapper",
      ],
      {
        sizes,
        minSize: [100, 0, 0],
        gutterSize: 10,
        onDragEnd(sizes) {
          localStorage.setItem("split-sizes", JSON.stringify(sizes));
        },
      }
    );
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

      this.highlightMask = true;
    },
    removeHighLight() {
      this.highlightMask = false;
    },
    selectNode(selectedNode) {
      this.selectedNode = selectedNode;
    },
  },
};
</script>

<style lang="scss">
.gutter {
  background-color: #fafafa;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
  z-index: 1;

  &.gutter-horizontal {
    cursor: col-resize;
  }
}
</style>
