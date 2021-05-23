<template>
  <v-row>
    <v-col offset="3" cols="9">
      <disabled-conditions-setting
        :conditions="innerConditions"
        :group-index="groupIndex"
      ></disabled-conditions-setting>
    </v-col>

    <v-col cols="12">
      <v-layout justify-end>
        <v-chip-group>
          <v-chip label color="primary" small @click="addNotCondition"
            >not</v-chip
          >
          <v-chip label color="primary" small @click="addOrCondition"
            >or</v-chip
          >
          <v-chip label color="primary" small @click="addAddCondition"
            >and</v-chip
          >
          <v-chip label color="primary" small @click="addCondition"
            >condition</v-chip
          >
          <v-chip label color="primary" small @click="addGroup"
            >group-start</v-chip
          >
          <v-chip label color="primary" small @click="jumpOutGroup"
            >group-end</v-chip
          >
          <v-chip label color="error" small @click="resetConditions"
            >reset</v-chip
          >
        </v-chip-group>
      </v-layout>
    </v-col>
  </v-row>
</template>

<script>
import DisabledConditionsSetting from "@/components/panel/DisabledConditionsSetting.vue";

export default {
  name: "DisabledConditionsSettingBox",

  props: {
    conditions: {
      type: Object,
      default: () => {},
    },
  },

  components: {
    DisabledConditionsSetting,
  },

  data() {
    return {
      innerConditions: {},
      groupIndex: {},
      groupStack: [],
    };
  },

  watch: {
    conditions: {
      handler(val) {
        if (!this.innerConditions) {
          this.innerConditions = { operators: [], operands: [] };
        }

        this.innerConditions = val;
        this.groupIndex = this.innerConditions;
      },
      immediate: true,
    },
  },

  methods: {
    addNotCondition() {
      this.groupIndex.operators.push("not");
    },
    addOrCondition() {
      this.groupIndex.operators.push("or");
    },
    addAddCondition() {
      this.groupIndex.operators.push("and");
    },
    addCondition() {
      this.groupIndex.operands.push({ when: "", is: "" });
    },
    addGroup() {
      const group = { operators: [], operands: [] };
      this.groupIndex.operands.push(group);
      this.groupStack.push(this.groupIndex);
      this.groupIndex = group;
    },
    jumpOutGroup() {
      if (!this.groupStack.length) return;

      this.groupIndex = this.groupStack.pop();
    },
    resetConditions() {
      this.$emit("reset-conditions");
    },
  },
};
</script>
