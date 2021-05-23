<template>
  <v-container>
    <element-setting-input-box
      :value="element['type']"
      type="textField"
      label="type"
      hide-details
      dense
      outlined
      disabled
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

    <binding-key-input-box
      :key="element.id"
      :element="element"
      :binding-data="bindingData"
    ></binding-key-input-box>

    <v-row align="center">
      <v-col cols="3" class="text-right">
        <label>defaultValue</label>
      </v-col>
      <v-col cols="9">
        <v-autocomplete
          v-model="bindingData[element['bindingKey']]"
          :disabled="!element['bindingKey']"
          :class="{ white: element['bindingKey'] }"
          :items="element['time']"
          :multiple="element['multiple']"
          hide-details
          dense
          outlined
        ></v-autocomplete>
      </v-col>
    </v-row>

    <element-setting-input-box
      v-model="element['multiple']"
      type="select"
      input-class="white"
      label="multiple"
      :items="[
        { text: 'true', value: true },
        { text: 'false', value: false },
      ]"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['grow']"
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
      v-model="element['shrink']"
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
      v-model="element['marginTop']"
      input-class="white"
      label="marginTop"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['marginLeft']"
      input-class="white"
      label="marginLeft"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['marginBottom']"
      input-class="white"
      label="marginBottom"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['marginRight']"
      input-class="white"
      label="marginRight"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['width']"
      type="textField"
      input-class="white"
      label="width"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['style']"
      type="select"
      input-class="white"
      label="style"
      :items="[
        { text: 'standard', value: 'standard' },
        {
          text: 'filled',
          value: 'filled',
        },
        {
          text: 'outlined',
          value: 'outlined',
        },
        {
          text: 'solo',
          value: 'solo',
        },
      ]"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['dense']"
      type="select"
      input-class="white"
      label="dense"
      :items="[false, true]"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['menuHeight']"
      type="textField"
      input-class="white"
      label="menuHeight"
      dense
      outlined
      hide-details
    ></element-setting-input-box>

    <element-setting-input-box
      v-model="element['disabled']"
      input-class="white"
      label="disabled"
      type="select"
      :items="[
        { text: 'true', value: true },
        { text: 'false', value: false },
        { text: 'conditions', value: 'conditions' },
      ]"
      hide-details
      dense
      outlined
    ></element-setting-input-box>

    <disabled-conditions-setting-box
      v-if="element['disabled'] === 'conditions'"
      :conditions="element['disabledConditions']"
      @reset-conditions="resetConditions"
    >
    </disabled-conditions-setting-box>

    <v-divider class="my-6"></v-divider>

    <v-row>
      <span class="text-h5 font-weight-bold">Time</span>
      <v-btn
        fab
        x-small
        class="ml-2"
        depressed
        color="primary"
        @click="addTime"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn
        fab
        x-small
        class="ml-2"
        depressed
        color="primary"
        @click="showIntervalSetting = !showIntervalSetting"
      >
        <v-icon>mdi-alarm-plus</v-icon>
      </v-btn>
      <v-col class="py-0" v-show="showIntervalSetting">
        <v-layout align-center>
          <v-flex style="flex: 1 1 auto; width: 100%">
            <v-sheet>
              <v-text-field
                v-model="timeInterval"
                dense
                class="without white"
                outlined
                hide-details
                :rules="[(e) => !isNaN(e)]"
                suffix="mins"
                @keydown.enter="addTimeInterval"
              ></v-text-field>
            </v-sheet>
          </v-flex>
          <v-flex style="flex: 0 0 auto" class="ml-2">
            <v-btn
              depressed
              color="primary"
              @click="addTimeInterval"
              :disabled="isNaN(timeInterval)"
              >確定</v-btn
            >
          </v-flex>
        </v-layout>
      </v-col>
    </v-row>

    <v-row align="center" v-for="(_, index) in time" :key="'time' + index">
      <v-col cols="3" class="text-right" style="white-space: nowrap">
        <v-btn
          depressed
          icon
          dark
          width="24px"
          height="24px"
          color="grey darken-1"
          class="mr-1"
          :ripple="false"
          @click="removeTime(index)"
        >
          <v-icon small>mdi-close</v-icon>
        </v-btn>
        <label>{{ `time${index + 1}` }}</label>
      </v-col>
      <v-col cols="9">
        <v-text-field
          v-model="time[index]"
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
import ElementSettingInputBox from "@/components/panel/ElementSettingInputBox.vue";
import BindingKeyInputBox from "@/components/panel/BindingKeyInputBox.vue";
import disabledConditionsMixin from "./disabledConditionsMixin.js";

export default {
  name: "TIimeIntervalSelectSettingPanel",

  components: {
    ElementSettingInputBox,
    BindingKeyInputBox,
  },

  mixins: [disabledConditionsMixin],

  props: {
    element: {
      type: Object,
      default: () => {},
    },
    bindingData: {
      type: [Object, null],
      default: null,
    },
  },

  data() {
    return {
      timeInterval: "",
      showIntervalSetting: false,
      time: [],
    };
  },

  watch: {
    "element.time": {
      handler(newVal) {
        this.time = newVal || [];
      },
      immediate: true,
    },
    time(newVal) {
      this.$set(this.element, "time", newVal);
    },
    "element.multiple"() {
      this.bindingData[this.element["bindingKey"]] = null;
    },
  },

  methods: {
    addTimeInterval() {
      if (this.timeInterval === 0 || isNaN(this.timeInterval)) return;

      const timeInterval = [];
      const intervalMinute = this.timeInterval;
      const today = new Date().toLocaleDateString();
      let tempDayTime = new Date(today);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      while (tempDayTime < tomorrow) {
        const tempHours = String(tempDayTime.getHours()).padStart(2, "0");
        const tempMinutes = String(tempDayTime.getMinutes()).padStart(2, "0");
        timeInterval.push(`${tempHours}:${tempMinutes}`);
        // convert minute to miliseconds
        tempDayTime = tempDayTime.getTime() + intervalMinute * 60 * 1000;
        tempDayTime = new Date(tempDayTime);
      }

      this.time = timeInterval;
      this.showIntervalSetting = false;
    },
    addTime() {
      this.time.push("");
    },
    removeTime(index) {
      this.time.splice(index, 1);
    },
  },
};
</script>
