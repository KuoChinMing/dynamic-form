<script>
import { VSelect } from "vuetify/lib";

export default {
  name: "TSelect",

  components: {
    VSelect,
  },

  props: {
    data: {
      type: Object,
      default: () => {},
    },
    value: {
      type: undefined,
    },
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
    const style = {
      margin: this.data.margin,
      flexShrink: this.data.flexShrink,
      flexGrow: this.data.flexGrow,
      width: this.data.width,
      backgroundColor: this.data.backgroundColor,
    };
    const props = {
      [this.data.style]: true,
      dense: this.data.dense,
      items: this.data.options,
    };

    return (
      <v-select
        v-model={this.innerValue}
        style={style}
        props={props}
        hide-details
      >
        {this.$slots.default}
      </v-select>
    );
  },
};
</script>
