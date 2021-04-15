<template>
  <v-container>
    <element-setting-input-box
      v-model="element['direction']"
      input-class="white"
      type="select"
      :items="['row', 'column']"
      label="layout"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <binding-key-input-box
      :key="element.id"
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

    <!-- padding -->
    <v-row class="align-center">
      <span class="text-h5 font-weight-bold">Padding</span>
    </v-row>
    <element-setting-input-box
      v-model="element['paddingTop']"
      input-class="white"
      type="textField"
      label="paddingTop"
      hide-details
      dense
      outlined
    ></element-setting-input-box>
    <element-setting-input-box
      v-model="element['paddingRight']"
      input-class="white"
      type="textField"
      label="paddingRight"
      hide-details
      dense
      outlined
    ></element-setting-input-box>
    <element-setting-input-box
      v-model="element['paddingBottom']"
      input-class="white"
      type="textField"
      label="paddingBottom"
      hide-details
      dense
      outlined
    ></element-setting-input-box>
    <element-setting-input-box
      v-model="element['paddingLeft']"
      input-class="white"
      type="textField"
      label="paddingLeft"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <!-- radio items -->
    <v-row class="align-center">
      <span class="text-h5 font-weight-bold">Radios</span>
      <v-btn
        fab
        x-small
        class="ml-2"
        depressed
        color="primary"
        @click="addRadioItem"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-row>
    <v-row align="center" v-for="(_, index) in radioItems" :key="index">
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
          @click="removeRadioItem(index)"
        >
          <v-icon small>mdi-close</v-icon>
        </v-btn>
        <label>{{ `radio${index + 1}` }}</label>
      </v-col>
      <v-col cols="9">
        <v-text-field
          v-model="radioItems[index]"
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
      radioItems: [],
    };
  },

  watch: {
    "element.radioItems": {
      handler(newVal) {
        this.options = newVal || [];
      },
      immediate: true,
    },
    radioItems(newVal) {
      this.$set(this.element, "radioItems", newVal);
    },
  },

  methods: {
    addRadioItem() {
      this.radioItems.push("");
    },
    removeRadioItem(index) {
      this.radioItems.splice(index, 1);
    },
  },
};
</script>
