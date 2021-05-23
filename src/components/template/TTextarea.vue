<template>
  <v-flex :style="style">
    <v-textarea v-model="innerValue" v-bind="textareaAttrs"></v-textarea>
  </v-flex>
</template>

<script>
import disabledConditionsMixin from "./disabledConditionsMixin.js";

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
    disabled: {
      type: [Boolean, undefined],
      default: undefined,
    },
  },

  mixins: [disabledConditionsMixin],

  computed: {
    textareaDisabled() {
      // 表單被 disabled 的條件 (this.disabled) 優先，
      // 其次是元素的 disabled (this.data.dislabed)
      // 最後才是條件式 disabled
      return this.disabled ?? this.data.disabled !== "conditions"
        ? this.data.disabled
        : this.disabledConditions;
    },
  },

  data() {
    return {
      style: {},
      textareaAttrs: {},
      innerValue: "",
    };
  },

  watch: {
    textareaDisabled(textareaDisabled) {
      this.textareaAttrs.disabled = textareaDisabled;
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
          disabled: this.textareaDisabled,
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
