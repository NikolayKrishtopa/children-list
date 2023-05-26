import { Kid } from '../../models/models';

export default {
  actions: {},
  mutations: {},
  state: {
    kids: [
      { id: 1, name: 'Мария', age: 10 },
      { id: 2, name: 'Павел', age: 6 },
      { id: 3, name: 'Семён', age: 4 },
      { id: 4, name: 'Саша', age: 4 },
      { id: 5, name: 'Аня', age: 4 },
    ],
  },
  getters: {
    kidsList(state: { kids: Array<Kid> }) {
      return state.kids;
    },
  },
};
