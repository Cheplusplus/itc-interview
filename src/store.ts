import { createStore } from "vuex";

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    reset(state) {
      state.count = 0;
    },
  },
  actions: {
    incrementCounter(context) {
      context.commit("increment");
      console.log("1 added to counter");
    },
    resetCounter(context) {
      context.commit("reset");
      console.log("Counter reset to 0");
    },
  },
});
