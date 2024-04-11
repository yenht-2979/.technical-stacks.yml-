<template>
  <form @submit.prevent="addTodo" class="add-new">
    <h4>Add:</h4>
    <div>
      <input type="text" v-model="todoSeleted.name" />
    </div>
    <div>
      <button>Add Todo</button>
    </div>
  </form>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations("Todo", ["addTodo"])
  },

  computed: {
    ...mapState("Todo", ["todoSeleted"])
  }
};
</script>
