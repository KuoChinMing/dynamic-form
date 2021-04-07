<script>
import TText from "@/components/template/TText.vue";
import TSeparator from "@/components/template/TSeparator.vue";
import TBox from "@/components/template/TBox.vue";
import TCheckbox from "@/components/template/TCheckbox.vue";
import TTextField from "@/components/template/TTextField.vue";
import TTable from "@/components/template/TTable.vue";
import TRow from "@/components/template/TRow.vue";
import TCol from "@/components/template/TCol.vue";

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
    TSeparator,
    TBox,
    TCheckbox,
    TTextField,
    TTable,
    TRow,
    TCol,
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
