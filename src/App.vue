<template>
  <div id="todo-app">
    <h1>투두리스트</h1>
    <todo-input/>
    <todo-list />
    <todo-clear/>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoClear from './components/TodoClear.vue'

export default {
  name: 'todo-app',
  components: {
    TodoInput,
    TodoList,
    TodoClear,
  }
}
</script>

<style scoped>
  #todo-app {
    margin: 0 0.5rem;
    position: relative;
  }

  h1 {
    color: #484848;
    text-align: center;
    padding-top: 2.5rem;
  }
</style>
