<template>
  <vuetable-pagination-info ref="paginationInfo"
                            info-template="第 {from} 条到第 {to} 条, 总共 {total} 条"
                            no-data-template="没有相关数据"
                            :css="css">
  </vuetable-pagination-info>
</template>

<script>
  import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'

  export default {
    name: 'custom-vuetable-pagination-info',
    components: {
      VuetablePaginationInfo
    },
    data () {
      return {
        css: {
          infoClass: 'pull-left'
        }
      }
    },
    methods: {
      setPaginationData (paginationData) {
        this.$refs.paginationInfo.setPaginationData(paginationData)
      }
    }
  }
</script>

<style scoped>
  .vuetable-pagination-info {
    margin-top: 0px;
  }
</style>
