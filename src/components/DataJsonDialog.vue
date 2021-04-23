<template>
  <v-dialog v-model="isOpen" scrollable max-width="600">
    <v-card>
      <v-card-text class="pa-4">
        <v-sheet flat>
          <textarea
            v-model="bindingDataString"
            ref="bindingDataInput"
            style="scroll: auto; border: 1px solid grey; width: 100%"
            class="rounded body-1"
            rows="20"
          ></textarea>

          <div class="text-right">
            <v-badge overlap color="transparent">
              <v-btn
                @click="remapBindingData"
                small
                class="text-lowercase subtitle-1"
                color="primary"
                text
                >remap binding data</v-btn
              >

              <template v-slot:badge>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-on="on" v-bind="attrs" small color="grey"
                      >mdi-alert-circle-outline</v-icon
                    >
                  </template>
                  <span
                    >重新映射 template 中的 binding key，並刪除多餘的 binding
                    value</span
                  >
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
          @click="copyBindingData"
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
          @click="applyBindingData"
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
  name: "DataJsonDialog",

  props: {
    value: {
      type: null,
    },
  },

  data() {
    return {
      bindingDataString: "",
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
    ...mapState(["template", "bindingData"]),
  },

  watch: {
    value(newValue) {
      this.isOpen = newValue;
    },
    isOpen(newValue) {
      this.$emit("input", newValue);
    },
    bindingData: {
      handler() {
        this.bindingDataString = JSON.stringify(this.bindingData, null, 2);
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
    remapBindingData() {
      const bindingData = JSON.parse(this.bindingDataString);
      const newBindingData = {};

      const remapping = (node) => {
        const bindingKey = node.bindingKey;
        if (bindingKey) {
          newBindingData[bindingKey] = bindingData[bindingKey] ?? null;
        }

        if ("contents" in node) {
          for (const childNode of node.contents) {
            remapping(childNode);
          }
        }
      };
      remapping(this.template);

      this.bindingDataString = JSON.stringify(newBindingData, null, 2);
      this.notify.normal("remap binding data successfully");
    },
    closeDialog() {
      this.isOpen = false;
    },
    copyBindingData() {
      this.$refs.bindingDataInput.select();
      document.execCommand("copy");
      this.$refs.bindingDataInput.blur();
      this.notify.normal("copied");
    },
    applyBindingData() {
      try {
        const bindingData = JSON.parse(this.bindingDataString);
        this.$store.commit("bindingData", bindingData);
        this.closeDialog();
      } catch (error) {
        this.notify.error(error);
      }
    },
  },
};
</script>
