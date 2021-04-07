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

  created() {
    this.innerValue = this.value;
  },

  watch: {
    value(newValue) {
      this.innerValue = newValue;
    },
    innerValue(newValue) {
      this.$emit("input", newValue);
    },
  },

  render() {
    const data = this.data;
    const style = {
      flexGrow: data.flex || 0,
      flexShrink: 0,
      flexBasis: data.flexBasis || 0,
      backgroundColor: data.backgroundColor,
    };
    // TODO data.width == "" ? data.width == 0 ? 的時候判斷
    const inputStyle = {
      width: data.width ?? "auto",
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
