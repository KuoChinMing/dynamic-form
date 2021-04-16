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
    const style = {
      border: "1px solid #ddd",
      padding: "8px",
      width: this.data.width || 0,
      backgroundColor: this.data.backgroundColor,
    };

    return (
      <td colspan={this.data.colspan} rowspan={this.data.rowspan} style={style}>
        {this.$slots.default}
      </td>
    );
  },
};
</script>
