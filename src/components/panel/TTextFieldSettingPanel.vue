<template>
  <v-container>
    <element-setting-input-box
      v-model="element['bindingKey']"
      @change="setBindingKey"
      input-class="white"
      label="bindingKey"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="defaultValueTest"
      input-class="white"
      label="value"
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

  data() {
    return {
      defaultValueTest: "",
    };
  },

  watch: {
    defaultValueTest(value) {
      this.$set(this.bindingData, this.element["bindingKey"], value);
      console.log(this.bindingData);
    },
  },

  methods: {
    setBindingKey(bindingKey) {
      this.$set(this.bindingData, bindingKey, this.defaultValueTest);
      console.log(this.bindingData);
    },
  },
};
</script>
