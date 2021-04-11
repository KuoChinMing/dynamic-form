<script>
import { VIcon } from "vuetify/lib";

export default {
  name: "TIcon",

  components: {
    VIcon,
  },

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  render() {
    const style = {
      margin: this.data.margin,
      height: this.data.size || "16px",
      width: this.data.size || "16px",
      backgroundImage: this.data.url
        ? `url(${this.data.url})`
        : "url('https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png')",
      backgroundSize: "contain",
      backgroundPosition: "center",
      display: "inline-block",
    };

    return <span style={style}>{this.$slots.default}</span>;
  },
};
</script>
