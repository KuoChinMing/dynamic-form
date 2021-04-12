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

    <element-setting-input-box
      :value="element['bindingKey']"
      @change="changeBindingKey"
      input-class="white"
      label="bindingKey"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="bindingData[element['bindingKey']]"
      input-class="white"
      label="defaultValue"
      :disabled="!bindingData[element['bindingKey']]"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['flexBasis']"
      input-class="white"
      label="flexBasis"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['width']"
      input-class="white"
      label="width"
      hide-details
      dense
      outlined
    ></element-setting-input-box>
  </v-container>
</template>

<script>
import ElementSettingInputBox from "@/components/ElementSettingInputBox.vue";

export default {
  name: "TTextFieldSettingPanel",

  components: {
    ElementSettingInputBox,
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

  watch: {
    "element.bindingKey"(newKey, oldKey) {
      if (oldKey === undefined || this.bindingData[oldKey] === undefined) {
        this.$set(this.bindingData, newKey, null);
      } else {
        this.$set(this.bindingData, newKey, this.bindingData[oldKey]);
        this.$delete(this.bindingData, oldKey);
      }
    },
  },

  methods: {
    changeBindingKey(newKey) {
      this.element["bindingKey"] = newKey;
    },
  },
};
</script>
