<template>
  <v-layout column fill-height>
    <v-layout
      style="flex: 0 0 0"
      class="operation-toolbar py-2 px-3 grey lighten-2 flex-wrap"
    >
      <v-menu close-on-click offset-y min-width="120" max-height="300">
        <template v-slot:activator="{ on, attrs }">
          <v-btn-toggle
            class="mr-1"
            :background-color="
              !selectedNode || elementsCanBeAdded.length === 0
                ? 'grey'
                : 'primary'
            "
            dark
          >
            <toolbar-btn
              v-bind="attrs"
              v-on="on"
              color="primary"
              :disabled="!selectedNode || elementsCanBeAdded.length === 0"
            >
              <v-icon small>mdi-plus</v-icon>
              <v-icon small>mdi-menu-down</v-icon>
            </toolbar-btn>
          </v-btn-toggle>
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
          :disabled="!selectedNode || selectRootNode"
        >
          <v-icon size="16px">mdi-chevron-up</v-icon>
        </toolbar-btn>
        <toolbar-btn
          @click="moveDownNode"
          :disabled="!selectedNode || selectRootNode"
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
          :disabled="!selectedNode || selectRootNode"
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

      <v-btn-toggle dark background-color="secondary" class="mr-1">
        <toolbar-btn color="secondary" @click="openTreeviewAll">
          <v-icon small v-if="!isTreeviewAllOpen"
            >mdi-unfold-more-horizontal</v-icon
          >
          <v-icon small v-else>mdi-unfold-less-horizontal</v-icon>
        </toolbar-btn>
      </v-btn-toggle>

      <v-btn-toggle
        :background-color="!selectedNode || selectRootNode ? 'grey' : 'red'"
        dark
      >
        <toolbar-btn
          color="red"
          @click="deleteNode"
          :disabled="!selectedNode || selectRootNode"
        >
          <v-icon small>mdi-close</v-icon>
        </toolbar-btn>
      </v-btn-toggle>
    </v-layout>

    <v-layout style="flex: 1 0 0; overflow: auto">
      <v-treeview
        ref="treeview"
        hoverable
        style="flex-grow: 1"
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
    selectRootNode() {
      return this.selectedNode === this.template;
    },
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
      copiedNodeBindingData: {},
      firstPasteAfterCut: false,
      isTreeviewAllOpen: false,
    };
  },

  watch: {
    template() {
      // refresh treeview when template changed.
      // 如果改變的是 root 時，不用 refresh treeview 與 elementSettingPanel
      if (this.selectedNode === this.template) return;
      
      this.removeTreeviewActive();
      this.treeviewKey++;
      this.isTreeviewAllOpen = this.$refs.treeview.openAll;
    },
  },

  methods: {
    openTreeviewAll() {
      this.isTreeviewAllOpen = !this.isTreeviewAllOpen;
      this.$refs.treeview.updateAll(this.isTreeviewAllOpen);
    },
    elementNeedsBindingKey(element) {
      return elementsNeedBindingKey.includes(element);
    },
    typeIcon(type) {
      return icons[type];
    },
    deepCopy(obj) {
      return JSON.parse(JSON.stringify(obj));
    },
    // 確認傳入的 bindingKey 是否有與整個 template 內所有元素的 bindingKey 重複
    bindingKeyInTemplate(bindingKey, node = this.template) {
      if ("bindingKey" in node && node["bindingKey"] === bindingKey) {
        return true;
      }

      if ("contents" in node) {
        for (const childNode of node.contents) {
          if (this.bindingKeyInTemplate(bindingKey, childNode)) return true;
        }
      }

      return false;
    },
    // 遍歷傳入的結構確認其內元素的 bindingKey 是否有與整個 template 內元素的 bindingKey 重複，如果有則將其 biningKey 刪除
    resetBindingKey(node) {
      const bindingKey = node.bindingKey;

      if (bindingKey && this.bindingKeyInTemplate(bindingKey)) {
        delete node.bindingKey;
      }

      if ("contents" in node) {
        for (const childNode of node.contents) {
          this.resetBindingKey(childNode);
        }
      }

      return node;
    },
    findMaxId(node) {
      let currentId = node.id || 0;

      let childMaxId = 0;
      if ("contents" in node) {
        for (const childNode of node.contents) {
          const grandChildMaxId = this.findMaxId(childNode);
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
    replaceNodeId(node, uniqueId = this.genUniqueId()) {
      node.id = uniqueId;

      let uniqueNodeId = uniqueId;
      if ("contents" in node) {
        for (const childNode of node.contents) {
          uniqueNodeId = this.replaceNodeId(childNode, uniqueNodeId + 1);
        }
      }

      return uniqueNodeId;
    },
    findParentNode(node, parentNode = this.template) {
      if ("contents" in parentNode) {
        for (const childNode of parentNode.contents) {
          if (childNode === node) {
            return parentNode;
          } else {
            const parentNode = this.findParentNode(node, childNode);
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
      const newNode = { type, id };

      if ("contents" in this.selectedNode) {
        this.selectedNode.contents.push(newNode);
      } else {
        this.$set(this.selectedNode, "contents", [newNode]);
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
    restoreCopiedNodeBindingData() {
      for (const [bindingKey, bindingData] of Object.entries(
        this.copiedNodeBindingData
      )) {
        this.$set(this.bindingData, bindingKey, bindingData);
      }
    },
    storeCopiedNodeBindingData(node = this.copiedNode) {
      if ("bindingKey" in node && node["bindingKey"] in this.bindingData) {
        this.$set(
          this.copiedNodeBindingData,
          node.bindingKey,
          this.bindingData[node.bindingKey]
        );
      }

      if ("contents" in node) {
        for (const childNode of node.contents) {
          this.storeCopiedNodeBindingData(childNode);
        }
      }
    },
    cutNode() {
      this.copyNode();
      this.storeCopiedNodeBindingData();
      this.deleteNode();
      this.firstPasteAfterCut = true;
    },
    copyNode() {
      this.copiedNode = this.deepCopy(this.selectedNode);
    },
    pasteNode() {
      // 深拷貝，防止兩次以上的貼上參考到相同的 copiedNode
      let newNode = this.deepCopy(this.copiedNode);
      if (this.firstPasteAfterCut) {
        this.restoreCopiedNodeBindingData();
      } else {
        this.replaceNodeId(this.resetBindingKey(newNode));
      }

      if ("contents" in this.selectedNode) {
        this.selectedNode.contents.push(newNode);
      } else {
        this.$set(this.selectedNode, "contents", [newNode]);
      }

      this.firstPasteAfterCut = false;
    },
    deleteBindingData(node = this.selectedNode) {
      if ("bindingKey" in node && node["bindingKey"] in this.bindingData) {
        this.$delete(this.bindingData, node["bindingKey"]);
      }

      if ("contents" in node) {
        for (const childNode of node.contents) {
          this.deleteBindingData(childNode);
        }
      }
    },
    removeTreeviewActive() {
      // console.log(this.$refs.treeview);
      // will trigger treeview component @update:active event, and update the selectedNode to undefined.
      if (!this.selectedNode) return;

      this.$refs.treeview.updateActive(this.selectedNode.id, false);
      this.$refs.treeview.emitActive();
    },
    deleteNode() {
      const parentNode = this.findParentNode(this.selectedNode);
      const parentNodeContents = parentNode.contents.filter(
        (node) => node !== this.selectedNode
      );
      this.deleteBindingData();
      this.removeTreeviewActive();
      this.$set(parentNode, "contents", parentNodeContents);
    },
    unhoverNode(node) {
      this.$emit("unhover-node", node);
    },
    hoverNode(node) {
      this.$emit("hover-node", node);
    },
  },
};
</script>

<style lang="scss">
.operation-toolbar .v-btn {
  padding: 0 6px !important;
}
</style>
