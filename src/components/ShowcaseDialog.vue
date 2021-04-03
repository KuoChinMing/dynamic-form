<template>
  <v-dialog v-model="isOpen" scrollable max-width="600">
    <v-card>
      <v-card-text class="pa-4">
        <v-chip-group
          v-model="selectedTemplate"
          mandatory
          return
          active-class="primary--text text--accent-4"
        >
          <v-chip
            label
            v-for="({ name, template }, index) in templates"
            :key="index"
            :value="template"
            >{{ name }}</v-chip
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
    console.log(templates);
    this.templates = templates;
  },

  methods: {
    closeDialog() {
      this.isOpen = false;
    },
    applyTemplate() {
      this.$store.commit("template", this.selectedTemplate);
      this.closeDialog();
    },
  },
};
</script>
