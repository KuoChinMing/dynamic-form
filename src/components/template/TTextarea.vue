<template>
  <v-flex :style="style">
    <v-textarea v-model="innerValue" v-bind="textareaAttrs"></v-textarea>
  </v-flex>
</template>

<script>
import disabledMixin from "./disabledMixin.js";

export default {
  name: "TTextarea",

  props: {
    data: {
      type: Object,
      default: () => {},
    },
    value: {
      type: undefined,
    },
  },

  mixins: [disabledMixin],

  data() {
    return {
      style: {},
      textareaAttrs: {},
      innerValue: "",
    };
  },

  watch: {
    disabled(disabled) {
      this.textareaAttrs.disabled = disabled;
    },
    data: {
      handler(data) {
        this.style = {
          width: data.width,
          margin: data.margin,
          backgroundColor: data.backgroundColor,
        };
        this.textareaAttrs = {
          dense: data.dense,
          autoGrow: data.autoGrow,
          [data.style]: true,
          noResize: data.noResize,
          label: data.label,
          hint: data.hint,
          hideDetails: data.hideHint,
          rows: data.rows,
          disabled: this.disabled,
        };
      },
      immediate: true,
      deep: true,
    },
    value(newValue) {
      this.innerValue = newValue;
    },
    innerValue(newValue) {
      this.$emit("input", newValue);
    },
  },

  created() {
    this.innerValue = this.value;
  },
};
</script>
