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
    disabled: {
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
    disabled(disabled) {
      this.comboboxAttrs.disabled = disabled;
    },
    data: {
      handler(data) {
        this.style = {
          width: data.width,
          margin: data.margin,
          backgroundColor: data.backgroundColor,
        };
        this.comboboxAttrs = {
          dense: data.dense,
          [data.style]: true,
          items: data.time,
          multiple: data.multiple,
          hideDetails: true,
          disabled: this.disabled ?? data.disabled,
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
