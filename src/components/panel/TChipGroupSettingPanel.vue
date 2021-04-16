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

    <v-row align="center">
      <v-col cols="3" class="text-right">
        <label>defaultValue</label>
      </v-col>
      <v-col cols="9">
        <v-autocomplete
          v-model="bindingData[element['bindingKey']]"
          :disabled="!element['bindingKey']"
          :class="{ white: element['bindingKey'] }"
          :items="element['contents']"
          :multiple="element['multiple']"
          item-text="value"
          item-value="value"
          hide-details
          dense
          outlined
        ></v-autocomplete>
      </v-col>
    </v-row>

    <element-setting-input-box
      v-model="element['multiple']"
      input-class="white"
      label="multiple"
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
      v-model="element['color']"
      input-class="white"
      label="color"
      hide-details
      dense
      outlined
    ></element-setting-input-box>
  </v-container>
</template>

<script>
import ElementSettingInputBox from "@/components/panel/ElementSettingInputBox.vue";
import BindingKeyInputBox from "@/components/panel/BindingKeyInputBox.vue";

export default {
  name: "TChipGroupSettingPanel",

  components: {
    ElementSettingInputBox,
    BindingKeyInputBox,
  },

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

  watch: {
    "element.multiple"() {
      this.bindingData[this.element["bindingKey"]] = null;
    },
  },
};
</script>
