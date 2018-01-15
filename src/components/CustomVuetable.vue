<template>
  <div class="container">
    <filter-bar></filter-bar>
    <vuetable ref="vuetable"
              :api-url="apiUrl"
              :fields="tableFields"
              :sort-order="sortOrder"
              :detail-row-component="detailRowComponent"
              :append-params="appendParams"
              :css="css"
              :per-page="8"
              :multi-sort="true"
              multi-sort-key="ctrl"
              pagination-path=""
              @vuetable:pagination-data="onPaginationData"
              @vuetable:cell-clicked="onCellClicked"
    >
      <template v-if="actionsColumn" slot="actions" slot-scope="props">
        <div class="actions">
          <slot name="custom-actions" :row-data="props.rowData" :row-index="props.rowIndex"></slot>
          <custom-view-action v-if="actionsColumn.viewAction" :row-data="props.rowData" :row-index="props.rowIndex"></custom-view-action>
          <custom-edit-action v-if="actionsColumn.editAction" :row-data="props.rowData" :row-index="props.rowIndex"></custom-edit-action>
          <custom-delete-action v-if="actionsColumn.deleteAction" :row-data="props.rowData" :row-index="props.rowIndex"></custom-delete-action>
        </div>
      </template>
    </vuetable>
    <div>
      <custom-vuetable-pagination-info ref="customPaginationInfo"></custom-vuetable-pagination-info>
      <custom-vuetable-pagination ref="customPagination"></custom-vuetable-pagination>
    </div>
  </div>
</template>
<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import Vue from 'vue'
  import VueEvents from 'vue-events'

  import CustomVuetablePagination from './CustomVuetablePagination'
  import CustomVuetablePaginationInfo from './CustomVuetablePaginationInfo'
  import CustomViewAction from './CustomViewAction'
  import CustomEditAction from './CustomEditAction'
  import CustomDeleteAction from './CustomDeleteAction'
  import FilterBar from './FilterBar'

  Vue.component('filter-bar', FilterBar)
  Vue.use(VueEvents)

  export default {
    name: 'custom-vuetable',
    components: {
      Vuetable,
      CustomVuetablePagination,
      CustomVuetablePaginationInfo,
      CustomViewAction,
      CustomEditAction,
      CustomDeleteAction
    },
    props: {
      apiUrl: {
        type: String,
        required: true
      },
      fields: {
        type: Array,
        required: true
      },
      sortOrder: {
        type: Array,
        default () {
          return []
        }
      },
      appendParams: {
        type: Object,
        default () {
          return {}
        }
      },
      detailRowComponent: {
        type: String
      },
      actionsColumn: {
        type: Object | Boolean,
        default () {
          return {
            viewAction: false,
            editAction: false,
            deleteAction: false
          }
        }
      }
    },
    data () {
      return {
        css: {
          tableClass: 'table table-striped table-bordered table-hovered',
          loadingClass: 'loading',
          ascendingIcon: 'glyphicon glyphicon-chevron-up',
          descendingIcon: 'glyphicon glyphicon-chevron-down',
          handleIcon: 'glyphicon glyphicon-menu-hamburger'
        }
      }
    },
    computed: {
      tableFields () {
        if (this.actionsColumn) {
          return [
            ...this.fields,
            {
              name: '__slot:actions',
              title: '操作',
              titleClass: 'text-center',
              dataClass: 'text-center'
            }
          ]
        } else {
          return this.fields
        }
      }
    },
    mounted: function () {
      for (let [key, value] of Object.entries(this.$parent['callback'])) {
        this[key] = value
      }
    },
    methods: {
      onPaginationData (paginationData) {
        this.$refs.customPagination.setPaginationData(paginationData)
        this.$refs.customPaginationInfo.setPaginationData(paginationData)
      },
      onCellClicked (data, field, event) {
        console.log('cellClicked: ', field.name)
        this.$refs.vuetable.toggleDetailRow(data.id)
      }
    },
    events: {
      'filter-set' (filterText) {
        this.appendParams.filter = filterText
        Vue.nextTick(() => this.$refs.vuetable.refresh())
      },
      'filter-reset' () {
        delete this.moreParams.filter
        Vue.nextTick(() => this.$refs.vuetable.refresh())
      }
    }
  }
</script>
<style>
  .btn.btn-border {
    border: 1px solid;
    margin-right: 2px;
  }
</style>
