<template>
  <custom-action :css="css" @click.native="itemAction(rowData, rowIndex)"></custom-action>
</template>

<script>
  import CustomAction from './CustomAction'

  export default {
    name: 'custom-view-action',
    components: {
      CustomAction
    },
    props: {
      rowData: {
        type: Object,
        required: true
      },
      rowIndex: {
        type: Number
      }
    },
    data () {
      return {
        css: {
          iconClass: 'glyphicon glyphicon-remove',
          btnClass: 'btn-danger'
        }
      }
    },
    methods: {
      itemAction (data, index) {
        console.log('custom-actions: del-item', data.name, index)
      }
    }
  }
</script>

<style scoped>

</style>
