<template>
  <v-flex :style="style">
    <v-textarea v-model="innerValue" v-bind="textareaAttrs"></v-textarea>
  </v-flex>
</template>

<script>
export default {
  name: "TTextarea",

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
    bindingData: {
      type: Object,
      deafult: () => {},
    },
  },

  data() {
    return {
      style: {},
      textareaAttrs: {},
      innerValue: "",
      disabledCon: null,
    };
  },

  watch: {
    disabled(disabled) {
      this.textareaAttrs.disabled = disabled;
    },
    bindingData: {
      handler() {
        const disabledConditions = this.data["disabledConditions"];
        if (!disabledConditions) return;

        this.disabledCon = !this.calculateDisableConditions(disabledConditions);
      },
      immediate: true,
      deep: true,
    },
    disabledCon() {
      this.textareaAttrs.disabled =
        this.disabled ?? this.disabledCon ?? this.data.disabled;
    },
    data: {
      handler(data) {
        this.style = {
          width: data.width,
          margin: data.margin,
          backgroundColor: data.backgroundColor,
        };
        this.textareaAttrs = {
          dense: data.dense,
          autoGrow: data.autoGrow,
          [data.style]: true,
          noResize: data.noResize,
          label: data.label,
          hint: data.hint,
          hideDetails: data.hideHint,
          rows: data.rows,
          disabled: this.disabled ?? this.disabledCon ?? data.disabled,
        };
      },
      immediate: true,
      deep: true,
    },
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

  methods: {
    calculateDisableConditions(conditions) {
      if (!("group" in conditions)) {
        if (
          !("when" in conditions) ||
          !(conditions["when"] in this.bindingData)
        ) {
          return null;
        }

        if (this.bindingData[conditions.when] !== conditions.is) {
          console.log(conditions);
        }
        return this.bindingData[conditions.when] === conditions.is;
      }

      if (
        !("leftOperand" in conditions.group) ||
        !("operator" in conditions.group) ||
        !("rightOperand" in conditions.group)
      ) {
        const conditionsStr = JSON.stringify(conditions, null, 2);
        throw new Error(`condition format is not valid: \n ${conditionsStr}`);
      }

      const leftVal = this.calculateDisableConditions(
        conditions.group["leftOperand"]
      );
      const rightVal = this.calculateDisableConditions(
        conditions.group["rightOperand"]
      );
      if (conditions.group["operator"] === "and") {
        return leftVal && rightVal;
      }
      if (conditions.group["operator"] === "or") {
        return leftVal || rightVal;
      }

      throw new Error(
        `operator ${conditions.group["operator"]}  is not valid.`
      );
    },
  },
};
</script>
