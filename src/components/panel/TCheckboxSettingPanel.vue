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
      v-model="element['bindingKey']"
      input-class="white"
      label="bindingKey"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="bindingData[element['bindingKey']]"
      input-class="white"
      type="select"
      label="defaultValue"
      :items="[true, false]"
      :disabled="!bindingData[element['bindingKey']]"
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
      if (oldKey && this.bindingData[oldKey]) {
        this.$delete(this.bindingData, oldKey);
        this.$set(this.bindingData, newKey, this.bindingData[oldKey]);
      } else {
        this.$set(this.bindingData, newKey, null);
      }
    },
  },
};
</script>
