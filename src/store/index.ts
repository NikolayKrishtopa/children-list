import Vuex, { createStore } from 'vuex';
import Vue from 'vue';
import user from './modules/user';
import kids from './modules/kids';

export default new Vuex.Store({
  modules: { user, kids },
});
