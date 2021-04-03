<script>
import { VDivider } from "vuetify/lib";

export default {
  name: "TemplateSeparator",

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
      marginTop: data.marginTop,
      marginLeft: data.marginLeft,
      marginBottom: data.marginBottom,
      marginRight: data.marginRight,
    };

    return <v-divider style={style}></v-divider>;
  },
};
</script>
