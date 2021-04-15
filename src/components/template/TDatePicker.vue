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
          readonly
          hide-details
          v-bind="{ ...attrs, ...inputAttrs }"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        v-bind="datePickerAttrs"
        no-title
        scrollable
        @click:date="[setDate($event), closeDatePicker()]"
      >
      </v-date-picker>
    </v-menu>
  </v-flex>
</template>

<script>
import { VDatePicker, VMenu } from "vuetify/lib";

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
  },

  components: {
    VDatePicker,
    VMenu,
  },

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
    data: {
      handler(data) {
        this.style = {
          backgroundColor: data.backgroundColor,
          width: data.width,
        };
        this.inputAttrs = {
          disabled: data.disabled,
          label: data.label,
          [data.style]: true,
          dense: data.dense,
        };
        this.datePickerAttrs = {
          locale: data.locale,
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
