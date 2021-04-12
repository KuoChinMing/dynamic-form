<template>
  <v-layout column fill-height>
    <v-layout style="flex: 0 0 0" class="py-2 px-4 grey lighten-2 flex-wrap">
      <v-menu close-on-click offset-y min-width="120">
        <template v-slot:activator="{ on, attrs }">
          <toolbar-btn
            v-bind="attrs"
            v-on="on"
            dark
            class="mr-1"
            color="primary"
            :disabled="!selectedNode"
          >
            <v-icon small>mdi-plus</v-icon>
            <v-icon small>mdi-menu-down</v-icon>
          </toolbar-btn>
        </template>
        <v-list dense>
          <v-list-item
            @click="addNode(element.type)"
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
        item-text="type"
        item-children="contents"
        selected-color="primary"
        selection-type="independent"
      >
        <template v-slot:label="{ item, active }">
          <v-layout
            align-center
            @mouseenter="hightLightElement(item)"
            @mouseleave="removeHightLighting(item)"
          >
            <v-icon
              small
              class="mr-1"
              :color="selectedNode && active ? 'primary' : ''"
              >{{ typeIcon(item.type) }}</v-icon
            >
            {{ item.type }}
          </v-layout>
        </template></v-treeview
      >
    </v-layout>
  </v-layout>
</template>

<script>
import ToolbarBtn from "@/components/ToolbarBtn.vue";
// import { mapState } from "vuex";

export default {
  name: "OperationPanel",

  components: {
    ToolbarBtn,
  },

  props: {
    template: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      // TODO: restrict element that can be added
      elements: [],
      selectedNode: null,
      copiedNode: null,
      bindingData: null,
    };
  },

  created() {
    this.elements = [
      {
        type: "radioGroup",
        name: "radioGroup",
      },
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
        type: "textarea",
        name: "textarea",
      },
      {
        type: "checkbox",
        name: "checkbox",
      },
      {
        type: "textField",
        name: "textField",
      },
      {
        type: "selection",
        name: "selection",
      },
      {
        type: "imageUploader",
        name: "imageUploader",
      },
    ];
  },

  methods: {
    removeHightLighting(element) {
      this.$set(element, "backgroundColor", undefined);
    },
    hightLightElement(element) {
      // TODO 元件其實不可直接設定 backgroundColor，不然 mouseLeave 時會把使用者設定的 backgroundColor 取代 (應該多一層元素，在這層設置 backgroundColor)
      this.$set(element, "backgroundColor", "#E0E0E0");
    },
    typeIcon(type) {
      const icon = {
        text: "mdi-alpha-t-box",
        checkbox: "mdi-checkbox-marked",
      };
      return icon[type];
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
    deleteNode() {
      const parentNode = this.findParentNode(this.selectedNode);
      const parentNodeContents = parentNode.contents.filter(
        (elment) => elment !== this.selectedNode
      );
      this.$set(parentNode, "contents", parentNodeContents);
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
  },
};
</script>
