<template>
  <v-flex :style="style">
    <v-text-field
      v-model="innerValue"
      v-bind="attrs"
      class="mx-2"
      hide-details
    ></v-text-field>
  </v-flex>
</template>

<script>
import disabledMixin from "./disabledMixin.js";

export default {
  name: "TTextField",

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

  mixins: [disabledMixin],

  data() {
    return {
      style: {},
      attrs: {},
      innerValue: "",
    };
  },

  watch: {
    disabled(disabled) {
      this.attrs.disabled = disabled;
    },
    data: {
      handler(data) {
        this.style = {
          flexGrow: data.grow,
          flexShrink: data.shrink,
          flexBasis: data.flexBasis,
          marginTop: data.marginTop,
          marginLeft: data.marginLeft,
          marginBottom: data.marginBottom,
          marginRight: data.marginRight,
          backgroundColor: data.backgroundColor,
          width: data.width,
        };
        this.attrs = {
          disabled: this.disabled,
          label: data.label,
          dense: true,
          [data.style]: true,
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
