import Vue from "vue";
import Vuex from "vuex";
import { defaultTemplate } from "@/showcase.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    template: defaultTemplate,
  },
  mutations: {
    template(state, template) {
      state.template = template;
    },
  },
  actions: {},
  modules: {},
});
