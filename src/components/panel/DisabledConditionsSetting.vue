<template>
  <v-layout column v-if="conditions">
    <div v-for="(operand, index) in conditions.operands" :key="index">
      <template v-if="operatorsGroups[index]">
        <span
          v-for="(notOperator, index) in operatorsGroups[index].nots"
          :key="index"
        >
          <v-chip color="primary" small class="my-1" label>{{
            notOperator
          }}</v-chip>
        </span>
      </template>

      <v-layout column>
        <v-layout align-center v-if="'is' in operand">
          <span class="mr-2">when</span>
          <v-combobox
            v-model="operand.when"
            :items="Object.keys(bindingData)"
            style="width: 250px"
            dense
            outlined
            hide-details
            class="white"
          ></v-combobox>
          <span class="mx-2">is</span>
          <v-text-field
            v-model="operand.is"
            style="width: 250px"
            dense
            outlined
            hide-details
            class="white"
          ></v-text-field>
        </v-layout>
        <disabled-conditions-setting
          v-else
          :conditions="operand"
          class="pl-12"
          :group-index="groupIndex"
        ></disabled-conditions-setting>
      </v-layout>

      <v-chip
        color="primary"
        small
        class="my-1"
        label
        v-if="operatorsGroups[index] && operatorsGroups[index].others[0]"
        >{{ operatorsGroups[index].others[0] }}</v-chip
      >
    </div>

    <!-- 在做設定的時候，not 運算子數量有可能會比運算元更多 -->
    <v-layout v-if="operatorsGroups.length > conditions.operands.length">
      <span
        v-for="(notOperator, index) in operatorsGroups[
          operatorsGroups.length - 1
        ].nots"
        :key="index"
      >
        <v-chip color="primary" small class="my-1" label>{{
          notOperator
        }}</v-chip>
      </span>
    </v-layout>

    <!-- 提示箭頭 -->
    <v-icon
      v-if="groupIndex === conditions"
      class="mr-auto"
      color="primary"
      style="right: 24px"
      >mdi-arrow-right-bold</v-icon
    >
  </v-layout>
</template>

<script>
import DisabledConditionsSetting from "./DisabledConditionsSetting";

export default {
  name: "DisabledConditionsSetting",

  components: {
    DisabledConditionsSetting,
  },

  props: {
    conditions: {
      type: [Object, Array],
      default: () => {},
    },
    groupIndex: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    bindingData() {
      return this.$store.state.bindingData;
    },
  },

  data() {
    return {
      operatorsGroups: [],
    };
  },

  watch: {
    conditions: {
      handler(conditions) {
        if (!conditions) return;

        // 分離 not 運算子，與其他運算子
        this.operatorsGroups = [];
        const operators =
          conditions.operators && this.deepCopy(conditions.operators);

        while (operators.length) {
          let operator = operators.shift();
          let operatorsGroup = { nots: [], others: [] };

          while (operator === "not") {
            operatorsGroup.nots.push(operator);
            operator = operators.shift();
          }

          if (operator) {
            operatorsGroup.others.push(operator);
          }
          this.operatorsGroups.push(operatorsGroup);
        }
      },
      deep: true,
      immediate: true,
    },
  },

  methods: {
    deepCopy(obj) {
      return JSON.parse(JSON.stringify(obj));
    },
  },
};
</script>
