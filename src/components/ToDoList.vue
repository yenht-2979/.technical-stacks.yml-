<template>
  <section>
    <ul>
      <div v-for="item in todoList" :key="item.id" class="box-todo">
        <li :class="{ active: item.checked }">
          <form v-if="item.isEdit" @submit.prevent="updateTodolist(item.id)">
            <input class="input-edit" type="text" v-model="item.name" />
            <button type="submit" class="btn btn-update">Update</button>
          </form>
          <div v-else>
            <input type="checkbox" :checked="item.checked" @click="$emit('checkDoneTodo', item.id)" />
            <b>{{ item.name }}</b>
            <button @click="editTodolist(item.id)" class="btn btn-edit">Edit</button>
            <button @click="deteleTodolist(item.id)" class="btn btn-delete">Remove</button>
          </div>
        </li>
      </div>
    </ul>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  props: {
    toDo: {
      type: Array,
      required: true
    }
  },

  data() {
    return {};
  },

  computed: {
    ...mapState("Todo", ["todoList"]),
    ...mapGetters("Todo", ["getAllTodoList"])
  },

  methods: {
    ...mapMutations("Todo", [
      "deteleTodolist",
      "editTodolist",
      "updateTodolist"
    ])
  }
};
</script>
<style scoped>
.active {
  background: #a7a3f6;
}

.input-edit {
  width: 50%;
  display: inline;
}

.box-todo {
  width: 40rem;
}

.btn-edit {
  margin-left: 180px;
  position: relative;
}
</style>
