import Vue from "vue";
import Vuex from "vuex";
import { defaultTemplate, defaultBindingData } from "@/showcase.js";

Vue.use(Vuex);

const deepCopy = (obj) => {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch {
    console.error(`JSON 解析失敗, in file: store/index.js, JSON: ${obj}`);
    return {};
  }
};

export default new Vuex.Store({
  state: {
    template: deepCopy(defaultTemplate),
    bindingData: deepCopy(defaultBindingData),
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
