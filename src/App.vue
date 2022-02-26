<template>
  <div>
    <AddFrom @addTodo="addTodo" />
    <TodoList />
  </div>
  <!-- <todo-list /> -->
</template>

<script>
import AddFrom from "./components/AddFrom.vue";
import TodoList from "./components/TodoList.vue";
export default {
  name: "App",
  components: { AddFrom, TodoList },
  methods: {
    addTodo(newTodoItem) {
      this.$store.dispatch("addNewTodo", newTodoItem);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
