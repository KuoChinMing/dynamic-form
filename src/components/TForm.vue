<script>
import TText from "@/components/template/TText.vue";
import TSeparator from "@/components/template/TSeparator.vue";
import TBox from "@/components/template/TBox.vue";
import TCheckbox from "@/components/template/TCheckbox.vue";
import TTextField from "@/components/template/TTextField.vue";
import TRadioGroup from "@/components/template/TRadioGroup.vue";
import TTable from "@/components/template/TTable.vue";
import TTrow from "@/components/template/TTrow.vue";
import TTcol from "@/components/template/TTcol.vue";
import TTextarea from "@/components/template/TTextarea.vue";
import TImageUploader from "@/components/template/TImageUploader.vue";
import TIcon from "@/components/template/TIcon.vue";
import TSelect from "@/components/template/TSelect.vue";
import TDatePicker from "@/components/template/TDatePicker.vue";
import TMultiSelect from "@/components/template/TMultiSelect.vue";
import TTimeIntervalSelect from "@/components/template/TTimeIntervalSelect.vue";
import TChipGroup from "@/components/template/TChipGroup.vue";
import TChip from "@/components/template/TChip.vue";

export default {
  name: "TForm",

  props: {
    template: {
      type: Object,
      required: true,
    },
    bindingData: {
      type: Object,
      required: true,
    },
  },

  components: {
    TText,
    TTextarea,
    TSeparator,
    TBox,
    TCheckbox,
    TTextField,
    TTable,
    TTrow,
    TTcol,
    TRadioGroup,
    TImageUploader,
    TIcon,
    TSelect,
    TDatePicker,
    TMultiSelect,
    TTimeIntervalSelect,
    TChipGroup,
    TChip,
  },

  methods: {
    camelToDash(camel) {
      return camel.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
    },
    componentName(elementType) {
      return "t-" + this.camelToDash(elementType);
    },
    renderElement(element) {
      const Component = this.componentName(element.type);

      if (this.bindingData && element.bindingKey in this.bindingData) {
        return (
          <Component
            data={element}
            v-model={this.bindingData[element.bindingKey]}
          >
            {element.contents?.map((el) => this.renderElement(el))}
          </Component>
        );
      }

      return (
        <Component data={element}>
          {element.contents?.map((el) => this.renderElement(el))}
        </Component>
      );
    },
  },

  render() {
    return this.renderElement(this.template);
  },
};
</script>
