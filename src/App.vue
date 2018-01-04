<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="container">
      <my-vuetable></my-vuetable>
      <!--<vuetable :fields="fields" api-url="http://vuetable.ratiw.net/api/users"></vuetable>-->
    </div>
  </div>
</template>

<script>
  import MyVuetable from './components/MyVuetable'
  import Vuetable from './components/Vuetable.vue'

  export default {
    name: 'app',
    components: {
      MyVuetable,
      Vuetable
    },
    data () {
      return {
        fields: ['name', 'email', 'birthdate',
          {
            name: 'address.line1',
            title: 'Address 1'
          }, {
            name: 'address.line2',
            title: 'Address 2'
          }, {
            name: 'address.zipcode',
            title: 'Zipcode'
          }
        ]
      }
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
