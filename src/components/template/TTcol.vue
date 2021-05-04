<script>
export default {
  name: "TTcol",

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  render() {
    const data = this.data;
    const paddingProperty = data.paddingAll
      ? {
          padding: data.paddingAll,
        }
      : {
          paddingTop: data.paddingTop,
          paddingRight: data.paddingRight,
          paddingBottom: data.paddingBottom,
          paddingLeft: data.paddingLeft,
        };

    const style = {
      borderWidth: data.borderWidth,
      borderStyle: data.borderStyle,
      borderColor: data.borderColor,
      width: data.width,
      backgroundColor: data.backgroundColor,
      verticalAlign: data.verticalAlign,
      ...paddingProperty,
    };

    return (
      <td colspan={data.colspan} rowspan={data.rowspan} style={style}>
        {this.$slots.default}
      </td>
    );
  },
};
</script>
