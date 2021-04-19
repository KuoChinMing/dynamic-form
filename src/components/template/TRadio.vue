<template>
  <v-radio v-bind="radioAttrs" :style="style"></v-radio>
</template>

<script>
export default {
  name: "TRadio",

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      style: {},
      radioAttrs: {},
    };
  },

  watch: {
    data: {
      handler(data) {
        this.style = {
          margin: data.margin,
        };
        this.radioAttrs = {
          label: data.label,
          color: data.color,
          value: data.label,
        };
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
