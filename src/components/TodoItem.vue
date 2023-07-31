<template>
  <div :class="{'bg-red-200': isOverdue}">
    <p :class="{'line-through': todo.completed}">{{ todo.task }}</p>
    <p v-if="isOverdue" class="text-red-500">Due Date: {{ todo.dueDate }}</p>
    <button @click="markComplete">{{ todo.completed ? 'Unmark' : 'Mark' }} Complete</button>
    <button @click="duplicateTodo">Duplicate</button>
    <button @click="showEditModal = true">Update</button>
    <button @click="confirmDelete">Delete</button>
    <div v-if="showConfirmationModal">
      <p>Are you sure you want to delete this task?</p>
      <button @click="deleteTodo">Yes</button>
      <button @click="closeConfirmationModal">No</button>
    </div>

    <!-- Use the EditTodoModal component conditionally -->
    <EditTodoModal v-if="showEditModal" :todo="todo" @update-todo="handleUpdateTodo" />
  </div>
</template>

<script>
import EditTodoModal from './EditTodoModal.vue';

export default {
  components: {
    EditTodoModal,
  },
  props: {
    todo: Object,
  },
  data() {
    return {
      showConfirmationModal: false,
      showEditModal: false, // Added to control the display of the EditTodoModal
    };
  },
  methods: {
    markComplete() {
      this.$store.commit('completeTodo', this.todo.id);
    },
    duplicateTodo() {
      const duplicatedTodo = { ...this.todo, id: Date.now(), completed: false };
      this.$store.commit('addTodo', duplicatedTodo);
    },
    confirmDelete() {
      this.showConfirmationModal = true;
    },
    deleteTodo() {
      this.$store.commit('deleteTodo', this.todo.id);
      this.closeConfirmationModal();
    },
    closeConfirmationModal() {
      this.showConfirmationModal = false;
    },
    handleUpdateTodo(updatedTodo) {
      this.$store.commit('updateTodo', updatedTodo);
      this.showEditModal = false; // Hide the modal after updating
    },
  },
  computed: {
    isOverdue() {
      const dueDate = new Date(this.todo.dueDate);
      return !this.todo.completed && dueDate < new Date();
    },
  },
};
</script>

<style>
/* Your styles here */
</style>
