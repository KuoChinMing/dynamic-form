<template>
  <v-container>
    <element-setting-input-box
      v-model="element['direction']"
      input-class="white"
      label="layout"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <binding-key-input-box
      :element="element"
      :binding-data="bindingData"
    ></binding-key-input-box>

    <element-setting-input-box
      v-model="bindingData[element['bindingKey']]"
      :disabled="!element['bindingKey']"
      :input-class="{ white: element['bindingKey'] }"
      type="select"
      :items="element['radioItems']"
      label="defaultValue"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <v-row class="align-center">
      <span class="text-h5 font-weight-bold">Radios</span>
      <v-btn
        fab
        x-small
        class="ml-2"
        depressed
        color="primary"
        @click="addOptions"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-row>

    <v-row align="center" v-for="(_, index) in options" :key="index">
      <v-col cols="3" class="text-right" style="white-space: nowrap">
        <v-btn
          depressed
          icon
          dark
          width="24px"
          height="24px"
          color="grey darken-1"
          class="mr-1"
          :ripple="false"
          @click="removeOptions(index)"
        >
          <v-icon small>mdi-close</v-icon>
        </v-btn>
        <label>{{ `radio${index+1}` }}</label>
      </v-col>
      <v-col cols="9">
        <v-text-field
          v-model="options[index]"
          class="white"
          dense
          outlined
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ElementSettingInputBox from "@/components/panel/ElementSettingInputBox.vue";
import BindingKeyInputBox from "@/components/panel/BindingKeyInputBox.vue";

export default {
  name: "TRadioGroupSettingPanel",

  components: {
    ElementSettingInputBox,
    BindingKeyInputBox,
  },

  props: {
    element: {
      type: Object,
      default: () => {},
    },
    bindingData: {
      type: [Object, null],
      default: null,
    },
  },

  data() {
    return {
      options: [],
    };
  },

  watch: {
    "element.radioItems": {
      handler(newVal) {
        this.options = newVal || [];
      },
      immediate: true,
    },
    options(newVal) {
      this.$set(this.element, "radioItems", newVal);
    },
  },

  methods: {
    addOptions() {
      this.options.push("");
    },
    removeOptions(index) {
      this.options = this.options.splice(index, 1);
    },
  },
};
</script>
