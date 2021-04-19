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
      v-model="element['layout']"
      input-class="white"
      type="select"
      label="layout"
      :items="[
        { text: '', value: '' },
        { text: 'horizontal', value: 'row' },
        { text: 'vertical', value: 'column' },
      ]"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['flexGrow']"
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
      v-model="element['flexShrink']"
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
      v-model="element['flexBasis']"
      input-class="white"
      type="textField"
      label="basis"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['fillHeight']"
      input-class="white"
      type="select"
      label="fillHeight"
      :items="[
        { text: 'true', value: true },
        { text: 'false', value: false },
      ]"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['alignItems']"
      input-class="white"
      type="select"
      label="alignItems"
      :items="[
        { text: 'start', value: 'align-start' },
        { text: 'center', value: 'align-center' },
        { text: 'end', value: 'align-end' },
        { text: 'baseline', value: 'align-baseline' },
        { text: 'stretch', value: '' },
      ]"
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
        { text: 'true', value: true },
        { text: 'false', value: false },
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
        { text: 'start', value: 'justify-start' },
        { text: 'end', value: 'justify-end' },
        { text: 'center', value: 'justify-center' },
        { text: 'space between', value: 'justify-space-between' },
        { text: 'space around', value: 'justify-space-around' },
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
    element: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
