<script>
import TText from "@/components/template/TText.vue";
import TSeparator from "@/components/template/TSeparator.vue";
import TBox from "@/components/template/TBox.vue";
import TCheckbox from "@/components/template/TCheckbox.vue";
import TTextField from "@/components/template/TTextField.vue";
import TRadioGroup from "@/components/template/TRadioGroup.vue";
import TTable from "@/components/template/TTable.vue";
import TRow from "@/components/template/TRow.vue";
import TCol from "@/components/template/TCol.vue";
import TTextarea from "@/components/template/TTextarea.vue";
import TImageUploader from "@/components/template/TImageUploader.vue";
import TIcon from "@/components/template/TIcon.vue";
import TSelect from "@/components/template/TSelect.vue";
import TDatePicker from "@/components/template/TDatePicker.vue";
import TMultiSelect from "@/components/template/TMultiSelect.vue";

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
    TRadioGroup,
    TImageUploader,
    TIcon,
    TSelect,
    TDatePicker,
    TMultiSelect,
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
        textarea: this.renderTextarea,
        radioGroup: this.renderRadioGroup,
        imageUploader: this.renderImageUploader,
        datePicker: this.renderDatePicker,
        multiSelect: this.renderMutilSelect,
      },
    };
  },

  methods: {
    renderMutilSelect(el) {
      if (el.bindingKey in this.bindingData) {
        return (
          <t-multi-select
            data={el}
            v-model={this.bindingData[el.bindingKey]}
          ></t-multi-select>
        );
      }

      return <t-multi-select data={el}></t-multi-select>;
    },
    renderDatePicker(el) {
      if (el.bindingKey in this.bindingData) {
        return (
          <t-date-picker
            data={el}
            v-model={this.bindingData[el.bindingKey]}
          ></t-date-picker>
        );
      }

      return <t-date-picker data={el}></t-date-picker>;
    },
    renderImageUploader(el) {
      return <t-image-uploader data={el}></t-image-uploader>;
    },
    renderRadioGroup(el) {
      if (el.bindingKey in this.bindingData) {
        return (
          <t-radio-group
            data={el}
            v-model={this.bindingData[el.bindingKey]}
          ></t-radio-group>
        );
      }
      return <t-radio-group data={el}></t-radio-group>;
    },
    renderTextarea(el) {
      return <t-textarea data={el}></t-textarea>;
    },
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
