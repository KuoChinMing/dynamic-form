<template>
  <v-dialog v-model="isOpen" scrollable max-width="600">
    <v-card>
      <v-card-text class="pa-4">
        <v-sheet flat>
          <textarea
            v-model="templateString"
            ref="templateInput"
            style="scroll: auto; border: 1px solid grey; width: 100%"
            class="rounded"
            rows="20"
          ></textarea>
        </v-sheet>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          @click="copyTemplate"
          class="text-capitalize"
          color="primary"
          outlined
          >copy</v-btn
        >

        <v-btn
          @click="closeDialog"
          class="text-capitalize"
          depressed
          color="secondary"
          >close</v-btn
        >
        <v-btn
          @click="applyTemplate"
          class="text-capitalize"
          depressed
          color="primary"
          >apply</v-btn
        >
      </v-card-actions>
    </v-card>

    <v-snackbar
      v-model="showNotification"
      :timeout="1000"
      text
      outlined
      absolute
      centered
      color="primary"
      class="text-capitalize text-center"
    >
      {{ notificationMessage }}
    </v-snackbar>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FormJsonDialog",

  props: {
    value: {
      type: null,
    },
  },

  data() {
    return {
      inputTemplateString: "",
      notificationMessage: "",
      showNotification: false,
      isOpen: false,
    };
  },

  computed: {
    ...mapState(["template"]),
    templateString: {
      get() {
        return JSON.stringify(this.template, null, 2);
      },
      set(newValue) {
        this.inputTemplateString = newValue;
      },
    },
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

    this.inputTemplateString = this.templateString;
  },

  methods: {
    closeDialog() {
      this.isOpen = false;
    },
    copyTemplate() {
      this.$refs.templateInput.select();
      document.execCommand("copy");
      this.$refs.templateInput.blur();
      this.notify("copied");
    },
    notify(message) {
      this.notificationMessage = message;
      this.showNotification = true;
    },
    applyTemplate() {
      const template = JSON.parse(this.inputTemplateString);
      this.$store.commit("template", template);
      this.closeDialog();
    },
  },
};
</script>
