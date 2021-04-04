<template>
  <v-layout fill-height style="overflow: auto">
    <v-flex
      style="flex: 0 0 auto"
      :style="{ width: expanded ? '100%' : '40%' }"
    >
      <v-layout column fill-height>
        <div class="grey lighten-3 pa-6" style="flex: 1 0 0; overflow: auto">
          <v-sheet class="pa-2" elevation="6">
            <dynamic-form
              id="form"
              :template="template"
              :binding-data="bindingData"
            ></dynamic-form>
          </v-sheet>
        </div>
      </v-layout>
    </v-flex>
    <v-flex style="flex: 0 0 auto" :style="{ width: expanded ? '50%' : '30%' }">
      <v-layout column fill-height>
        <v-layout
          style="flex: 0 0 0"
          class="py-2 px-4 grey lighten-2 flex-wrap"
        >
          <v-menu close-on-click offset-y min-width="120">
            <template v-slot:activator="{ on, attrs }">
              <toolbar-btn
                v-bind="attrs"
                v-on="on"
                dark
                class="mr-1"
                color="primary"
              >
                <v-icon small>mdi-plus</v-icon>
                <v-icon small>mdi-menu-down</v-icon>
              </toolbar-btn>
            </template>
            <v-list dense>
              <v-list-item
                @click="addNode(element)"
                v-for="(element, index) in elements"
                :key="index"
              >
                <v-list-item-title>{{ element.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn-toggle class="mr-1" background-color="grey" dark>
            <toolbar-btn
              @click="moveUpNode"
              :disabled="this.template === this.selectedNode"
            >
              <v-icon size="16px">mdi-chevron-up</v-icon>
            </toolbar-btn>
            <toolbar-btn
              @click="moveDownNode"
              :disabled="this.template === this.selectedNode"
            >
              <v-icon small>mdi-chevron-down</v-icon>
            </toolbar-btn>
          </v-btn-toggle>

          <v-btn-toggle class="mr-1" background-color="grey" dark>
            <toolbar-btn @click="copyNode">
              <v-icon small>mdi-content-copy</v-icon>
            </toolbar-btn>
            <toolbar-btn
              @click="cutNode"
              :disabled="this.template === this.selectedNode"
            >
              <v-icon small>mdi-content-cut</v-icon>
            </toolbar-btn>
            <toolbar-btn @click="pasteNode" :disabled="!copiedNode">
              <v-icon small>mdi-content-paste</v-icon>
            </toolbar-btn>
          </v-btn-toggle>

          <v-btn-toggle class="mr-1" background-color="grey" dark>
            <toolbar-btn>
              <v-icon small>mdi-undo</v-icon>
            </toolbar-btn>
            <toolbar-btn>
              <v-icon small>mdi-redo</v-icon>
            </toolbar-btn>
          </v-btn-toggle>

          <toolbar-btn
            color="red"
            dark
            @click="deleteNode"
            :disabled="this.template === this.selectedNode"
          >
            <v-icon small>mdi-close</v-icon>
          </toolbar-btn>
        </v-layout>

        <v-layout style="flex: 1 0 0; overflow: auto">
          <v-treeview
            style="flex-grow: 1"
            open-all
            @update:active="selectNode"
            return-object
            dense
            activatable
            :items="[template]"
            item-text="type"
            item-children="contents"
            selected-color="primary"
            selection-type="independent"
          ></v-treeview>
        </v-layout>
      </v-layout>
    </v-flex>
    <v-flex style="flex: 0 0 auto" :style="{ width: expanded ? '50%' : '30%' }">
      <v-layout column fill-height class="grey lighten-3">
        <!-- TODO: set selectedNode default value -->
        <div
          class="pa-6"
          style="flex: 1 0 0; overflow: auto"
          v-if="selectedNode"
        >
          <p class="text-h4">{{ selectedNode.type }}</p>
          <template v-if="selectedNode.type === 'tcol'">
            <span>innerText:</span>
            <v-text-field
              @blur="changeText"
              v-model="innerText"
              dense
              outlined
            ></v-text-field>
          </template>
        </div>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import DynamicForm from "@/components/DynamicForm.vue";
import ToolbarBtn from "@/components/ToolbarBtn.vue";
import { mapState } from "vuex";

export default {
  name: "FormView",

  components: {
    DynamicForm,
    ToolbarBtn,
  },

  props: {
    expanded: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      elements: [],
      innerText: "",
      selectedNode: null,
      copiedNode: null,
      bindingData: null,
    };
  },

  computed: {
    ...mapState(["template"]),
  },

  created() {
    // TODO: binding data
    this.bindingData = {};

    this.elements = [
      {
        type: "table",
        name: "table",
      },
      {
        type: "trow",
        name: "trow",
      },
      {
        type: "tcol",
        name: "tcol",
      },
      {
        type: "box",
        name: "box",
      },
      {
        type: "separator",
        name: "separator",
      },
      {
        type: "text",
        name: "text",
      },
      {
        type: "checkbox",
        name: "checkbox",
      },
      {
        type: "textField",
        name: "textField",
      },
    ];
  },

  methods: {
    changeText() {
      this.selectedNode.text = this.innerText;
    },
    findMaxId(element) {
      let currentId = element.id || 0;

      let childMaxId = 0;
      if ("contents" in element) {
        for (const childElement of element.contents) {
          const grandChildMaxId = this.findMaxId(childElement);
          if (grandChildMaxId > childMaxId) {
            childMaxId = grandChildMaxId;
          }
        }
      }

      if (childMaxId > currentId) return childMaxId;
      return currentId;
    },
    genUniqueId() {
      return this.findMaxId(this.template) + 1;
    },
    replaceNodeId(element, uniqueId = this.genUniqueId()) {
      element.id = uniqueId;
      if ("contents" in element) {
        for (const [index, childElement] of element.contents.entries()) {
          this.replaceNodeId(childElement, uniqueId + index + 1);
        }
      }

      return element;
    },
    findParentNode(element, parentElement = this.template) {
      if ("contents" in parentElement) {
        for (const childElement of parentElement.contents) {
          if (childElement === element) {
            return parentElement;
          } else {
            const parentNode = this.findParentNode(element, childElement);
            if (parentNode) return parentNode;
          }
        }
      }

      return null;
    },
    moveUpNode() {
      const parentNode = this.findParentNode(this.selectedNode);
      const index = parentNode.contents.indexOf(this.selectedNode);

      if (index === 0) return;

      this.$set(parentNode.contents, index, parentNode.contents[index - 1]);
      this.$set(parentNode.contents, index - 1, this.selectedNode);
    },
    moveDownNode() {
      const parentNode = this.findParentNode(this.selectedNode);
      const index = parentNode.contents.indexOf(this.selectedNode);

      if (index === parentNode.contents.length - 1) return;

      this.$set(parentNode.contents, index, parentNode.contents[index + 1]);
      this.$set(parentNode.contents, index + 1, this.selectedNode);
    },
    selectNode([selectedNode]) {
      this.selectedNode = selectedNode;
    },
    addNode({ type }) {
      const id = this.genUniqueId();
      const element = { type, id };

      if ("contents" in this.selectedNode) {
        this.selectedNode.contents.push(element);
      } else {
        this.$set(this.selectedNode, "contents", [element]);
      }
    },
    deleteNode() {
      const parentNode = this.findParentNode(this.selectedNode);
      const parentNodeContents = parentNode.contents.filter(
        (elment) => elment !== this.selectedNode
      );
      this.$set(parentNode, "contents", parentNodeContents);
    },
    cutNode() {
      this.copiedNode = this.selectedNode;
      this.deleteNode();
    },
    copyNode() {
      this.copiedNode = this.selectedNode;
    },
    pasteNode() {
      const cloneCopiedNode = JSON.parse(JSON.stringify(this.copiedNode));
      const newNode = this.replaceNodeId(cloneCopiedNode);

      if ("contents" in this.selectedNode) {
        this.selectedNode.contents.push(newNode);
      } else {
        this.$set(this.selectedNode, "contents", [newNode]);
      }
    },
  },
};
</script>
