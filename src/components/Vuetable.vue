<template>
  <vuetable ref="vuetable"
            :api-url="apiUrl"
            :fields="fields"
            :css="css"
  ></vuetable>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'

  export default {
    props: {
      fields: {
        type: Array,
        required: true
      },
      apiUrl: {
        type: String,
        required: true
      }
    },
    components: {
      Vuetable
    },
    data () {
      return {
        css: {
          tableClass: 'table table-striped table-bordered'
        }
      }
    },
    mounted: function () {
      for (let [key, value] of Object.entries(this.$parent['callback'])) {
        this[key] = value
      }
    }
  }
</script>
