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
        const paddingProperty = data.paddingAll
          ? {
              paddingAll: data.paddingAll,
            }
          : {
              paddingTop: data.paddingTop,
              paddingRight: data.paddingRight,
              paddingBottom: data.paddingBottom,
              paddingLeft: data.paddingLeft,
            };

        const marginProperty = data.marginAll
          ? {
              marginAll: data.marginAll,
            }
          : {
              marginTop: data.marginTop,
              marginLeft: data.marginLeft,
              marginBottom: data.marginBottom,
              marginRight: data.marginRight,
            };

        this.style = {
          borderWidth: data.borderWidth,
          borderStyle: data.borderStyle,
          borderColor: data.borderColor,
          flexGrow: data.flexGrow,
          flexShrink: data.flexShrink,
          flexBasis: data.flexBasis,
          backgroundColor: data.backgroundColor,
          ...paddingProperty,
          ...marginProperty,
        };

        this.attrs = {
          [data.layout]: true,
          [data.alignItems]: true,
          wrap: data.wrap,
          [data.justifyContent]: true,
          fillHeight: data.fillHeight,
        };
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
