<script>
import { VLayout, VFlex } from "vuetify/lib";

export default {
  name: "TBox",

  props: {
    data: {
      type: Object,
      defualt: () => {},
    },
  },

  components: {
    VFlex,
    VLayout,
  },

  render() {
    const data = this.data;
    const style = {
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

    const layout = {
      horizontal: "row",
      vertical: "column",
    };

    const layoutStyle = {
      alignItems: data.alignItems,
      flexWrap: data.wrap,
      flexDirection: layout[data.layout],
      justifyContent: data.justifyContent,
    };

    return (
      <v-flex style={style}>
        <v-layout style={layoutStyle}>{this.$slots.default}</v-layout>
      </v-flex>
    );
  },
};
</script>
