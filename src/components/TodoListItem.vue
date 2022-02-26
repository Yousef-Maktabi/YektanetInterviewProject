<template>
  <div class="card" :class="todo.status ? 'complted-status-card' : ''">
    <h3 :class="todo.status ? 'complted-status-text' : ''">{{ todo.title }}</h3>
    <h4>{{ priorityTitle }}</h4>
    <h4 :style="{ color: todo.color }">{{ todo.color }}</h4>

    <input id="doneCheckBox" type="checkbox" v-model="completed" />
    <label for="doneCheckBox">Done</label>
    <input id="pinCheckBox" type="checkbox" v-model="pinned" />
    <label for="pinCheckBox">Pin</label>
  </div>
</template>
<script>
import { findPriorityTextBaseOnValue } from "../utils";
export default {
  props: {
    todo: {
      type: Object,
      require: true,
    },
  },

  computed: {
    priorityTitle() {
      return findPriorityTextBaseOnValue(this.todo.priority);
    },

    completed: {
      get() {
        return this.todo.completed;
      },
      set(newValue) {
        console.log(newValue);
        this.$store.dispatch("updateTodo", {
          id: this.todo.id,
          field: "status",
        });
      },
    },

    pinned: {
      get() {
        return this.todo.pinned;
      },
      set(newValue) {
        console.log(newValue);
        this.$store.dispatch("updateTodo", {
          id: this.todo.id,
          field: "pinned",
        });
      },
    },
  },
};
</script>
<style scoped>
.card {
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 220px;
  margin: 16px 0;
}

.complted-status-card {
  opacity: 0.4;
}

.complted-status-text {
  text-decoration: line-through;
}
</style>
