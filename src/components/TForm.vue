<script>
import LoadingComponent from "@/components/Loading.vue";
import ErrorComponent from "@/components/Error.vue";
import camelToDash from "@/utils/camelCaseToDashCase.js";

const handleAsyncImport = (component) => ({
  component,
  loading: LoadingComponent,
  error: ErrorComponent,
});

export default {
  name: "TForm",

  components: {
    TText: () => handleAsyncImport(import("@/components/template/TText.vue")),
    TTextarea: () =>
      handleAsyncImport(import("@/components/template/TTextarea.vue")),
    TSeparator: () =>
      handleAsyncImport(import("@/components/template/TSeparator.vue")),
    TBox: () => handleAsyncImport(import("@/components/template/TBox.vue")),
    TCheckbox: () =>
      handleAsyncImport(import("@/components/template/TCheckbox.vue")),
    TTextField: () =>
      handleAsyncImport(import("@/components/template/TTextField.vue")),
    TTable: () => handleAsyncImport(import("@/components/template/TTable.vue")),
    TTrow: () => handleAsyncImport(import("@/components/template/TTrow.vue")),
    TTcol: () => handleAsyncImport(import("@/components/template/TTcol.vue")),
    TRadioGroup: () =>
      handleAsyncImport(import("@/components/template/TRadioGroup.vue")),
    TIcon: () => handleAsyncImport(import("@/components/template/TIcon.vue")),
    TSelect: () =>
      handleAsyncImport(import("@/components/template/TSelect.vue")),
    TDatePicker: () =>
      handleAsyncImport(import("@/components/template/TDatePicker.vue")),
    TMultiSelect: () =>
      handleAsyncImport(import("@/components/template/TMultiSelect.vue")),
    TTimeIntervalSelect: () =>
      handleAsyncImport(
        import("@/components/template/TTimeIntervalSelect.vue")
      ),
    TChipGroup: () =>
      handleAsyncImport(import("@/components/template/TChipGroup.vue")),
    TChip: () => handleAsyncImport(import("@/components/template/TChip.vue")),
    TImageUploader: () =>
      handleAsyncImport(import("@/components/template/TImageUploader.vue")),
  },

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

  methods: {
    componentName(elementType) {
      return "t-" + camelToDash(elementType);
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
