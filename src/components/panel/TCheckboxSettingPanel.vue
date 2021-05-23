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

    <!-- bindingData[element['bindingKey']] can be null, 0, or "", disabled when it's undefined -->
    <element-setting-input-box
      v-model="bindingData[element['bindingKey']]"
      :disabled="!element['bindingKey']"
      :input-class="{ white: element['bindingKey'] }"
      :items="[true, false]"
      type="select"
      label="defaultValue"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['label']"
      type="textField"
      label="label"
      input-class="white"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['grow']"
      input-class="white"
      type="select"
      label="grow"
      :items="[
        { text: 'true', value: 1 },
        { text: 'false', value: 0 },
      ]"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['shrink']"
      input-class="white"
      type="select"
      label="shrink"
      :items="[
        { text: 'true', value: 1 },
        { text: 'false', value: 0 },
      ]"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['marginTop']"
      input-class="white"
      label="marginTop"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['marginLeft']"
      input-class="white"
      label="marginLeft"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['marginBottom']"
      input-class="white"
      label="marginBottom"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['marginRight']"
      input-class="white"
      label="marginRight"
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

    <disabled-conditions-setting-box
      v-if="element['disabled'] === 'conditions'"
      :conditions="element['disabledConditions']"
      @reset-conditions="resetConditions"
    >
    </disabled-conditions-setting-box>
  </v-container>
</template>

<script>
import ElementSettingInputBox from "@/components/panel/ElementSettingInputBox.vue";
import BindingKeyInputBox from "@/components/panel/BindingKeyInputBox.vue";
import disabledConditionsMixin from "./disabledConditionsMixin.js";

export default {
  name: "TCheckBoxSettingPanel",

  components: {
    ElementSettingInputBox,
    BindingKeyInputBox,
  },

  mixins: [disabledConditionsMixin],

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
};
</script>
