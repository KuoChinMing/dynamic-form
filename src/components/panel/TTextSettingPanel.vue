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
      v-model="element['text']"
      type="textField"
      input-class="white"
      label="text"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['flex']"
      type="textField"
      input-class="white"
      label="flex"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <v-row align="center">
      <v-col cols="3" class="text-right">
        <label>flexBasis</label>
      </v-col>
      <v-col cols="9">
        <v-select
          v-model="element['flexBasis']"
          :items="[
            { text: '', value: '' },
            { text: '0', value: 0 },
            { text: 'auto', value: 'auto' },
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
        <label>width</label>
      </v-col>
      <v-col cols="9">
        <v-text-field
          v-model="element['width']"
          class="white"
          dense
          outlined
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row align="center">
      <v-col cols="3" class="text-right">
        <label>margin</label>
      </v-col>
      <v-col cols="9">
        <v-text-field
          v-model="element['margin']"
          class="white"
          dense
          outlined
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row align="center">
      <v-col cols="3" class="text-right">
        <label>size</label>
      </v-col>
      <v-col cols="9">
        <v-text-field
          v-model="element['fontSize']"
          class="white"
          dense
          outlined
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row align="center">
      <v-col cols="3" class="text-right">
        <label>color</label>
      </v-col>
      <v-col cols="9">
        <v-text-field
          v-model="element['color']"
          class="white"
          dense
          outlined
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row align="center">
      <v-col cols="3" class="text-right">
        <label>weight</label>
      </v-col>
      <v-col cols="9">
        <v-select
          v-model="element['fontWeight']"
          :items="[
            { text: '', value: '' },
            { text: 'bold', value: 'bold' },
            { text: 'regular', value: 'normal' },
            { text: 'lighter', value: 'lighter' },
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
        <label>style</label>
      </v-col>
      <v-col cols="9">
        <v-select
          v-model="element['fontStyle']"
          :items="[
            { text: '', value: '' },
            { text: 'normal', value: 'normal' },
            { text: 'italic', value: 'italic' },
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
        <label>decoration</label>
      </v-col>
      <v-col cols="9">
        <v-select
          v-model="element['textDecoration']"
          :items="[
            { text: '', value: '' },
            { text: 'none', value: 'none' },
            { text: 'line-through', value: 'line-through' },
            { text: 'underline', value: 'underline' },
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
        <label>position</label>
      </v-col>
      <v-col cols="9">
        <v-select
          v-model="element['position']"
          :items="[
            { text: '', value: '' },
            { text: 'relative', value: 'relative' },
            { text: 'absolute', value: 'absolute' },
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
        <label>align</label>
      </v-col>
      <v-col cols="9">
        <v-select
          v-model="element['textAlign']"
          :items="[
            { text: '', value: '' },
            { text: 'center', value: 'center' },
            { text: 'left', value: 'left' },
            { text: 'right', value: 'right' },
            { text: 'justify', value: 'justify' },
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
          v-model="element['whiteSpace']"
          :items="[
            { text: '', value: '' },
            { text: 'true', value: 'normal' },
            { text: 'false', value: 'nowrap' },
          ]"
          class="white"
          dense
          outlined
          hide-details
        ></v-select>
      </v-col>
    </v-row>

    <v-divider class="my-6"></v-divider>

    <p class="text-h5 font-weight-bold">Offset</p>

    <v-row align="center">
      <v-col cols="3" class="text-right">
        <label>offsetTop</label>
      </v-col>
      <v-col cols="9">
        <v-text-field
          v-model="element['top']"
          class="white"
          dense
          outlined
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row align="center">
      <v-col cols="3" class="text-right">
        <label>offsetBottom</label>
      </v-col>
      <v-col cols="9">
        <v-text-field
          v-model="element['bottom']"
          class="white"
          dense
          outlined
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row align="center">
      <v-col cols="3" class="text-right">
        <label>offsetStart</label>
      </v-col>
      <v-col cols="9">
        <v-text-field
          v-model="element['left']"
          class="white"
          dense
          outlined
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row align="center">
      <v-col cols="3" class="text-right">
        <label>offsetEnd</label>
      </v-col>
      <v-col cols="9">
        <v-text-field
          v-model="element['right']"
          class="white"
          dense
          outlined
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ElementSettingInputBox from "@/components/ElementSettingInputBox.vue";

export default {
  name: "TTextSettingPanel",

  components: {
    ElementSettingInputBox,
  },

  props: {
    element: Object,
    default: () => {},
  },
};
</script>
