<script>
import { VSelect, VFlex } from "vuetify/lib";
import disabledMixin from "./disabledMixin.js";

export default {
  name: "TSelect",

  components: {
    VSelect,
    VFlex,
  },

  mixins: [disabledMixin],

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
    const data = this.data;
    const style = {
      flexShrink: data.flexShrink,
      flexGrow: data.flexGrow,
      width: data.width,
      maxWidth: data.maxWidth,
      backgroundColor: data.backgroundColor,
      marginTop: data.marginTop,
      marginLeft: data.marginLeft,
      marginBottom: data.marginBottom,
      marginRight: data.marginRight,
    };
    const props = {
      dense: data.dense,
      items: data.options,
      [data.style]: true,
      hideDetails: true,
      disabled: this.disabled,
    };

    return (
      <v-flex style={style}>
        <v-select v-model={this.innerValue} props={props}>
          {this.$slots.default}
        </v-select>
      </v-flex>
    );
  },
};
</script>
