<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add task'"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  props: {
    // ideally an object
    title: {
      type: String, //declare prop type
      default: "Hello World", //defaults to this if prop is not passed in
    },
    showAddTask: {
      type: Boolean,
    },
  },
  components: {
    Button,
  },
  emits: ["toggle-add-task"],
};
</script>

// scoped means that the styles will only apply to this component
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
