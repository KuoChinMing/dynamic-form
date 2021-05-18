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

  computed: {
    textareaDisabled() {
      // 表單被 disabled 的條件 (this.disabled) 優先，
      // 其次是元素的 disabled (this.data.dislabed)
      // 最後才是條件式 enabled (且 enabled 不是 undefeind 或 null)，
      return this.disabled ?? this.data.disabled ?? !this.enabled;
    },
  },

  data() {
    return {
      style: {},
      textareaAttrs: {},
      innerValue: "",
      enabled: null,
    };
  },

  watch: {
    textareaDisabled(textareaDisabled) {
      this.textareaAttrs.disabled = textareaDisabled;
    },
    bindingData: {
      handler(bindingData) {
        const enabledConditions = this.data["enabledConditions"];

        this.updateEnabledConditions(enabledConditions, bindingData);
      },
      immediate: true,
      deep: true,
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
          disabled: this.textareaDisabled,
        };
        this.updateEnabledConditions(data.enabledConditions, this.bindingData);
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
    updateEnabledConditions(conditions, bindingData) {
      this.enabled = this.getEnabled(conditions, bindingData);
    },
    getEnabled(conditions, bindingData) {
      if (!conditions) return;

      let conditionsClone;

      try {
        //  prevent conditions from mutating
        conditionsClone = JSON.parse(JSON.stringify(conditions));
      } catch {
        const CONDITIONS_STR = JSON.stringify(conditions, null, 2);
        throw new Error(
          `enabled conditions can't be parse. \n ${CONDITIONS_STR}`
        );
      }

      return this.calculateEnableConditions(conditionsClone, bindingData);
    },

    // 考慮例外處理: conditions: null, undefined, {}, 過多的 operator, bindingData 找不到值
    // 使用後序 (postfix) 的運算規則
    calculateEnableConditions(conditions, bindingData) {
      if (!conditions) return;

      if ("when" in conditions && "is" in conditions) {
        return String(bindingData[conditions.when]) === String(conditions.is);
      }

      const CONDITIONS_STR = JSON.stringify(conditions, null, 2);

      if ("operators" in conditions && "operands" in conditions) {
        // 計算左值
        const leftOperand = conditions.operands.shift();
        let leftVal = this.calculateEnableConditions(leftOperand, bindingData);
        if (leftVal == undefined) {
          throw new Error(`operand is missing. \n ${CONDITIONS_STR}`);
        }

        while (conditions.operators.length) {
          // 檢查運算元是否為 not，是的話則反向左值, 直到不是 not 為止
          const operator = conditions.operators.shift();
          if (operator === "not") {
            leftVal = !leftVal;
            continue;
          }

          // 計算右值
          const rightOperand = conditions.operands.shift();
          let rightVal = this.calculateEnableConditions(
            rightOperand,
            bindingData
          );
          if (rightVal == undefined) {
            throw new Error(`operand is missing. \n ${CONDITIONS_STR}`);
          }

          // 檢查下個運算元是否為 not，的話則反向右值，直到不是 not 為止
          let nextOperator = conditions.operators.shift();
          while (nextOperator === "not") {
            rightVal = !rightVal;
            nextOperator = conditions.operators.shift();
          }
          if (nextOperator) {
            conditions.operators.unshift(nextOperator);
          }

          switch (operator) {
            case "and":
              leftVal = leftVal && rightVal;
              break;
            case "or":
              leftVal = leftVal || rightVal;
              break;
            default:
              throw new Error(`operator ${operator} is invalid.`);
          }
        }

        return leftVal;
      }

      throw new Error(`conditions is invalid. \n ${CONDITIONS_STR}`);
    },
  },
};
</script>
