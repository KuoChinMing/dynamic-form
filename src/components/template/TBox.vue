<template>
  <v-flex :style="style">
    <v-layout v-bind="attrs">
      <slot></slot>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  name: "TBox",

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      style: {},
      attrs: {},
    };
  },

  watch: {
    data: {
      handler(data) {
        this.style = {
          width: "100%",
          flexGrow: data.flexGrow,
          flexShrink: data.flexShrink,
          flexBasis: data.flexBasis,
          // TODO: paddingAll
          // padding: data.paddingAll,
          paddingTop: data.paddingTop,
          paddingRight: data.paddingRight,
          paddingBottom: data.paddingBottom,
          paddingLeft: data.paddingLeft,
          backgroundColor: data.backgroundColor,
        };
        this.attrs = {
          [data.layout]: true,
          [data.alignItems]: true,
          wrap: data.wrap,
          [data.justifyContent]: true,
          fillHeight: data.fillHeight
        };
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
