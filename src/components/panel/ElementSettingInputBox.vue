<template>
  <v-row align="center">
    <v-col cols="3" class="text-right">
      <label>{{ label }}</label>
    </v-col>
    <v-col cols="9">
      <component
        :is="input"
        :value="value"
        :class="inputClass"
        v-bind="attrs"
        v-on="$listeners"
      ></component>
    </v-col>
  </v-row>
</template>

<script>
import { VTextField, VSelect } from "vuetify/lib";

export default {
  name: "ElementSettingInputBox",

  components: {
    VTextField,
    VSelect,
  },

  props: {
    label: {
      type: String,
      default: "",
    },
    inputClass: {
      type: [Object, Array, String],
      default: "",
    },
    value: {},
    type: {
      type: String,
      default: "textField",
    },
    items: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    attrs() {
      const attrs = {
        textField: this.$attrs,
        select: { ...this.$attrs, items: this.items },
      };

      return attrs[this.type] ?? attrs["textField"];
    },
    input() {
      const type = {
        textField: "v-text-field",
        select: "v-select",
      };

      return type[this.type] ?? type["textField"];
    },
  },
};
</script>
