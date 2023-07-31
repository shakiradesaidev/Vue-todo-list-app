import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, newTodo) {
      state.todos.push(newTodo);
    },
    updateTodo(state, updatedTodo) {
      const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
      if (index !== -1) {
        state.todos[index] = updatedTodo;
      }
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    completeTodo(state, id) {
      const index = state.todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        state.todos[index].completed = true;
      }
    },
  },
  getters: {
    pendingTodos(state) {
      return state.todos.filter(todo => !todo.completed);
    },
    completedTodos(state) {
      return state.todos.filter(todo => todo.completed);
    },
    overdueTodos(state) {
      const today = new Date();
      return state.todos.filter(todo => !todo.completed && new Date(todo.dueDate) < today);
    },
  },
});

export default store;
