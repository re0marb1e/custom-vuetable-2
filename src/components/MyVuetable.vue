<template>
  <div class="container">
    <vuetable ref="vuetable"
              api-url="http://vuetable.ratiw.net/api/users"
              :fields="fields"
              :css="css.table"
              :per-page="20"
              :multi-sort="true"
              :sort-order="sortOrder"
              pagination-path=""
              @vuetable:pagination-data="onPaginationData"
    ></vuetable>
    <div class="vuetable-pagination">
      <vuetable-pagination-info ref="paginationInfo"
                                info-template="第 {from} 条到第 {to} 条, 总共 {total} 条"
                                no-data-template="没有相关数据"
                                class="pull-left">
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
        fields: [
          {
            name: 'name',
            sortField: 'name'
          }, {
            name: 'email',
            sortField: 'email'
          }, {
            name: 'birthdate'
          }, {
            name: 'age',
            sortField: 'birthdate'
          }, {
            name: 'nickname',
            callback: 'allcap'
          }, {
            name: 'gender',
            callback: 'genderLabel'
          }, {
            name: 'salary',
            visible: false
          }
        ],
        sortOrder: [  // default sort order
          {
            field: 'email',
            sortField: 'email',
            direction: 'desc'
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
      },
      onPaginationData (paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
        this.$refs.paginationInfo.setPaginationData(paginationData)
      },
      onChangePage (page) {
        this.$refs.vuetable.changePage(page)
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
