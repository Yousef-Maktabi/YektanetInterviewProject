<template>
  <div class="card-list">
    <TodoListItem v-for="todo in todoList" :key="todo.id" :todo="todo" />
  </div>
</template>
<script>
import TodoListItem from "./TodoListItem.vue";
export default {
  components: {
    TodoListItem,
  },
  computed: {
    todoList() {
      return this.$store.getters["sortedTodoList"];
    },
  },
};
</script>

<style scoped>
.card-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
