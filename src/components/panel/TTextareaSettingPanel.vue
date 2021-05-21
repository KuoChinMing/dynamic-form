<template>
  <v-container>
    <element-setting-input-box
      :value="element['type']"
      type="textField"
      label="type"
      disabled
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      :value="element['id']"
      type="textField"
      label="id"
      disabled
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <binding-key-input-box
      :key="element.id"
      :element="element"
      :binding-data="bindingData"
    ></binding-key-input-box>

    <v-row align="center">
      <v-col cols="3" class="text-right">
        <label>defaultValue</label>
      </v-col>
      <v-col cols="9">
        <v-textarea
          v-model="bindingData[element['bindingKey']]"
          :disabled="!element['bindingKey']"
          :class="{ white: element['bindingKey'] }"
          rows="2"
          hide-details
          dense
          outlined
        >
        </v-textarea>
      </v-col>
    </v-row>

    <element-setting-input-box
      v-model="element['label']"
      input-class="white"
      label="label"
      type="textField"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['rows']"
      input-class="white"
      label="rows"
      type="textField"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['autoGrow']"
      input-class="white"
      label="autoGrow"
      type="select"
      :items="[
        { text: 'true', value: true },
        { text: 'false', value: false },
      ]"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['noResize']"
      input-class="white"
      label="noResize"
      type="select"
      :items="[
        { text: 'true', value: true },
        { text: 'false', value: false },
      ]"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['style']"
      type="select"
      input-class="white"
      label="style"
      :items="[
        { text: 'standard', value: 'standard' },
        {
          text: 'filled',
          value: 'filled',
        },
        {
          text: 'outlined',
          value: 'outlined',
        },
        {
          text: 'solo',
          value: 'solo',
        },
      ]"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['dense']"
      input-class="white"
      label="dense"
      type="select"
      :items="[
        { text: 'true', value: true },
        { text: 'false', value: false },
      ]"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['hint']"
      input-class="white"
      label="hint"
      type="textField"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['hideHint']"
      input-class="white"
      label="hideHint"
      type="select"
      :items="[
        { text: 'true', value: true },
        { text: 'false', value: false },
      ]"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['disabled']"
      input-class="white"
      label="disabled"
      type="select"
      :items="[
        { text: 'true', value: true },
        { text: 'false', value: false },
        { text: 'conditions', value: 'conditions' },
      ]"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <v-row v-if="element['disabled'] === 'conditions'">
      <v-col offset="3" cols="9">
        <disabled-conditions-setting
          :conditions="element['disabledConditions']"
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
  </v-container>
</template>

<script>
import ElementSettingInputBox from "@/components/panel/ElementSettingInputBox.vue";
import BindingKeyInputBox from "@/components/panel/BindingKeyInputBox.vue";
import DisabledConditionsSetting from "@/components/panel/DisabledConditionsSetting.vue";

export default {
  name: "TTextareaSettingPanel",

  components: {
    ElementSettingInputBox,
    BindingKeyInputBox,
    DisabledConditionsSetting,
  },

  props: {
    element: {
      type: [Object, null],
      default: null,
    },
    bindingData: {
      type: [Object, null],
      default: null,
    },
  },

  data() {
    return {
      groupIndex: {},
      groupStack: [],
    };
  },

  watch: {
    "element.disabled": {
      handler(val) {
        if (val === "conditions" && !this.element["disabledConditions"]) {
          const conditions = { operators: [], operands: [] };
          this.$set(this.element, "disabledConditions", conditions);
        }

        this.groupIndex = this.element["disabledConditions"];
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
      this.element["disabledConditions"] = { operators: [], operands: [] };
      this.groupIndex = this.element["disabledConditions"];
    },
  },
};
</script>
