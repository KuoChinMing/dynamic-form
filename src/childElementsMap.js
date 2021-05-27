import allElements from "@/formElements.js";

const childElement = ["trow", "tcol", "radio", "chip"];
const rootElement = allElements.filter((el) => !childElement.includes(el));

export default {
  box: rootElement,
  table: ["trow"],
  trow: ["tcol"],
  tcol: rootElement,
  separator: [],
  icon: [],
  text: [],
  textField: [],
  textarea: [],
  select: [],
  multiSelect: [],
  checkbox: [],
  radioGroup: ["radio"],
  chipGroup: ["chip"],
  chip: [],
  datePicker: [],
  timeIntervalSelect: [],
  combobox: [],
  imageUploader: [],
};
