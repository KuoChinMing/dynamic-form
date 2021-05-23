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
      type="textField"
      label="defaultValue"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['label']"
      input-class="white"
      type="textField"
      label="label"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['locale']"
      type="select"
      input-class="white"
      label="locale"
      :items="[
        { text: 'Japanese', value: 'ja' },
        { text: 'Chinese', value: 'zhHant' },
        { text: 'English', value: 'en' },
      ]"
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
      v-model="element['width']"
      input-class="white"
      type="textField"
      label="width"
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
      type="select"
      input-class="white"
      label="dense"
      :items="[
        { text: 'true', value: true },
        { text: 'false', value: false },
      ]"
      dense
      outlined
      hide-details
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
  name: "TDatePickerSettingPanel",

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
      type: Object,
      default: () => {},
    },
  },
};
</script>
