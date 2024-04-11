<template>
  <section>
    <to-do :to-do="todoList">
      <template v-slot:todo="{ todoItem }">
        <li class="bg-yl" v-if="!todoItem.checked">
          <h4>{{ todoItem.name }}</h4>
        </li>
      </template>
    </to-do>
    <header>
      <button @click="setSelectedComponent('to-do')">Completed tasks</button> &nbsp;
      <button @click="setSelectedComponent('to-do-list')">Todo tasks</button>
      <add-todo></add-todo>
      <div class="list">
        <ul>
          <component :is="selectedComponent" :to-do="todoList" @checkDoneTodo="checkDone">
            <template v-slot:todo="{ todoItem }">
              <li class="bg-green" v-if="todoItem.checked">
                <h1>{{ todoItem.name }}</h1>
              </li>
            </template>
          </component>
        </ul>
      </div>
    </header>
    <to-do :to-do="todoList">
      <template v-slot:todo="{ todoItem }">
        <li class="bg-green" v-if="todoItem.checked">
          <h1>{{ todoItem.name }}</h1>
        </li>
      </template>
    </to-do>
  </section>
</template>

<script>
//import { mapActions, mapState, mapMutations, mapGetters } from 'vuex'

import { mapState, mapGetters, mapMutations } from "vuex";
import ToDo from "./components/ToDo.vue";

export default {
  components: {
    ToDo
  },
  computed: {
    ...mapState("Todo", ["todoList"]),
    ...mapGetters("Todo", ["getAllTodoList"])
  },

  data() {
    return {
      selectedComponent: "to-do-list"
      // items: this.$store.state.todoList
    };
  },

  methods: {
    ...mapMutations("Todo", ["checkDone"]),

    setSelectedComponent(component) {
      this.selectedComponent = component;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #fff;
  color: white;
  text-align: center;
  width: 70%;
  max-width: 45rem;
}

#app .head {
  background: #58004d;
  padding: 100px;
}

#app .add-new {
  font-size: 20px;
  color: #6e7fe0;
  background: #fff;
  padding: 0 0 20px 0;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h4 {
  /* text-align: left;
  margin-left: 125px; */
}

#app .add-new p {
  text-align: left;
  margin-left: 125px;
}

#app .add-new .form-control {
  font-size: 20px;
  border: 1px #6e7fe0 solid;
}

#app .add-new .btn {
  margin-left: 10px;
  border-radius: 5px;
  padding: 6px 20px;
  font-size: 15px;
}

#app .list {
  margin-top: -50px;
  font-size: 20px;
  color: #6e7fe0;
  background: #fff;
  padding: 0 0 20px 0;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

#app .list p {
  text-align: left;
  margin-left: 125px;
  width: 60%;
  position: absolute;
}

#app .list .form-control {
  font-size: 20px;
  border: 1px #6e7fe0 solid;
}

#app .list .btn {
  /* margin-left: 10px; */
  border-radius: 5px;
  padding: 6px 20px;
  font-size: 15px;
}

#app .list .edit {
  padding-bottom: 20px;
  border-bottom: 3px solid #f1f1f1;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app .list p {
  text-align: left;
  margin-left: 125px;
  width: 60%;
  position: absolute;
  margin-top: -29px;
}

#app input {
  font: inherit;
  padding: 0.15rem;
}

#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

#app form div {
  margin: 1rem 0;
}

section {
  display: flex;
  justify-content: space-around;
}

.bg-yl {
  background-color: rgb(90, 99, 122);
}

.bg-green {
  background-color: rgb(151, 223, 45);
}

h1 {
  font-size: 2em;
}
</style>
