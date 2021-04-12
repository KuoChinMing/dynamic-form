<script>
import TText from "@/components/template/TText.vue";
import TSeparator from "@/components/template/TSeparator.vue";
import TBox from "@/components/template/TBox.vue";
import TCheckbox from "@/components/template/TCheckbox.vue";
import TTextField from "@/components/template/TTextField.vue";
import TTest from "@/components/template/TTest.vue";
import TTable from "@/components/template/TTable.vue";
import TRow from "@/components/template/TRow.vue";
import TCol from "@/components/template/TCol.vue";
import TTextarea from "@/components/template/TTextarea.vue";
import TSelection from "@/components/template/TSelection.vue";
import TImageUploader from "@/components/template/TImageUploader.vue";

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
    TRow,
    TCol,
    TTest,
    TSelection,
    TImageUploader,
  },

  data() {
    return {
      data: null,
    };
  },

  watch: {
    bindingData: {
      handler(value) {
        this.data = value;
      },
      deep: true,
    },
    // data: {
    //   handler(value) {
    //     this.$emit("input", value);
    //   },
    //   deep: true,
    // },
  },

  created() {
    if (this.bindingData) {
      this.data = this.bindingData;
    }
  },

  methods: {
    renderElement(element) {
      switch (element?.type) {
        case "imageUploader":
          return <t-image-uploader data={element}></t-image-uploader>;

        case "box":
          return (
            <t-box data={element}>
              {element.contents?.map((element) => this.renderElement(element))}
            </t-box>
          );

        case "separator":
          return <t-separator data={element}></t-separator>;

        case "text":
          return <t-text data={element}></t-text>;

        case "textarea":
          return <t-textarea data={element}></t-textarea>;

        case "checkbox":
          if (element.bindingData in this.data) {
            return (
              <t-checkbox
                data={element}
                v-model={this.data[element.bindingData]}
              ></t-checkbox>
            );
          }
          return <t-checkbox data={element}></t-checkbox>;

        case "textField":
          if (element.bindingData in this.data) {
            return (
              <t-text-field
                data={element}
                v-model={this.data[element.bindingData]}
              ></t-text-field>
            );
          }
          return <t-text-field data={element}></t-text-field>;

        case "table":
          return (
            <t-table data={element}>
              {element.contents?.map((element) => this.renderElement(element))}
            </t-table>
          );

        case "trow":
          return (
            <t-row data={element}>
              {element.contents?.map((element) => this.renderElement(element))}
            </t-row>
          );

        case "tcol":
          return (
            <t-col data={element}>
              {element.contents?.map((element) => this.renderElement(element))}
            </t-col>
          );

        case "radioGroup":
          return <t-test data={element}></t-test>;

        case "selection":
          return <t-selection data={element}></t-selection>;

        default:
          return;
      }
    },
  },

  render() {
    return this.renderElement(this.template);
  },
};
</script>
