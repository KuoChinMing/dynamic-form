<template>
  <v-flex :style="style">
    <v-combobox
      v-model="innerValue"
      v-bind="attrs"
      class="mx-2"
      hide-details
    ></v-combobox>
  </v-flex>
</template>

<script>
import disabledMixin from "./disabledMixin.js";

export default {
  name: "TCombobox",

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
          width: data.width,
        };
        this.attrs = {
          dense: data.dense,
          items: data.options,
          [data.style]: true,
          hideDetails: true,
          disabled: this.disabled,
          menuProps: {
            auto: true,
          },
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
