<script>
import { VDivider } from "vuetify/lib";

export default {
  name: "TSeparator",

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  components: {
    VDivider,
  },

  render() {
    const data = this.data;
    const style = {
      // margin: data.marginAll,
      borderColor: data.color,
      marginTop: data.marginTop,
      marginLeft: data.marginLeft,
      marginBottom: data.marginBottom,
      marginRight: data.marginRight,
      backgroundColor: data.backgroundColor,
    };

    return <v-divider style={style}></v-divider>;
  },
};
</script>
