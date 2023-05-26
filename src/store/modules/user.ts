import { User } from '../../models/models';

export default {
  actions: {},
  mutations: {},
  state: {
    name: 'Петр',
    age: 99,
  },
  getters: {
    userData(state: User) {
      return state;
    },
  },
};
