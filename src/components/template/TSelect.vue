<script>
import { VSelect, VFlex } from "vuetify/lib";
import disabledConditionsMixin from "./disabledConditionsMixin.js";

export default {
  name: "TSelect",

  components: {
    VSelect,
    VFlex,
  },

  mixins: [disabledConditionsMixin],

  props: {
    data: {
      type: Object,
      default: () => {},
    },
    value: {
      type: undefined,
    },
    disabled: {
      type: [Boolean, undefined],
      default: undefined,
    },
  },

  computed: {
    textareaDisabled() {
      // 表單被 disabled 的條件 (this.disabled) 優先，
      // 其次是元素的 disabled (this.data.dislabed)
      // 最後才是條件式 disabled
      return this.disabled ?? this.data.disabled !== "conditions"
        ? this.data.disabled
        : this.disabledConditions;
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
      disabled: this.textareaDisabled,
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
