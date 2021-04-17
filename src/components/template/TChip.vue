<template>
  <v-chip v-bind="attrs" :value="text">{{ text }}</v-chip>
</template>

<script>
export default {
  name: "TChip",

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      attrs: {},
      text: "",
    };
  },

  watch: {
    data: {
      handler(data) {
        this.attrs = {
          filter: data.filter,
          outlined: data.outlined,
          color: data.color,
          textColor: data.textColor,
          label: data.tile,
          [data.size]: true,
        };

        this.text = data.value;
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
