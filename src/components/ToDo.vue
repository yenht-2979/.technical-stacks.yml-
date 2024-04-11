<template>
  <section>
    <ul>
      <div v-for="item in toDo" :key="item.id">
        <!-- <li class="bg-green" v-if="item.checked">
          <h1>{{item.name}}</h1>
        </li>-->
        <slot name="todo" :todoItem="item"></slot>
      </div>
    </ul>
  </section>
</template>
<script>
export default {
  props: ["toDo"]
};
</script>
<style scoped>
section {
  width: 200px;
  margin: 30px;
}

section > ul {
  width: 200px;
}

li {
  color: brown;
}
</style>
