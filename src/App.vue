<template>
  <v-app>
    <v-app-bar app outlined flat>
      <v-toolbar-title
        class="text-uppercase text-h5 font-weight-bold grey--text text--darken-1"
      >
        Dynamic Form
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
        @click="openJsonDialog"
        depressed
        color="secondary"
        class="text-none ml-2"
        >&lt;&sol;&gt; View as JSON</v-btn
      >
    </v-app-bar>

    <v-main>
      <form-view :expanded="isViewExpanded"></form-view>
    </v-main>

    <showcase-dialog v-model="isShowcaseDialogOpen"></showcase-dialog>
    <json-dialog v-model="isJsonDialogOpen"></json-dialog>
  </v-app>
</template>

<script>
import JsonDialog from "@/components/JsonDialog.vue";
import ShowcaseDialog from "@/components/ShowcaseDialog.vue";
import FormView from "@/views/FormView.vue";

export default {
  name: "App",

  components: {
    JsonDialog,
    ShowcaseDialog,
    FormView,
  },

  data() {
    return {
      isViewExpanded: false,
      isJsonDialogOpen: false,
      isShowcaseDialogOpen: false,
    };
  },

  methods: {
    openShowcaseDialog() {
      this.isShowcaseDialogOpen = true;
    },
    openJsonDialog() {
      this.isJsonDialogOpen = true;
    },
  },
};
</script>
