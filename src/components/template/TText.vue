<script>
import { VFlex } from "vuetify/lib";

export default {
  name: "TText",

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
      flexGrow: data.grow,
      flexShrink: data.shrink,
      flexBasis: data.flexBasis,
      marginTop: data.marginTop,
      marginLeft: data.marginLeft,
      marginBottom: data.marginBottom,
      marginRight: data.marginRight,
      paddingTop: data.paddingTop,
      paddingLeft: data.paddingLeft,
      paddingBottom: data.paddingBottom,
      paddingRight: data.paddingRight,
      width: data.width,
      fontWeight: data.fontWeight,
      fontSize: data.fontSize,
      fontStyle: data.fontStyle,
      color: data.color,
      textDecoration: data.textDecoration,
      position: data.position,
      whiteSpace: data.whiteSpace,
      top: data.top,
      bottom: data.bottom,
      left: data.left,
      right: data.right,
      textAlign: data.textAlign,
      backgroundColor: data.backgroundColor,
    };

    return (
      <v-flex style={style}>
        <span>{this.$slots.default ?? this.data.text ?? "hello world"}</span>
      </v-flex>
    );
  },
};
</script>
