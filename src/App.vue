<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="container">
      <my-vuetable></my-vuetable>
    </div>
  </div>
</template>

<script>
import MyVuetable from './components/MyVuetable'

export default {
  name: 'app',
  components: {
    MyVuetable
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
table.vuetable {
  text-align: left;
}
</style>
