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
            { text: '', value: '' },
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
  </v-container>
</template>

<script>
// import ElementSettingInputBox from "@/components/ElementSettingInputBox.vue";

export default {
  name: "TBoxSettingPanel",

  components: {
    // ElementSettingInputBox,
  },

  props: {
    element: Object,
    default: () => {},
  },
};
</script>
