<script>
export default {
  name: "TTable",

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  render() {
    const data = this.data;
    const style = {
      borderCollapse: "collapse",
      borderSpacing: 0,
      tableLayout: data.layout,
      width: data.width,
      backgroundColor: this.data.backgroundColor,
    };

    return (
      <table style={style}>
        <tbody>{this.$slots.default}</tbody>
      </table>
    );
  },
};
</script>
