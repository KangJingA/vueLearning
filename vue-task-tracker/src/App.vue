// v-bind tasks cos its dynamic // when the tasks array changes, component
should rerender // v-if, v-show conditional rendering // directives! v-whatever
<template>
  <div class="container">
    <Header
      @toggle-add-task="toggleAddTask"
      title="Task Tracker"
      :showAddTask="showAddTask"
    />
    <div v-show="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<script>
import Header from "./components/Header"; // 1. import the component
import Tasks from "./components/Tasks.vue";
import AddTask from "./components/AddTask.vue";

export default {
  name: "App",
  components: {
    // declare component in the export default
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    addTask(newTask) {
      console.log("this is clicked");
      console.log(newTask);
      this.tasks.push(newTask);
      // this.tasks = [...this.tasks, newTask];
    },
    deleteTask(id) {
      // if (confirm("Are you sure?")) {
      //   console.log("task", id);
      //   this.tasks = this.tasks.filter((task) => task.id !== id);
      // }
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              reminder: !task.reminder,
            }
          : task
      );
    },
  },
  // method that runs when the component is created
  // still need to define the data in data() first
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Doctor's Appointment",
        day: "Monday",
        reminder: true,
      },
      {
        id: 2,
        text: "Buy food",
        day: "Monday",
        reminder: false,
      },
    ];
  },
};
</script>

// global styles
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
