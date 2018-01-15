<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="container">
      <my-vuetable
        api-url="https://vuetable.ratiw.net/api/users"
        :fields="fields"
        :sort-order="sortOrder"
        detail-row-component="detail-row"
        :is-row-viewable="true"
        :is-row-editable="true"
        :is-row-deletable="true"
      ></my-vuetable>
    </div>
  </div>
</template>

<script>
  import MyVuetable from './components/MyVuetable'
  import FieldDefs from './components/FieldDefs.js'
  import DetailRow from './components/DetailRow'
  import Vue from 'vue'

  Vue.component('detail-row', DetailRow)

  export default {
    name: 'app',
    components: {
      MyVuetable
    },
    data () {
      return {
        fields: FieldDefs,
        sortOrder: [  // default sort order
          {
            field: 'email',
            sortField: 'email',
            direction: 'desc'
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
</style>
