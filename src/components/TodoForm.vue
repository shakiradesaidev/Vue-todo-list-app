<template>
  <div class="formAddTask">
    <input v-model="newTask" type="text" placeholder="Name of task" />
    <input v-model="dueDate" type="date" placeholder="Due Date" />
    <br>
    <button @click="addTodo" class="px-4 py-2 bg-blue-500 text-white" >Add Task</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      dueDate: '',
      errors: [],
    };
  },
  methods: {
    validateForm() {
      this.errors = [];
      if (!this.newTask.trim()) {
        this.errors.push('Task description is required.');
      }
      // You can add more validation rules here if needed.
      return this.errors.length === 0;
    },
    addTodo() {
      if (this.validateForm()) {
        const newTodo = {
          id: Date.now(),
          task: this.newTask.trim(),
          dueDate: this.dueDate.trim(),
          completed: false,
        };
        this.$store.commit('addTodo', newTodo);
        this.newTask = '';
        this.dueDate = '';
      }
    },
  },
};
</script>
