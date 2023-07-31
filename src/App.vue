<template>
  <div class="container mx-auto">
    <h1 class="text-4xl font-bold mb-4">Big phone store To-do list</h1>
    <TodoForm />
    <div class="pendingTask">
    <h2 class="text-2xl font-bold mt-4">Pending Tasks</h2>
    <TodoList :todos="pendingTodos" />
    </div>
    <div class="completeTask">
    <h2 class="text-2xl font-bold mt-4">Completed Tasks</h2>
    <button @click="showCompleted = !showCompleted">
      {{ showCompleted ? 'Hide Completed Tasks' : 'Show Completed Tasks' }}
    </button>
    <TodoList v-if="showCompleted" :todos="completedTodos" />
  </div>
  </div>
</template>

<script>
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    TodoForm,
    TodoList,
  },
  data() {
    return {
      showCompleted: false,
    };
  },
  computed: {
    ...mapGetters(['pendingTodos', 'completedTodos']),
  },
};
</script>

<style src="./assets/styles.css"></style>
