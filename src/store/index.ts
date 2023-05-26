import Vuex from 'vuex';
import user from './modules/user';
import kids from './modules/kids';

export default new Vuex.Store({
  modules: { user, kids },
});
