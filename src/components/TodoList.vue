<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo" />
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem,
  },
  props: {
    todos: Array,
  },
};
</script>
