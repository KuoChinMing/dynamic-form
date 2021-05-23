import DisabledConditionsSettingBox from "@/components/panel/DisabledConditionsSettingBox.vue";

export default {
  components: {
    DisabledConditionsSettingBox,
  },

  props: {
    element: {
      type: Object,
      default: () => {},
    },
  },

  watch: {
    "element.disabled": {
      handler(newVal) {
        if (
          newVal === "conditions" &&
          !("disabledConditions" in this.element)
        ) {
          this.resetConditions();
        }
      },
    },
    immediate: true,
  },

  methods: {
    resetConditions() {
      const initConditions = { operators: [], operands: [] };
      this.$set(this.element, "disabledConditions", initConditions);
    },
  },
};
