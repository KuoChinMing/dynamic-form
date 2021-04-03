<template>
  <v-layout fill-height style="overflow: auto">
    <v-flex style="flex: 0 0 auto" :style="{ width: expanded ? '50%' : '25%' }">
      <v-layout column fill-height>
        <v-toolbar style="flex: 0 0 0" class="grey lighten-2" flat dense
          >wer</v-toolbar
        >
        <v-treeview
          style="flex: 1 0 0; overflow: auto"
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
    </v-flex>
    <v-flex style="flex: 0 0 auto" :style="{ width: expanded ? '50%' : '25%' }">
      <v-layout column fill-height>
        <div class="grey lighten-3 pa-6" style="flex: 1 0 0; overflow: auto">
          <div class="title">1234</div>
          <v-text-field v-for="i in 10" :key="i" dense outlined></v-text-field>
        </div>
      </v-layout>
    </v-flex>
    <v-flex
      style="flex: 0 0 auto"
      :style="{ width: expanded ? '100%' : '50%' }"
    >
      <v-layout column fill-height>
        <div class="grey lighten-1 pa-6" style="flex: 1 0 0; overflow: auto">
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
  </v-layout>
</template>

<script>
import DynamicForm from "@/components/DynamicForm.vue";
import { mapState } from "vuex";

export default {
  name: "FormView",

  components: {
    DynamicForm,
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
      bindingData: null,
    };
  },

  computed: {
    ...mapState(["template"]),
  },

  watch: {},

  created() {
    // TODO: binding data
    this.bindingData = {};
  },

  methods: {
    searchElement(element) {
      // for (let layer = 0; layer < this.template.length; layer++) {
      //   if ((selectedElement = this.searchElement(this.template[layer]))) break;
      // }
      if (element.id == this.selectedNode.id) return element;
      if (!("contents" in element)) return null;

      let selectedElement = null;
      for (let layer = 0; layer < element.contents.length; layer++) {
        if ((selectedElement = this.searchElement(element.contents[layer])))
          break;
      }
      return selectedElement;
    },
    selectNode(selectedNode) {
      [this.selectedNode] = selectedNode;
    },
  },
};
</script>

<style lang="scss">
#form {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  // border-spacing: 0;
  width: 100%;
}

#form td,
#form th {
  border: 1px solid #ddd;
  padding: 8px;
}

#form tr:nth-child(even) {
  background-color: #f2f2f2;
}

#form tr:hover {
  background-color: #ddd;
}

#form th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
</style>
