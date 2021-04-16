<template>
  <v-container>
    <v-row align="center">
      <v-col cols="3" class="text-right">
        <label>layout</label>
      </v-col>
      <v-col cols="9">
        <v-select
          v-model="element['layout']"
          :items="[
            { text: 'horizontal', value: 'horizontal' },
            { text: 'vertical', value: 'vertical' },
          ]"
          class="white"
          dense
          outlined
          hide-details
        ></v-select>
      </v-col>
    </v-row>

    <v-row align="center">
      <v-col cols="3" class="text-right">
        <label>wrap</label>
      </v-col>
      <v-col cols="9">
        <v-select
          v-model="element['wrap']"
          :items="[
            { text: 'wrap', value: 'wrap' },
            { text: 'nowrap', value: 'nowrap' },
          ]"
          class="white"
          dense
          outlined
          hide-details
        ></v-select>
      </v-col>
    </v-row>

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
      label="flexBasis"
      hide-details
      dense
      outlined
    ></element-setting-input-box>
  </v-container>
</template>

<script>
import ElementSettingInputBox from "@/components/panel/ElementSettingInputBox.vue";

export default {
  name: "TImageUploaderSettingPanel",

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
