<template>
  <v-container>
    <element-setting-input-box
      v-model="element['layout']"
      input-class="white"
      type="select"
      label="layout"
      :items="['', 'horizontal', 'vertical']"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['flex']"
      input-class="white"
      label="flex"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['flexBasis']"
      input-class="white"
      type="textField"
      label="flexBasis"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['wrap']"
      input-class="white"
      type="select"
      label="wrap"
      :items="[
        { text: '', value: '' },
        { text: 'wrap', value: 'wrap' },
        { text: 'nowrap', value: 'nowrap' },
      ]"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['justifyContent']"
      input-class="white"
      type="select"
      label="justifyContent"
      :items="[
        { text: '', value: '' },
        { text: 'start', value: 'flex-start' },
        { text: 'end', value: 'flex-end' },
        { text: 'center', value: 'center' },
        { text: 'space between', value: 'space-between' },
        { text: 'space around', value: 'space-around' },
      ]"
      hide-details
      dense
      outlined
    ></element-setting-input-box>
  </v-container>
</template>

<script>
import ElementSettingInputBox from "@/components/panel/ElementSettingInputBox.vue";

export default {
  name: "TBoxSettingPanel",

  components: {
    ElementSettingInputBox,
  },

  props: {
    element: Object,
    default: () => {},
  },
};
</script>
