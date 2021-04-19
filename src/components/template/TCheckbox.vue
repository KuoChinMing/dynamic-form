<script>
import { VLayout, VFlex, VCheckbox } from "vuetify/lib";

export default {
  name: "TCheckBox",

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
      flexGrow: data.flex,
      flexShrink: data.flexShrink,
      flexBasis: data.flexBasis,
      backgroundColor: data.backgroundColor,
    };
    const props = {
      attrs: {
        label: data.label,
      },
    };

    return (
      <v-flex style={style}>
        <v-layout align-center>
          <v-checkbox
            v-model={this.innerValue}
            {...props}
            class="ma-0 pa-0"
            hide-details
          ></v-checkbox>
        </v-layout>
      </v-flex>
    );
  },
};
</script>
