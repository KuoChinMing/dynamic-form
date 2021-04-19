<template>
  <v-radio-group
    v-model="innerValue"
    v-bind="radioGroupAttrs"
    :style="style"
    class="mt-0"
  >
    <slot></slot>
  </v-radio-group>
</template>

<script>
export default {
  name: "TRadioGroup",

  props: {
    data: {
      type: [Object, null],
      default: null,
    },
    value: {
      type: undefined,
    },
  },

  data() {
    return {
      style: {},
      radioGroupAttrs: {},
      innerValue: "",
    };
  },

  watch: {
    data: {
      handler(data) {
        this.style = {
          paddingTop: data.paddingTop,
          paddingRight: data.paddingRight,
          paddingBottom: data.paddingBottom,
          paddingLeft: data.paddingLeft,
        };
        this.radioGroupAttrs = {
          label: data.label,
          dense: data.dense,
          [data.direction]: true,
          disabled: data.disabled,
          hideDetails: true,
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
