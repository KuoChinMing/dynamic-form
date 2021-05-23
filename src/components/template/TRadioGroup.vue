<template>
  <v-flex :style="style">
    <v-radio-group v-model="innerValue" v-bind="radioGroupAttrs" class="mt-0">
      <slot></slot>
    </v-radio-group>
  </v-flex>
</template>

<script>
import disabledMixin from "./disabledMixin.js";

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
    formDisabled: {
      type: [Boolean, undefined],
      default: undefined,
    },
  },

  mixins: [disabledMixin],

  data() {
    return {
      style: {},
      radioGroupAttrs: {},
      innerValue: "",
    };
  },

  watch: {
    disabled(disabled) {
      this.radioGroupAttrs.disabled = disabled;
    },
    data: {
      handler(data) {
        this.style = {
          marginTop: data.marginTop,
          marginLeft: data.marginLeft,
          marginBottom: data.marginBottom,
          marginRight: data.marginRight,

          flexGrow: data.grow,
          flexShrink: data.shrink,
          flexBasis: data.flexBasis,

          paddingTop: data.paddingTop,
          paddingRight: data.paddingRight,
          paddingBottom: data.paddingBottom,
          paddingLeft: data.paddingLeft,
        };
        this.radioGroupAttrs = {
          label: data.label,
          dense: data.dense,
          [data.direction]: true,
          disabled: this.disabled,
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
