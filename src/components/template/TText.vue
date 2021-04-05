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
      flexBasis: data.flexBasis || 0,
      width: data.width,
      textAlign: data.textAlign,
      fontWeight: data.fontWeight,
      fontSize: data.fontSize,
      fontStyle: data.fontStyle,
      color: data.color,
      textDecoration: data.textDecoration,
      position: data.position,
      whiteSpace: data.whiteSpace,
      margin: data.margin,
      top: data.top,
      bottom: data.bottom,
      left: data.left,
      right: data.right,
    };

    return (
      <v-flex style={style}>
        <span>{this.$slots.default ?? this.data.text ?? "hello world"}</span>
      </v-flex>
    );
  },
};
</script>
