<template>
  <v-radio-group
    v-model="innerValue"
    class="mt-0"
    dense
    hide-details
    :style="style"
    :row="data['direction'] === 'row'"
    :column="data['direction'] === 'column'"
  >
    <v-radio
      v-for="(radio, index) in radioItems"
      :key="index"
      :label="radio"
      :value="radio"
      class=""
    ></v-radio>
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
      radioItems: [],
      innerValue: "",
    };
  },

  watch: {
    data: {
      handler() {
        this.style = {
          paddingTop: this.data.paddingTop,
          paddingRight: this.data.paddingRight,
          paddingBottom: this.data.paddingBottom,
          paddingLeft: this.data.paddingLeft,
          fontSize: this.data.fontSize,
        };
        this.radioItems = this.data.radioItems;
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
