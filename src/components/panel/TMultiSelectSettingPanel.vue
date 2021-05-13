<template>
  <v-container>
    <element-setting-input-box
      :value="element['type']"
      type="textField"
      label="type"
      hide-details
      dense
      outlined
      disabled
    ></element-setting-input-box>

    <element-setting-input-box
      :value="element['id']"
      type="textField"
      label="id"
      disabled
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <binding-key-input-box
      :key="element.id"
      :element="element"
      :binding-data="bindingData"
    ></binding-key-input-box>

    <v-row align="center">
      <v-col cols="3" class="text-right">
        <label>defaultValue</label>
      </v-col>
      <v-col cols="9">
        <v-autocomplete
          v-model="bindingData[element['bindingKey']]"
          :disabled="!element['bindingKey']"
          :class="{ white: element['bindingKey'] }"
          :items="element['options']"
          hide-details
          dense
          outlined
          multiple
        ></v-autocomplete>
      </v-col>
    </v-row>

    <element-setting-input-box
      v-model="element['grow']"
      type="select"
      input-class="white"
      label="grow"
      :items="[
        { text: 'true', value: 1 },
        { text: 'false', value: 0 },
      ]"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['shrink']"
      type="select"
      input-class="white"
      label="shrink"
      :items="[
        { text: 'true', value: 1 },
        { text: 'false', value: 0 },
      ]"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['marginTop']"
      input-class="white"
      label="marginTop"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['marginLeft']"
      input-class="white"
      label="marginLeft"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['marginBottom']"
      input-class="white"
      label="marginBottom"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['marginRight']"
      input-class="white"
      label="marginRight"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['width']"
      type="textField"
      input-class="white"
      label="width"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['style']"
      type="select"
      input-class="white"
      label="style"
      :items="[
        { text: 'standard', value: 'standard' },
        {
          text: 'filled',
          value: 'filled',
        },
        {
          text: 'outlined',
          value: 'outlined',
        },
        {
          text: 'solo',
          value: 'solo',
        },
      ]"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['dense']"
      type="select"
      input-class="white"
      label="dense"
      :items="[false, true]"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <v-divider class="my-6"></v-divider>

    <v-row class="align-center">
      <span class="text-h5 font-weight-bold">Options</span>
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

    <v-row align="center" v-for="(_, index) in options" :key="'option' + index">
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
        <label>{{ `option${index + 1}` }}</label>
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
  name: "TMultiSelectSettingPanel",

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
    "element.options": {
      handler(newVal) {
        this.options = newVal || [];
      },
      immediate: true,
    },
    options(newVal) {
      this.$set(this.element, "options", newVal);
    },
  },

  methods: {
    addOptions() {
      this.options.push("");
    },
    removeOptions(index) {
      this.options.splice(index, 1);
    },
  },
};
</script>
