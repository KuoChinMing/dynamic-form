<template>
  <v-flex :style="style">
    <v-combobox v-model="innerValue" v-bind="comboboxAttrs"></v-combobox>
  </v-flex>
</template>

<script>
import { VCombobox } from "vuetify/lib";

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
  },

  components: {
    VCombobox,
  },

  data() {
    return {
      style: {},
      comboboxAttrs: {},
      innerValue: [],
    };
  },

  watch: {
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
          items: data.options,
          multiple: true,
          hideDetails: true,
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
