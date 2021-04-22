<template>
  <v-app>
    <v-app-bar app outlined flat>
      <v-toolbar-title
        class="text-uppercase text-h5 font-weight-bold grey--text text--darken-1"
      >
        dynamic form editor
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            fab
            x-small
            dark
            depressed
            class="secondary"
            @click="isViewExpanded = !isViewExpanded"
          >
            <v-icon v-show="isViewExpanded">mdi-unfold-less-vertical</v-icon>
            <v-icon v-show="!isViewExpanded">mdi-unfold-more-vertical</v-icon>
          </v-btn>
        </template>
        <span>{{ isViewExpanded ? "收合" : "展開" }}</span>
      </v-tooltip>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            depressed
            color="secondary"
            class="text-capitalize ml-2"
            v-bind="attrs"
            v-on="on"
            >new
            <v-icon small>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list dense>
          <v-list-item
            @click="addTemplate(root)"
            v-for="(root, index) in templateRoot"
            :key="index"
          >
            <v-list-item-title>{{ root }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn
        @click="openShowcaseDialog"
        depressed
        color="secondary"
        class="text-none ml-2"
        >Showcase</v-btn
      >
      <v-btn
        @click="openDataJsonDialog"
        depressed
        color="secondary"
        class="text-none ml-2"
        >&lt;&sol;&gt; View Data as JSON</v-btn
      >
      <v-btn
        @click="openFormJsonDialog"
        depressed
        color="secondary"
        class="text-none ml-2"
        >&lt;&sol;&gt; View Form as JSON</v-btn
      >
      <v-btn
        @click="saveJson"
        depressed
        color="primary"
        class="text-capitalize ml-2"
        >save</v-btn
      >
    </v-app-bar>

    <v-main>
      <form-view :expanded="isViewExpanded"></form-view>
    </v-main>

    <v-snackbar
      v-model="showNotification"
      :timeout="1500"
      text
      outlined
      absolute
      centered
      color="primary"
    >
      {{ notificationMessage }}
    </v-snackbar>

    <showcase-dialog v-model="isShowcaseDialogOpen"></showcase-dialog>
    <data-json-dialog v-model="isDataJsonDialogOpen"></data-json-dialog>
    <form-json-dialog v-model="isFormJsonDialogOpen"></form-json-dialog>
  </v-app>
</template>

<script>
import FormView from "@/views/FormView.vue";
import ShowcaseDialog from "@/components/ShowcaseDialog.vue";
import DataJsonDialog from "@/components/DataJsonDialog.vue";
import FormJsonDialog from "@/components/FormJsonDialog.vue";
import { mapState } from "vuex";

export default {
  name: "App",

  components: {
    FormView,
    ShowcaseDialog,
    DataJsonDialog,
    FormJsonDialog,
  },

  computed: {
    ...mapState(["template", "bindingData"]),
  },

  data() {
    return {
      isShowcaseDialogOpen: false,
      isDataJsonDialogOpen: false,
      isFormJsonDialogOpen: false,
      isViewExpanded: false,
      templateRoot: ["box", "table"],
      selectedTemplateRoot: null,
      showNotification: false,
      notificationMessage: "",
    };
  },

  created() {
    this.isViewExpanded = localStorage.getItem("is-view-expanded");
    this.isViewExpanded = this.isViewExpanded
      ? JSON.parse(this.isViewExpanded)
      : false;
  },

  watch: {
    isViewExpanded(val) {
      localStorage.setItem("is-view-expanded", JSON.stringify(val));
    },
  },

  methods: {
    saveJson() {
      localStorage.setItem("template", JSON.stringify(this.template));
      localStorage.setItem("binding-data", JSON.stringify(this.bindingData));
      this.notify("saved successfully");
    },
    notify(message) {
      this.notificationMessage = message;
      this.showNotification = true;
    },
    addTemplate(root) {
      this.$store.commit("template", { type: root, id: 0 });
    },
    openShowcaseDialog() {
      this.isShowcaseDialogOpen = true;
    },
    openDataJsonDialog() {
      this.isDataJsonDialogOpen = true;
    },
    openFormJsonDialog() {
      this.isFormJsonDialogOpen = true;
    },
  },
};
</script>
