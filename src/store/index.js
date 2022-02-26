import { createStore } from "vuex";

export default createStore({
  state: {
    todoList: [],
  },
  getters: {
    sortedTodoList(state) {
      return state.todoList.sort((a, b) => {
        if (b.pinned || a.status) {
          return 1;
        }

        if (a.pinned || b.status) {
          return -1;
        }

        return a.priority - b.priority;
      });
    },
  },
  mutations: {
    ADD_TODO(state, payload) {
      state.todoList.unshift(payload);
    },

    UPDATE_TODO_STATUS(state, payload) {
      const todoIndex = state.todoList.findIndex(
        (item) => item.id === payload.id
      );
      state.todoList[todoIndex][payload.field] =
        !state.todoList[todoIndex][payload.field];
    },
  },
  actions: {
    addNewTodo({ commit, state }, newTodoItem) {
      const id = state.todoList.length + 1;
      const createdDate = new Date();
      const status = false;
      const pinned = false;
      const newTodo = {
        title: newTodoItem.title,
        priority: newTodoItem.priority,
        color: newTodoItem.color,
        id,
        createdDate,
        status,
        pinned,
      };
      commit("ADD_TODO", newTodo);
    },

    updateTodo({ commit }, newTodoObject) {
      commit("UPDATE_TODO_STATUS", newTodoObject);
    },
  },
  modules: {},
});
