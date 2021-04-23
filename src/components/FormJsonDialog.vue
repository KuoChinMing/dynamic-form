<template>
  <v-dialog v-model="isOpen" scrollable max-width="600">
    <v-card>
      <v-card-text class="pa-4">
        <v-sheet flat>
          <textarea
            v-model="templateString"
            ref="templateInput"
            style="scroll: auto; border: 1px solid grey; width: 100%"
            class="rounded body-1"
            rows="20"
          ></textarea>

          <div class="text-right">
            <v-badge overlap color="transparent">
              <v-btn
                @click="tidyId"
                small
                class="text-lowercase subtitle-1"
                color="primary"
                text
                >tidy id</v-btn
              >

              <template v-slot:badge>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-on="on" v-bind="attrs" small color="grey"
                      >mdi-alert-circle-outline</v-icon
                    >
                  </template>
                  <span>tidy id 會依序重新給予元件 id</span>
                </v-tooltip>
              </template>
            </v-badge>
          </div>
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
      :timeout="1500"
      text
      outlined
      absolute
      centered
      :color="snackbarColor"
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
      templateString: "",
      notificationMessage: "",
      showNotification: false,
      isOpen: false,
      snackbarColor: "grey",

      notify: {
        normal: (message) => {
          this.snackbarColor = "primary";
          this.notificationMessage = message;
          this.showNotification = true;
        },
        error: (message) => {
          this.snackbarColor = "red";
          this.notificationMessage = message;
          this.showNotification = true;
        },
      },
    };
  },

  computed: {
    ...mapState(["template"]),
  },

  watch: {
    value(newValue) {
      this.isOpen = newValue;
    },
    isOpen(newValue) {
      this.$emit("input", newValue);
    },
    template: {
      handler() {
        this.templateString = JSON.stringify(this.template, null, 2);
      },
      immediate: true,
      deep: true,
    },
  },
  created() {
    if (this.value) {
      this.value = this.isOpen;
    }
  },

  methods: {
    tidyId() {
      const template = JSON.parse(this.templateString);

      const tidy = (node, id = 0) => {
        node.id = id;

        let childMaxId = id;
        if ("contents" in node) {
          for (const childNode of node.contents) {
            childMaxId = tidy(childNode, childMaxId + 1);
          }
        }

        return childMaxId;
      };

      tidy(template);
      this.templateString = JSON.stringify(template, null, 2);
      this.notify.normal("id now is tidy");
    },
    closeDialog() {
      this.isOpen = false;
    },
    copyTemplate() {
      this.$refs.templateInput.select();
      document.execCommand("copy");
      this.$refs.templateInput.blur();
      this.notify.normal("copied");
    },
    applyTemplate() {
      try {
        const template = JSON.parse(this.templateString);
        this.$store.commit("template", template);
        this.closeDialog();
      } catch (error) {
        this.notify.error(error);
      }
    },
  },
};
</script>
