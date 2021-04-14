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
      style: {
        width: this.data.width,
        padding: 0,
      },
      radioItems: this.data.radioItems,
      innerValue: "",
    };
  },

  watch: {
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
