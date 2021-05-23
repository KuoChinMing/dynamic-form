<template>
  <v-flex :style="style">
    <v-menu
      v-model="isOpen"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          v-bind="{ ...attrs, ...inputAttrs }"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        v-bind="datePickerAttrs"
        @click:date="[setDate($event), closeDatePicker()]"
      >
      </v-date-picker>
    </v-menu>
  </v-flex>
</template>

<script>
import { VDatePicker, VMenu } from "vuetify/lib";
import disabledMixin from "./disabledMixin.js";

export default {
  name: "TDatePicker",

  props: {
    data: {
      type: Object,
      default: () => {},
    },
    value: {
      type: undefined,
    },
    formDisabled: {
      type: [Boolean, undefined],
      default: undefined,
    },
  },

  components: {
    VDatePicker,
    VMenu,
  },

  mixins: [disabledMixin],

  data() {
    return {
      style: {},
      inputAttrs: {},
      datePickerAttrs: {},
      isOpen: false,
      date: "",
    };
  },

  watch: {
    disabled(disabled) {
      this.inputAttrs.disabled = disabled;
    },
    data: {
      handler(data) {
        this.style = {
          flexGrow: data.grow,
          flexShrink: data.shrink,
          marginTop: data.marginTop,
          marginLeft: data.marginLeft,
          marginBottom: data.marginBottom,
          marginRight: data.marginRight,
          backgroundColor: data.backgroundColor,
          width: data.width,
        };
        this.inputAttrs = {
          disabled: this.disabled,
          label: data.label,
          dense: data.dense,
          [data.style]: true,
          readonly: true,
          hideDetails: true,
        };
        this.datePickerAttrs = {
          locale: data.locale,
          noTitle: true,
          scrollable: true,
        };
      },
      immediate: true,
      deep: true,
    },
    value(newValue) {
      this.date = newValue;
    },
    date(newValue) {
      this.$emit("input", newValue);
    },
  },

  created() {
    this.date = this.value;
  },

  methods: {
    setDate(date) {
      this.date = date;
    },
    closeDatePicker() {
      this.isOpen = false;
    },
  },
};
</script>
