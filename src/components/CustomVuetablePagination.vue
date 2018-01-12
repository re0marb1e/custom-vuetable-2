<template>
  <vuetable-pagination ref="customPagination"
                       :css="css"
                       @vuetable-pagination:change-page="onChangePage">
  </vuetable-pagination>
</template>

<script>
  import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'

  export default {
    name: 'custom-vuetable-pagination',
    components: {
      VuetablePagination
    },
    data () {
      return {
        css: {
          infoClass: 'pull-left',
          wrapperClass: 'vuetable-pagination pull-right',
          activeClass: 'btn-primary',
          disabledClass: 'disabled',
          pageClass: 'btn btn-border',
          linkClass: 'btn btn-border',
          icons: {
            first: '',
            prev: '',
            next: '',
            last: ''
          }
        }
      }
    },
    methods: {
      onChangePage (page) {
        this.$parent.$refs.vuetable.changePage(page) // not good, need decouple
      },
      setPaginationData (paginationData) {
        this.$refs.customPagination.setPaginationData(paginationData)
      }
    }
  }
</script>

<style scoped>

</style>
