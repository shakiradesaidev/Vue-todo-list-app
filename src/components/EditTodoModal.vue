<template>
    <div class="modal">
      <div class="modal-content">
        <h2>Edit Task</h2>
        <form class="editTask" @submit.prevent="updateTodo">
          <input v-model="editedTodo.task" type="text" />
          <input v-model="editedTodo.dueDate" type="date" />
          <br>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      todo: Object, // The current todo item to be edited
    },
    data() {
      return {
        editedTodo: { ...this.todo }, // Clone the todo to avoid direct mutation
      };
    },
    methods: {
      updateTodo() {
        // Pass the edited todo back to the parent component (TodoItem.vue) to update the store
        this.$emit('update-todo', this.editedTodo);
      },
    },
  };
  </script>
  

  