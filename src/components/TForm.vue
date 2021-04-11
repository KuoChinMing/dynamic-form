<script>
import TText from "@/components/template/TText.vue";
import TSeparator from "@/components/template/TSeparator.vue";
import TBox from "@/components/template/TBox.vue";
import TCheckbox from "@/components/template/TCheckbox.vue";
import TTextField from "@/components/template/TTextField.vue";
import TTable from "@/components/template/TTable.vue";
import TRow from "@/components/template/TRow.vue";
import TCol from "@/components/template/TCol.vue";
import TIcon from "@/components/template/TIcon.vue";
import TSelect from "@/components/template/TSelect.vue";

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
    TIcon,
    TSelect,
  },

  data() {
    return {
      elementMap: {
        box: this.renderBox,
        separator: this.renderSeparator,
        text: this.renderText,
        checkbox: this.renderCheckbox,
        textField: this.renderTextField,
        table: this.renderTable,
        trow: this.renderTrow,
        tcol: this.renderTcol,
        icon: this.renderIcon,
        select: this.renderSelect,
      },
    };
  },

  methods: {
    renderSelect(el) {
      if (el.bindingKey in this.bindingData) {
        return (
          <t-select
            data={el}
            v-model={this.bindingData[el.bindingKey]}
          ></t-select>
        );
      }
      return <t-select data={el}></t-select>;
    },
    renderIcon(el) {
      return <t-icon data={el}></t-icon>;
    },
    renderTcol(el) {
      return (
        <t-col data={el}>
          {el.contents?.map((el) => this.renderElement(el))}
        </t-col>
      );
    },
    renderTrow(el) {
      return (
        <t-row data={el}>
          {el.contents?.map((el) => this.renderElement(el))}
        </t-row>
      );
    },
    renderTable(el) {
      return (
        <t-table data={el}>
          {el.contents?.map((el) => this.renderElement(el))}
        </t-table>
      );
    },
    renderTextField(el) {
      if (el.bindingKey in this.bindingData) {
        return (
          <t-text-field
            data={el}
            v-model={this.bindingData[el.bindingKey]}
          ></t-text-field>
        );
      }
      return <t-text-field data={el}></t-text-field>;
    },
    renderCheckbox(el) {
      if (el.bindingKey in this.bindingData) {
        return (
          <t-checkbox
            data={el}
            v-model={this.bindingData[el.bindingKey]}
          ></t-checkbox>
        );
      }
      return <t-checkbox data={el}></t-checkbox>;
    },
    renderText(el) {
      return <t-text data={el}></t-text>;
    },
    renderSeparator(el) {
      return <t-separator data={el}></t-separator>;
    },
    renderBox(el) {
      return (
        <t-box data={el}>
          {el.contents?.map((el) => this.renderElement(el))}
        </t-box>
      );
    },

    renderElement(element) {
      return this.elementMap?.[element.type](element);
    },
  },

  render() {
    return this.renderElement(this.template);
  },
};
</script>
