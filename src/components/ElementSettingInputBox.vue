<template>
  <v-row align="center">
    <v-col cols="3" class="text-right">
      <label>{{ label }}</label>
    </v-col>
    <v-col cols="9">
      <v-text-field
        :v-bind="$attrs"
        v-on="$listeners"
        :class="inputClass"
        :disabled="$attrs.disabled"
        dense
        outlined
        hide-details
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ElementSettingInputBox",

  inheritAttrs: false,

  props: {
    label: {
      type: String,
      default: "",
    },
    inputClass: {
      type: [Object, Array, String],
      default: "",
    },
  },
};
</script>
