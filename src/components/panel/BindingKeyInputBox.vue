<template>
  <element-setting-input-box
    :value="bindingKey"
    @change="changeBindingKey"
    input-class="white"
    label="bindingKey"
    hide-details
    dense
    outlined
  ></element-setting-input-box>
</template>

<script>
import ElementSettingInputBox from "@/components/panel/ElementSettingInputBox.vue";

export default {
  name: "BindingKeyInput",

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
      // 多宣告一個 bindingKey 而不使用 this.element['bindingKey] 是因為 this.element['bindingKey]  有可能是 undefined, watch 不到這個變數
      bindingKey: this.element["bindingKey"],
    };
  },

  watch: {
    async bindingKey(newKey, oldKey) {
      // 沒有設置 bindingKey (bindingKey = "") 時，reset 成上一次的 key，並所設置的保留 defaultValue
      if (!newKey) {
        const defaultValue = this.bindingData[oldKey];
        await this.$nextTick();
        this.changeBindingKey(oldKey);
        await this.$nextTick();
        this.$set(this.bindingData, oldKey, defaultValue);
        alert("please setting the binding key.");
      } else if (newKey in this.bindingData) {
        // TODO handling duplicated key
        alert(`duplicated key: ${newKey}.`);
      }
      // 第一次設置 key 時沒有 oldKey, bindingData 設為 null，或是已經設有 bindingKey 但是 bindingData 裡找不到這個 key
      else if (!oldKey || !(oldKey in this.bindingData)) {
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
