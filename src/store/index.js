/**
 * Vuex store config
 */
import Vue from 'vue';
import Vuex from 'vuex';

import loginInfo from './loginInfo';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    loginInfo,
  },
});

export default store;

