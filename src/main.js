import { createApp } from "vue";
import { store } from "./store";

import App from "./App.vue";
import ToDoList from "./components/ToDoList.vue";
import NewTodo from "./components/NewTodo.vue";

const app = createApp(App);

app.component("to-do-list", ToDoList);
app.component("add-todo", NewTodo);

app.use(store);
app.mount("#app");
