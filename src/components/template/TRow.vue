<script>
export default {
  name: "TTRow",

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  render() {
    const style = {
      backgroundColor: this.data.backgroundColor,
    };

    return <tr style={style}>{this.$slots.default}</tr>;
  },
};
</script>
