import { User } from '../../models/models';

export default {
  actions: {},
  mutations: {
    updateUser(state: User, payload: User) {
      state.name = payload.name;
      state.age = payload.age;
    },
  },
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
