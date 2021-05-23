<template>
  <v-container>
    <element-setting-input-box
      :value="element['type']"
      type="textField"
      label="type"
      hide-details
      dense
      outlined
      disabled
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

    <element-setting-input-box
      v-model="bindingData[element['bindingKey']]"
      :disabled="!element['bindingKey']"
      :input-class="{ white: element['bindingKey'] }"
      type="select"
      :items="element['contents']"
      item-text="label"
      item-value="label"
      label="defaultValue"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

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
      v-model="element['direction']"
      input-class="white"
      label="direction"
      type="select"
      :items="['row', 'column']"
      hide-details
      dense
      outlined
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

    <!-- padding -->
    <v-row class="align-center">
      <span class="text-h5 font-weight-bold">Padding</span>
    </v-row>
    <element-setting-input-box
      v-model="element['paddingTop']"
      input-class="white"
      type="textField"
      label="paddingTop"
      hide-details
      dense
      outlined
    ></element-setting-input-box>
    <element-setting-input-box
      v-model="element['paddingRight']"
      input-class="white"
      type="textField"
      label="paddingRight"
      hide-details
      dense
      outlined
    ></element-setting-input-box>
    <element-setting-input-box
      v-model="element['paddingBottom']"
      input-class="white"
      type="textField"
      label="paddingBottom"
      hide-details
      dense
      outlined
    ></element-setting-input-box>
    <element-setting-input-box
      v-model="element['paddingLeft']"
      input-class="white"
      type="textField"
      label="paddingLeft"
      hide-details
      dense
      outlined
    ></element-setting-input-box>
  </v-container>
</template>

<script>
import ElementSettingInputBox from "@/components/panel/ElementSettingInputBox.vue";
import BindingKeyInputBox from "@/components/panel/BindingKeyInputBox.vue";
import disabledConditionsMixin from "./disabledConditionsMixin.js";

export default {
  name: "TRadioGroupSettingPanel",

  components: {
    ElementSettingInputBox,
    BindingKeyInputBox,
  },

  mixins: [disabledConditionsMixin],

  props: {
    element: {
      type: Object,
      default: () => {},
    },
    bindingData: {
      type: [Object, null],
      default: null,
    },
  },
};
</script>
