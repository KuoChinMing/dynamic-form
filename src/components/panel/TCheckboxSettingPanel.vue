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
      :value="bindingKey"
      @change="changeBindingKey"
      input-class="white"
      label="bindingKey"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <!-- bindingData[element['bindingKey']] can be null, 0, or "", disabled when it's undefined -->
    <element-setting-input-box
      v-model="bindingData[element['bindingKey']]"
      :disabled="bindingData[element['bindingKey']] === undefined"
      :items="[true, false]"
      type="select"
      input-class="white"
      label="defaultValue"
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

  data() {
    return {
      // 不使用 this.element['bindingKey] 是因為 this.element['bindingKey]  有可能是 undefined, watch 不到這個變數
      bindingKey: this.element["bindingKey"],
    };
  },

  watch: {
    async bindingKey(newKey, oldKey) {
      if (!newKey) {
        await this.$nextTick();
        const oldValue = this.bindingData[oldKey];
        this.changeBindingKey(oldKey);
        await this.$nextTick();
        this.$set(this.bindingData, oldKey, oldValue);
      } else if (!oldKey || this.bindingData[oldKey] === undefined) {
        this.$set(this.bindingData, newKey, null);
      } else {
        this.$set(this.bindingData, newKey, this.bindingData[oldKey]);
        this.$delete(this.bindingData, oldKey);
      }
    },
  },

  methods: {
    async changeBindingKey(newKey) {
      this.bindingKey = newKey;
      this.$set(this.element, "bindingKey", newKey);
    },
  },
};
</script>
