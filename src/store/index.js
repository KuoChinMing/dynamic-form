import Vue from "vue";
import Vuex from "vuex";
import {
  template as showcaseTemplate,
  bindingData as showcaseBindingData,
} from "@/showcase.js";

Vue.use(Vuex);

const deepCopy = (obj) => {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch {
    console.error(`JSON 解析失敗, in file: store/index.js, JSON: ${obj}`);
    return {};
  }
};

let defaultTemplate = localStorage.getItem("template");
defaultTemplate = defaultTemplate
  ? JSON.parse(defaultTemplate)
  : deepCopy(showcaseTemplate);

let defaultBindingData = localStorage.getItem("binding-data");
defaultBindingData = defaultBindingData
  ? JSON.parse(defaultBindingData)
  : deepCopy(showcaseBindingData);

export default new Vuex.Store({
  state: {
    template: defaultTemplate,
    bindingData: defaultBindingData,
  },
  mutations: {
    template(state, template) {
      state.template = template;
    },
    bindingData(state, bindingData) {
      state.bindingData = bindingData;
    },
  },
  actions: {},
  modules: {},
});
