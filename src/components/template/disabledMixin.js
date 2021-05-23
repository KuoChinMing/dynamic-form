export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    bindingData: {
      type: Object,
      deafult: () => {},
    },
    formDisabled: {
      type: [Boolean, undefined],
      default: undefined,
    },
  },

  computed: {
    disabled() {
      // 表單被 disabled 的條件 (this.disabled) 優先，
      // 其次是元素的 disabled (this.data.dislabed)
      // 最後才是條件式的 disabled
      return (
        this.formDisabled ??
        (this.data.disabled !== "conditions"
          ? this.data.disabled
          : this.disabledConditions)
      );
    },
  },

  data() {
    return {
      disabledConditions: null,
    };
  },

  watch: {
    bindingData: {
      handler(bindingData) {
        const disabledConditions = this.data["disabledConditions"];
        this.updateDisabledConditions(disabledConditions, bindingData);
      },
      immediate: true,
      deep: true,
    },
    "data.disabledConditions": {
      handler(newVal) {
        this.updateDisabledConditions(newVal, this.bindingData);
      },
      deep: true,
    },
  },

  methods: {
    updateDisabledConditions(conditions, bindingData) {
      this.disabledConditions = this.getDisabled(conditions, bindingData);
    },
    getDisabled(conditions, bindingData) {
      if (!conditions) return;

      let conditionsClone;

      try {
        //  prevent conditions from mutating
        conditionsClone = JSON.parse(JSON.stringify(conditions));
      } catch {
        const CONDITIONS_STR = JSON.stringify(conditions, null, 2);
        throw new Error(
          `disabled conditions can't be parse. \n ${CONDITIONS_STR}`
        );
      }

      return this.calculateDisabledConditions(conditionsClone, bindingData);
    },
    // 考慮例外處理: conditions: null, undefined, {}, 過多的 operator, bindingData 找不到值
    // 使用後序 (postfix) 的運算規則
    calculateDisabledConditions(conditions, bindingData) {
      if (!conditions) return;

      if ("when" in conditions && "is" in conditions) {
        return String(bindingData[conditions.when]) === String(conditions.is);
      }

      if ("operators" in conditions && "operands" in conditions) {
        // 計算左值
        const leftOperand = conditions.operands.shift();
        let leftVal = this.calculateDisabledConditions(
          leftOperand,
          bindingData
        );

        while (conditions.operators.length) {
          // 檢查運算元是否為 not，是的話則反向左值, 直到不是 not 為止
          const operator = conditions.operators.shift();
          if (operator === "not") {
            leftVal = !leftVal;
            continue;
          }

          // 計算右值
          const rightOperand = conditions.operands.shift();
          let rightVal = this.calculateDisabledConditions(
            rightOperand,
            bindingData
          );

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

      const CONDITIONS_STR = JSON.stringify(conditions, null, 2);
      throw new Error(`conditions is invalid. \n ${CONDITIONS_STR}`);
    },
  },
};
