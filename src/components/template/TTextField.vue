<script>
import { VLayout, VFlex, VTextField } from "vuetify/lib";

export default {
  name: "TemplateTextField",

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
      flexGrow: data.flex || 0,
      flexShrink: data.shrink || 0,
      flexBasis: data.flexBasis || 0,
      backgroundColor: data.backgroundColor,
    };
    // TODO data.width == "" ? data.width == 0 ? 的時候判斷
    const inputStyle = {
      width: data.width ?? "140px",
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
