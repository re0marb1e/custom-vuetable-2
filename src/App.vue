<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="container">
      <custom-vuetable
        api-url="https://vuetable.ratiw.net/api/users"
        :fields="fields"
        :sort-order="sortOrder"
        detail-row-component="detail-row"
        :actions-column="actionsColumn">
      </custom-vuetable>
    </div>
  </div>
</template>

<script>
  import CustomVuetable from './components/CustomVuetable'
  import FieldDefs from './components/FieldDefs.js'
  import DetailRow from './components/DetailRow'
  import Vue from 'vue'

  Vue.component('detail-row', DetailRow)

  export default {
    name: 'app',
    components: {
      CustomVuetable
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
        actionsColumn: {
          viewAction: true,
          editAction: true,
          deleteAction: true
        },
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
