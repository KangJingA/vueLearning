<template>
  <AddTask v-show="showAddTask" @add-task="addTask" />
  
  <Tasks
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
  />
</template>

<script>
import Tasks from "../components/Tasks.vue";
import AddTask from "../components/AddTask.vue";
export default {
  name: "Home",
  props: {
    showAddTask: { type: Boolean },
  },
  components: {
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    async addTask(newTask) {
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      const data = await res.json();
      this.tasks.push(newTask);
    },
    async deleteTask(id) {
      // if (confirm("Are you sure?")) {
      //   console.log("task", id);
      //   this.tasks = this.tasks.filter((task) => task.id !== id);
      // }
      const res = await fetch(`api/tasks/${id}`, {
        method: "DELETE",
      });

      res.status === 200
        ? (this.tasks = this.tasks.filter((task) => task.id !== id))
        : alert("Error deleting task");
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id);
      const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      const res = await fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });

      const data = await res.json();
      this.tasks = this.tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              reminder: data.reminder,
            }
          : task
      );
    },
    // fetch data from the server
    // api is a proxy
    async fetchTasks() {
      const res = await fetch("api/tasks");
      const data = await res.json();

      return data;
    },
    // fetch single task
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();

      return data;
    },
  },
  // method that runs when the component is created
  // still need to define the data in data() first
  async created() {
    console.log("component created");
    this.tasks = await this.fetchTasks();
  },
};
</script>
