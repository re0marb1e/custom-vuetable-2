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
            name: 'nickname',
            callback: 'allcap'
          }, {
            name: 'gender',
            callback: 'genderLabel'
          }, {
            name: 'salary'
          }, {
            name: 'address.line1',
            title: 'Address 1',
            titleClass: 'text-right',
            dataClass: 'text-right'
          }, {
            name: 'address.line2',
            title: 'Address 2'
          }, {
            name: 'address.zipcode',
            title: 'Zipcode'
          }
        ],
        callback: {
          allcap (value) {
            return value.toUpperCase()
          },
          genderLabel (value) {
            return value === 'M'
              ? '<span class="label label-info"><i class="glyphicon glyphicon-star"></i> Male</span>'
              : '<span class="label label-success"><i class="glyphicon glyphicon-heart"></i> Female</span>'
          }
        }
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
