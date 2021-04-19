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
  },

  data() {
    return {
      attrs: {},
      innerValue: [],
    };
  },

  watch: {
    data: {
      handler(data) {
        this.attrs = {
          color: data.color,
          multiple: data.multiple,
          column: true,
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
