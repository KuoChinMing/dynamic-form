<template>
  <v-layout column v-if="'operators' in conditions">
    <span v-for="(operator, index) in operators" :key="index"
      ><v-chip small class="my-1" label color="primary" text-color="white">{{
        operator
      }}</v-chip>
    </span>

    <v-layout column class="pl-12">
      <v-layout align-center v-if="operand">
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

      <span class="mr-2">
        <v-chip small class="my-1" label color="primary" text-color="white">{{
          nextOperator
        }}</v-chip>
      </span>

      <!-- recursion start -->
      <disabled-conditions-setting
        v-if="false"
        :conditions="conditions"
      ></disabled-conditions-setting>
      <span class="mr-2">
        <v-chip small class="my-1" label color="primary" text-color="white"
          >not</v-chip
        >
      </span>

      <v-layout column class="pl-12">
        <v-layout align-center>
          <span class="mr-2">when</span>
          <v-select dense outlined hide-details class="white"></v-select>
          <span class="mx-2">is</span>
          <v-text-field
            dense
            outlined
            hide-details
            class="white"
          ></v-text-field>
        </v-layout>

        <span>
          <v-chip color="primary" small class="my-1" label>and</v-chip>
        </span>

        <v-layout align-center>
          <span class="px-2">when</span>
          <v-select dense outlined hide-details class="white"></v-select>
          <span class="px-2">is</span>
          <v-text-field
            dense
            outlined
            hide-details
            class="white"
          ></v-text-field>
        </v-layout>

        <span>
          <v-chip color="primary" small class="my-1" label>or</v-chip>
        </span>

        <v-layout align-center>
          <span class="px-2">when</span>
          <v-select dense outlined hide-details class="white"></v-select>
          <span class="px-2">is</span>
          <v-text-field
            dense
            outlined
            hide-details
            class="white"
          ></v-text-field>
        </v-layout>
      </v-layout>
    </v-layout>
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
      operators: [],
      operands: null,
      nextOperator: null,

      // enabledConditions: {
      //   operators: ["not"],
      //   operands: [
      //     {
      //       operators: ["or", "not"],
      //       operands: [
      //         {
      //           when: "checkbox",
      //           is: true,
      //         },
      //         {
      //           operators: ["and", "or"],
      //           operands: [
      //             {
      //               when: "checkbox2",
      //               is: true,
      //             },
      //             {
      //               operators: ["or"],
      //               operands: [
      //                 {
      //                   when: "radioGroup",
      //                   is: "enable",
      //                 },
      //                 {
      //                   when: "radioGroup",
      //                   is: "enable-2",
      //                 },
      //               ],
      //             },
      //             {
      //               when: "select",
      //               is: "enable",
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
    };
  },

  created() {
    let operator = this.conditions.operators.shift();
    this.operators.push(operator);
    while (operator === "not") {
      operator = this.conditions.operators.shift();
      if (operator) {
        this.operators.push(operator);
      }
    }

    this.nextOperator = this.conditions.operators.shift();
    this.operand = this.conditions.operands.shift();
  },
};
</script>
