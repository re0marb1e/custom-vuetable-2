<template>
  <vuetable ref="vuetable"
            api-url="http://vuetable.ratiw.net/api/users"
            :fields="fields"
            :css="css"
  ></vuetable>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'

  export default {
    components: {
      Vuetable
    },
    data () {
      return {
        css: {
          tableClass: 'table table-striped table-bordered'
        },
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
        ]
      }
    },
    methods: {
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
</script>
