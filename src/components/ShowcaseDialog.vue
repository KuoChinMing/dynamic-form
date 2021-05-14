<template>
  <v-dialog v-model="isOpen" scrollable max-width="600">
    <v-card>
      <v-card-text class="pa-4">
        <v-chip-group
          v-model="selectedTemplate"
          active-class="primary--text text--accent-4"
          column
        >
          <v-chip
            label
            v-for="(template, index) in templates"
            :key="index"
            :value="template"
            >{{ template.name }}</v-chip
          >
        </v-chip-group>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          @click="closeDialog"
          class="text-capitalize"
          depressed
          color="secondary"
          >cancel</v-btn
        >
        <v-btn
          @click="applyTemplate"
          class="text-capitalize"
          depressed
          color="primary"
          :disabled="!selectedTemplate"
          >create</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { templates } from "@/showcase.js";

export default {
  name: "ShowcaseDialog",

  props: {
    value: {
      type: null,
    },
  },

  data() {
    return {
      selectedTemplate: null,
      isOpen: false,
      templates: [],
    };
  },

  watch: {
    value(newValue) {
      this.isOpen = newValue;
    },
    isOpen(newValue) {
      this.$emit("input", newValue);
    },
  },
  created() {
    if (this.value) {
      this.value = this.isOpen;
    }

    this.templates = templates;
  },

  methods: {
    deepCopy(obj) {
      try {
        return JSON.parse(JSON.stringify(obj));
      } catch {
        console.error(
          `JSON 解析失敗, in file: ShowcaseDialog.vue, JSON: ${obj}`
        );
        return {};
      }
    },
    closeDialog() {
      this.isOpen = false;
    },
    applyTemplate() {
      // 選擇 template 後，深拷貝給 vuex，再去做表單編輯，不然會影響這裡的 this.templates
      this.$store.commit(
        "template",
        this.deepCopy(this.selectedTemplate.template)
      );
      this.$store.commit(
        "bindingData",
        this.deepCopy(this.selectedTemplate.bindingData)
      );
      this.closeDialog();
    },
  },
};
</script>
