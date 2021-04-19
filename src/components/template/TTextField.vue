<script>
import { VLayout, VFlex, VTextField } from "vuetify/lib";

export default {
  name: "TTextField",

  props: {
    data: {
      type: Object,
      default: () => {},
    },
    value: {
      type: undefined,
    },
  },

  components: {
    VTextField,
    VFlex,
    VLayout,
  },

  data() {
    return {
      innerValue: "",
    };
  },

  watch: {
    value(newValue) {
      this.innerValue = newValue;
    },
    innerValue(newValue) {
      this.$emit("input", newValue);
    },
  },

  created() {
    this.innerValue = this.value;
  },

  render() {
    const data = this.data;
    const style = {
      flexGrow: data.flex,
      flexShrink: data.shrink,
      flexBasis: data.flexBasis,
      backgroundColor: data.backgroundColor,
      width: data.width,
    };
    // TODO data.width == "" ? data.width == 0 ? 的時候判斷
    const inputStyle = {
      // width: data.width ?? "140px",
    };

    return (
      <v-flex style={style}>
        <v-text-field
          v-model={this.innerValue}
          style={inputStyle}
          class="mx-2"
          dense
          hide-details
        ></v-text-field>
      </v-flex>
    );
  },
};
</script>
