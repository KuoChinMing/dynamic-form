import Vue from "vue";
import Vuex from "vuex";
import { defaultTemplate, defaultBindingData } from "@/showcase.js";

Vue.use(Vuex);

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
