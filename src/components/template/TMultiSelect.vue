<template>
  <v-flex :style="style">
    <v-autocomplete
      v-model="innerValue"
      v-bind="comboboxAttrs"
    ></v-autocomplete>
  </v-flex>
</template>

<script>
export default {
  name: "TMultiSelect",

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

  data() {
    return {
      style: {},
      comboboxAttrs: {},
      innerValue: [],
    };
  },

  watch: {
    formDisabled(disabled) {
      this.comboboxAttrs.disabled = disabled;
    },
    data: {
      handler(data) {
        this.style = {
          flexShrink: data.shrink,
          flexGrow: data.grow,
          width: data.width,
          backgroundColor: data.backgroundColor,
          marginTop: data.marginTop,
          marginLeft: data.marginLeft,
          marginBottom: data.marginBottom,
          marginRight: data.marginRight,
        };

        this.comboboxAttrs = {
          dense: data.dense,
          [data.style]: true,
          items: data.options,
          multiple: true,
          hideDetails: true,
          disabled: this.formDisabled ?? data.disabled,
          // chips: true,
          // smallChips: true,
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
