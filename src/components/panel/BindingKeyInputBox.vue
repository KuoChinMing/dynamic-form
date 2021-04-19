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
      // 沒有設置 bindingKey (bindingKey = "") 時，
      // 檢查是否有 oldKey，有的話刪除 oldKey 的 bindingData
      if (!newKey) {
        if (oldKey) {
          this.$delete(this.bindingData, oldKey);
        }
      }

      // 設置的 newKey 已經重複時，
      // step1: 保留重複的 key 所設置的 bindingData (defaultValueOfDuplicatedKey)，
      //  與此次設定時擁有的 bindingData (defaultValue)，
      // step2: 並將此次設定的 key 還原成舊有的 key，
      // step3: 再將它們的 binindData 還原成 step1. 所保留的 bindingData
      else if (newKey in this.bindingData) {
        const duplicatedKey = newKey;
        const defaultValueOfDuplicatedKey = this.bindingData[duplicatedKey];

        await this.$nextTick();
        if (oldKey) {
          const defaultValue = this.bindingData[oldKey];
          this.$delete(this.bindingData, oldKey);
          this.changeBindingKey(oldKey);
          await this.$nextTick();
          this.$set(this.bindingData, oldKey, defaultValue);
        } else {
          this.changeBindingKey("");
        }

        await this.$nextTick();
        this.$set(this.bindingData, duplicatedKey, defaultValueOfDuplicatedKey);

        alert(`duplicated key: ${newKey}.`);
      }

      // newKey 合法，但無 oldKey 或已經設有 bindingKey 但是 bindingData 裡找不到這個 key 時，
      // 將 bindingData 初始設為 null
      else if (!oldKey || !(oldKey in this.bindingData)) {
        this.$set(this.bindingData, newKey, null);
      }

      // newkey 合法，且有 oldKey 時，
      // assign 成新的 key，並將舊有的 key 刪除
      else {
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
