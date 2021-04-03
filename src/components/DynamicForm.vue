<script>
import TText from "@/components/template/TText.vue";
import TSeparator from "@/components/template/TSeparator.vue";
import TBox from "@/components/template/TBox.vue";
import TCheckbox from "@/components/template/TCheckbox.vue";
import TTextField from "@/components/template/TTextField.vue";

export default {
  name: "DynamicForm",

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
    data: {
      handler(value) {
        this.$emit("input", value);
      },
      deep: true,
    },
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
              {element.contents.map((element) => this.renderElement(element))}
            </t-box>
          );

        case "separator":
          return <t-separator data={element}></t-separator>;

        case "text":
          return <t-text data={element}>{element.text}</t-text>;

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
            <table>
              {element.contents.map((element) => this.renderElement(element))}
            </table>
          );

        case "thead":
          return (
            <thead>
              {element.contents.map((element) => this.renderElement(element))}
            </thead>
          );

        case "tbody":
          return (
            <tbody>
              {element.contents.map((element) => this.renderElement(element))}
            </tbody>
          );

        case "tr":
          return (
            <tr>
              {element.contents.map((element) => this.renderElement(element))}
            </tr>
          );

        case "th":
          return (
            <th colspan={element.colspan} width={element.width}>
              {"contents" in element
                ? element.contents.map((element) => this.renderElement(element))
                : element.text}
            </th>
          );

        case "td":
          return (
            <td>
              {"contents" in element
                ? element.contents.map((element) => this.renderElement(element))
                : element.text}
            </td>
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
