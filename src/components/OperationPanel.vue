<template>
  <v-layout column fill-height>
    <v-layout style="flex: 0 0 0" class="py-2 px-4 grey lighten-2 flex-wrap">
      <v-menu close-on-click offset-y min-width="120" max-height="300">
        <template v-slot:activator="{ on, attrs }">
          <toolbar-btn
            v-bind="attrs"
            v-on="on"
            dark
            class="mr-1"
            color="primary"
            :disabled="!selectedNode || elementsCanBeAdded.length === 0"
          >
            <v-icon small>mdi-plus</v-icon>
            <v-icon small>mdi-menu-down</v-icon>
          </toolbar-btn>
        </template>
        <v-list dense>
          <v-list-item
            @click="addNode(element)"
            v-for="(element, index) in elementsCanBeAdded"
            :key="index"
          >
            <v-list-item-title>
              <v-icon
                v-if="typeIcon(element)"
                small
                class="mr-1"
                style="width: 16px; height: 16px"
              >
                {{ typeIcon(element) }}
              </v-icon>
              <span>{{ element | camelToSentence }}</span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn-toggle class="mr-1" background-color="grey" dark>
        <toolbar-btn
          @click="moveUpNode"
          :disabled="!selectedNode || template === selectedNode"
        >
          <v-icon size="16px">mdi-chevron-up</v-icon>
        </toolbar-btn>
        <toolbar-btn
          @click="moveDownNode"
          :disabled="!selectedNode || template === selectedNode"
        >
          <v-icon small>mdi-chevron-down</v-icon>
        </toolbar-btn>
      </v-btn-toggle>

      <v-btn-toggle class="mr-1" background-color="grey" dark>
        <toolbar-btn @click="copyNode" :disabled="!selectedNode">
          <v-icon small>mdi-content-copy</v-icon>
        </toolbar-btn>
        <toolbar-btn
          @click="cutNode"
          :disabled="!selectedNode || template === selectedNode"
        >
          <v-icon small>mdi-content-cut</v-icon>
        </toolbar-btn>
        <toolbar-btn
          @click="pasteNode"
          :disabled="!selectedNode || !copiedNode"
        >
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
        :disabled="!selectedNode || template === selectedNode"
      >
        <v-icon small>mdi-close</v-icon>
      </toolbar-btn>
    </v-layout>

    <v-layout style="flex: 1 0 0; overflow: auto">
      <v-treeview
        hoverable
        style="flex-grow: 1"
        open-all
        @update:active="selectNode"
        return-object
        dense
        activatable
        :items="[template]"
        :key="treeviewKey"
        item-children="contents"
        selected-color="primary"
        selection-type="independent"
        item-disabled="locked"
      >
        <!-- :color="selectedNode && active ? 'primary' : ''" -->
        <template v-slot:label="{ item: element, active }">
          <v-layout
            align-center
            @mouseenter="hoverNode(element)"
            @mouseleave="unhoverNode(element)"
          >
            <v-icon
              v-if="typeIcon(element.type)"
              small
              class="mr-1"
              :color="selectedNode && active ? 'primary' : ''"
              v-text="typeIcon(element.type)"
            ></v-icon>

            <span>{{ element.type | camelToSentence }}</span>

            <v-layout
              v-if="
                elementNeedsBindingKey(element.type) &&
                !(element.bindingKey in bindingData)
              "
              class="caption red--text"
            >
              <v-icon
                small
                class="mx-1"
                color="red"
                v-text="'mdi-alert-circle'"
              >
              </v-icon>
              [invalid binding key]
            </v-layout>
          </v-layout>
        </template>
      </v-treeview>
    </v-layout>
  </v-layout>
</template>

<script>
import ToolbarBtn from "@/components/ToolbarBtn.vue";
import icons from "@/iconMap.js";
import elementsNeedBindingKey from "@/elementsNeedBindingKey.js";
import childElementsMap from "@/childElementsMap.js";
import camelToSentence from "@/utils/camelCaseToSentenceCase.js";

export default {
  name: "OperationPanel",

  components: {
    ToolbarBtn,
  },

  filters: {
    camelToSentence,
  },

  props: {
    template: {
      type: Object,
      default: () => {},
    },
    bindingData: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    elementsCanBeAdded() {
      if (!this.selectedNode?.type) return [];

      return childElementsMap[this.selectedNode.type] || [];
    },
  },

  data() {
    return {
      // treeview key prevent treeview incorrectly highlight the selected item when template changed
      treeviewKey: 0,
      selectedNode: null,
      copiedNode: null,
    };
  },

  watch: {
    template() {
      // refresh treeview when template changed
      this.treeviewKey++;
      this.selectedNode = null;
    },
  },

  methods: {
    elementNeedsBindingKey(element) {
      return elementsNeedBindingKey.includes(element);
    },
    typeIcon(type) {
      return icons[type];
    },
    deepCopy(obj) {
      return JSON.parse(JSON.stringify(obj));
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
        let previosChildElement = null;
        for (const childElement of element.contents) {
          if (!previosChildElement) {
            this.replaceNodeId(childElement, uniqueId + 1);
          } else {
            this.replaceNodeId(
              childElement,
              this.findMaxId(previosChildElement) + 1
            );
          }
          previosChildElement = childElement;
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
    selectNode([selectedNode]) {
      this.selectedNode = selectedNode;
      this.$emit("select-node", selectedNode);
    },
    addNode(type) {
      const id = this.genUniqueId();
      const element = { type, id };

      if ("contents" in this.selectedNode) {
        this.selectedNode.contents.push(element);
      } else {
        this.$set(this.selectedNode, "contents", [element]);
      }
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
    cutNode() {
      this.copyNode();
      this.deleteNode();
    },
    copyNode() {
      this.copiedNode = this.deepCopy(this.selectedNode);
    },
    pasteNode() {
      // 深拷貝，防止兩次以上的貼上 replaceNodeId() 參考到相同的 node
      const newNode = this.deepCopy(this.replaceNodeId(this.copiedNode));

      if ("contents" in this.selectedNode) {
        this.selectedNode.contents.push(newNode);
      } else {
        this.$set(this.selectedNode, "contents", [newNode]);
      }
    },
    deleteBindingData() {
      const bindingKey = this.selectedNode["bindingKey"];
      if (bindingKey && bindingKey in this.bindingData) {
        this.$delete(this.bindingData, bindingKey);
      }
    },
    deleteNode() {
      const parentNode = this.findParentNode(this.selectedNode);
      const parentNodeContents = parentNode.contents.filter(
        (elment) => elment !== this.selectedNode
      );
      this.deleteBindingData();
      this.$set(parentNode, "contents", parentNodeContents);
    },
    unhoverNode(element) {
      this.$emit("unhover-node", element);
    },
    hoverNode(element) {
      this.$emit("hover-node", element);
    },
  },
};
</script>
