import { createStore } from "vuex";

// Modules
import Todo from "./modules/Todo";

export const store = createStore({
  modules: {
    Todo,
  },
});
