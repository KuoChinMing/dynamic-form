<template>
  <v-textarea :disabled="false" :style="style" hide-details></v-textarea>
</template>

<script>
export default {
  name: "TTextarea",

  props: {
    data: {
      type: [Object, null],
      default: null,
    },
  },

  data() {
    return {
      style: {
        height: this.data.height,
      },
    };
  },
};
</script>
