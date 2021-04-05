<template>
  <v-layout column fill-height>
    <v-flex class="pa-6" style="flex: 1 0 0; overflow: auto" v-if="element">
      <p class="text-h4">{{ element }}</p>
      <template>
        <span>innerText:</span>
        <v-text-field v-for="i in 10" :key="i"></v-text-field>
        <v-text-field dense outlined></v-text-field>
      </template>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "ElementSettingPanel",

  props: {
    element: {
      type: String,
      default: "",
    },
  },

  data() {
    return {};
  },
};
</script>
