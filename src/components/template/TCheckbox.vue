<script>
import { VLayout, VFlex, VCheckbox } from "vuetify/lib";

export default {
  name: "TemplateCheckBox",

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
    VFlex,
    VLayout,
    VCheckbox,
  },

  data() {
    return {
      innerValue: false,
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
      flexGrow: data.flex ?? 0,
      flexShrink: 0,
      flexBasis: data.flexBasis ?? 0,
      backgroundColor: data.backgroundColor,
    };

    return (
      <v-flex style={style}>
        <v-layout align-center>
          <v-checkbox
            v-model={this.innerValue}
            class="ma-0 pa-0"
            hide-details
          ></v-checkbox>
          {this.$slots.default}
        </v-layout>
      </v-flex>
    );
  },
};
</script>
