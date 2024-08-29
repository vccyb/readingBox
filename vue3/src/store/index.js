// vuex store
import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    user: {
      name: "John Doe",
      email: "john.doe@example.com",
    },
  },
  mutations: {
    increment(state, payload) {
      state.count = state.count + payload.count;
    },
  },
});
