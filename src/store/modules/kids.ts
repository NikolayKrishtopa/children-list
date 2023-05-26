import { Kid } from '../../models/models';

type KidsState = {
  kids: Array<Kid>;
};

export default {
  actions: {},
  mutations: {
    updateKids(state: KidsState, payload: Array<Kid>) {
      state.kids = JSON.parse(JSON.stringify(payload));
    },
  },
  state: {
    kids: [
      { id: 1, name: 'Мария', age: 10 },
      { id: 2, name: 'Павел', age: 6 },
      { id: 3, name: 'Семён', age: 4 },
    ],
  },
  getters: {
    kidsList(state: KidsState) {
      return state.kids;
    },
  },
};
