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
            small
            dark
            depressed
            class="secondary"
            @click="isViewExpanded = !isViewExpanded"
          >
            <v-icon v-show="isViewExpanded">mdi-unfold-less-vertical</v-icon>
            <v-icon v-show="!isViewExpanded">mdi-unfold-more-vertical</v-icon>
          </v-btn>
        </template>
        <span>{{ isViewExpanded ? "並排" : "展開" }}</span>
      </v-tooltip>

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
    </v-app-bar>

    <v-main>
      <form-view :expanded="isViewExpanded"></form-view>
    </v-main>

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

export default {
  name: "App",

  components: {
    FormView,
    ShowcaseDialog,
    DataJsonDialog,
    FormJsonDialog,
  },

  data() {
    return {
      isShowcaseDialogOpen: false,
      isDataJsonDialogOpen: false,
      isFormJsonDialogOpen: false,
      isViewExpanded: false,
    };
  },

  methods: {
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
