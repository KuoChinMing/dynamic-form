<template>
  <v-layout column>
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
          <v-select
            v-model="operand.when"
            :items="Object.keys(bindingData)"
            dense
            outlined
            hide-details
            class="white"
          ></v-select>
          <span class="mx-2">is</span>
          <v-text-field
            v-model="operand.is"
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

  created() {
    // 分離 not 運算子，與其他運算子
    const operators =
      this.conditions.operators &&
      JSON.parse(JSON.stringify(this.conditions.operators));
    while (operators.length) {
      let operator = operators.shift();
      let operatorsGroup = { nots: [], others: [] };

      while (operator === "not") {
        operatorsGroup.nots.push(operator);
        operator = operators.shift();
      }

      operatorsGroup.others.push(operator);
      this.operatorsGroups.push(operatorsGroup);
    }
  },
};
</script>
