<template>
  <div class="container">
    <filter-bar></filter-bar>
    <vuetable ref="vuetable"
              api-url="http://vuetable.ratiw.net/api/users"
              :fields="fields"
              :css="css.table"
              :per-page="20"
              :multi-sort="true"
              multi-sort-key="ctrl"
              :sort-order="sortOrder"
              pagination-path=""
              detail-row-component="detail-row"
              :append-params="moreParams"
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
    <div class="vuetable-pagination">
      <vuetable-pagination-info ref="paginationInfo"
                                info-template="第 {from} 条到第 {to} 条, 总共 {total} 条"
                                no-data-template="没有相关数据">
      </vuetable-pagination-info>
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
  import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
  import Vue from 'vue'
  import VueEvents from 'vue-events'

  import FilterBar from './FilterBar'
  import DetailRow from './DetailRow'
  import FieldDefs from './FieldDefs.js'

  Vue.component('filter-bar', FilterBar)
  Vue.component('detail-row', DetailRow)
  Vue.use(VueEvents)

  export default {
    components: {
      Vuetable,
      VuetablePagination,
      VuetablePaginationInfo
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
        },
        fields: FieldDefs,
        sortOrder: [  // default sort order
          {
            field: 'email',
            sortField: 'email',
            direction: 'desc'
          }
        ],
        moreParams: { // send more params

        }
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
      },
      onPaginationData (paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
        this.$refs.paginationInfo.setPaginationData(paginationData)
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
        this.moreParams = {
          'filter': filterText
        }
        Vue.nextTick(() => this.$refs.vuetable.refresh())
      },
      'filter-reset' () {
        this.moreParams = {}
        this.$refs.vuetable.refresh()
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
