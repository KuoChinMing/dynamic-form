<script>
export default {
  name: "TRow",

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
