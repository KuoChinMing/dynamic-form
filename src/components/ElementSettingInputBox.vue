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
        v-bind="$attrs"
        v-on="$listeners"
      ></component>
    </v-col>
  </v-row>
</template>

<script>
import { VTextField } from "vuetify/lib";

export default {
  name: "ElementSettingInputBox",

  components: {
    VTextField,
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
  },

  computed: {
    input() {
      const type = {
        textField: "v-text-field",
      };

      return type[this.type] || null;
    },
  },
};
</script>
