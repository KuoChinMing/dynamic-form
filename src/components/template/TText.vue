<script>
import { VFlex } from "vuetify/lib";

export default {
  name: "TemplateText",

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  components: {
    VFlex,
  },

  render() {
    const data = this.data;
    const style = {
      flexGrow: data.flex ?? 0,
      flexShrink: 0,
      flexBasis: data.flexBasis ?? 0,
      textAlign: data.align,
      fontWeight: data.fontWeight,
      fontSize: data.fontSize,
      // TODO
      // padding: data.paddingAll,
      paddingTop: data.paddingTop,
      paddingRight: data.paddingRight,
      paddingBottom: data.paddingBottom,
      paddingLeft: data.paddingLeft,
    };

    return (
      <v-flex style={style}>
        <span>{this.$slots.default}</span>
      </v-flex>
    );
  },
};
</script>
