<script>
import { VLayout, VFlex, VCheckbox } from "vuetify/lib";
import disabledMixin from "./disabledMixin.js";

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
    formDisabled: {
      type: [Boolean, undefined],
      default: undefined,
    },
  },

  mixins: [disabledMixin],

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
      flexGrow: data.grow,
      flexShrink: data.shrink,
      flexBasis: data.flexBasis,
      backgroundColor: data.backgroundColor,
      marginTop: data.marginTop,
      marginLeft: data.marginLeft,
      marginBottom: data.marginBottom,
      marginRight: data.marginRight,
    };
    const props = {
      attrs: {
        label: data.label,
        hideDetails: true,
        disabled: this.disabled,
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
