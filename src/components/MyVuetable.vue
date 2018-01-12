<template>
  <div class="container">
    <filter-bar></filter-bar>
    <vuetable ref="vuetable"
              :api-url="apiUrl"
              :fields="fields"
              :sort-order="sortOrder"
              :detail-row-component="detailRowComponent"
              :append-params="appendParams"

              :css="css.table"
              :per-page="8"
              :multi-sort="true"
              multi-sort-key="ctrl"
              pagination-path=""
              @vuetable:pagination-data="onPaginationData"
              @vuetable:cell-clicked="onCellClicked"
    >
      <template slot="actions" slot-scope="props">
        <div class="custom-actions">
          <button class="btn btn-default" @click="itemAction('view-item', props.rowData, props.rowIndex)"><i
            class="glyphicon glyphicon-zoom-in"></i></button>
          <button class="btn btn-default" @click="itemAction('edit-item', props.rowData, props.rowIndex)"><i
            class="glyphicon glyphicon-pencil"></i></button>
          <button class="btn btn-default" @click="itemAction('delete-item', props.rowData, props.rowIndex)"><i
            class="glyphicon glyphicon-remove"></i></button>
        </div>
      </template>
    </vuetable>
    <div>
      <custom-vuetable-pagination-info ref="customPaginationInfo"></custom-vuetable-pagination-info>
      <vuetable-pagination ref="pagination"
                           :css="css.pagination"
                           @vuetable-pagination:change-page="onChangePage">
      </vuetable-pagination>
    </div>
  </div>
</template>
<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
  import Vue from 'vue'
  import VueEvents from 'vue-events'

  import CustomVuetablePaginationInfo from './CustomVuetablePaginationInfo'
  import FilterBar from './FilterBar'

  Vue.component('filter-bar', FilterBar)
  Vue.use(VueEvents)

  export default {
    name: 'my-vuetable',
    components: {
      Vuetable,
      VuetablePagination,
      CustomVuetablePaginationInfo
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
      }
    },
    data () {
      return {
        css: {
          table: {
            tableClass: 'table table-striped table-bordered table-hovered',
            loadingClass: 'loading',
            ascendingIcon: 'glyphicon glyphicon-chevron-up',
            descendingIcon: 'glyphicon glyphicon-chevron-down',
            handleIcon: 'glyphicon glyphicon-menu-hamburger'
          },
          pagination: {
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
      }
    },
    mounted: function () {
      for (let [key, value] of Object.entries(this.$parent['callback'])) {
        this[key] = value
      }
    },
    methods: {
      onPaginationData (paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
        this.$refs.customPaginationInfo.setPaginationData(paginationData)
      },
      onChangePage (page) {
        this.$refs.vuetable.changePage(page)
      },
      onCellClicked (data, field, event) {
        console.log('cellClicked: ', field.name)
        this.$refs.vuetable.toggleDetailRow(data.id)
      },
      itemAction (action, data, index) {
        console.log('custom-actions: ' + action, data.name, index)
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
  .pagination {
    margin-top: 0;
  }

  .btn.btn-border {
    border: 1px solid;
    margin-right: 2px;
  }

  .vuetable-pagination-info {
    margin-top: 8px !important;
  }
</style>
