<template>
  <v-chip-group v-model="innerValue" v-bind="attrs">
    <slot></slot>
  </v-chip-group>
</template>

<script>
export default {
  name: "TChipGroup",

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
      attrs: {},
      innerValue: [],
    };
  },

  watch: {
    formDisabled(disabled) {
      this.attrs.disabled = disabled;
    },
    data: {
      handler(data) {
        this.attrs = {
          color: data.color,
          multiple: data.multiple,
          column: true,
          hideDetails: true,
          disabled: this.formDisabled ?? data.disabled,
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
    if (this.vlaue) {
      this.innerValue = this.value;
    }
  },
};
</script>
