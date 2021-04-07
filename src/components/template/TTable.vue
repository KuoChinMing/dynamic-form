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
    const style = {
      borderCollapse: "collapse",
      borderSpacing: 0,
      width: "100%",
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
