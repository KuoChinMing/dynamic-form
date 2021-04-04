<script>
import { VLayout, VFlex } from "vuetify/lib";

export default {
  name: "TemplateBox",

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
      flexGrow: data.flex ?? 0,
      flexShrink: 0,
      flexBasis: data.flexBasis ?? 0,
      // TODO
      // padding: data.paddingAll,
      paddingTop: data.paddingTop,
      paddingRight: data.paddingRight,
      paddingBottom: data.paddingBottom,
      paddingLeft: data.paddingLeft,
    };

    const comlumnLayout = data.layout === "vertical";
    const layoutStyle = {
      alignItems: data.alignItems,
      flexWrap: data.wrap ?? "nowrap",
    };

    return (
      <v-flex style={style}>
        <v-layout column={comlumnLayout} style={layoutStyle}>
          {this.$slots.default}
        </v-layout>
      </v-flex>
    );
  },
};
</script>
