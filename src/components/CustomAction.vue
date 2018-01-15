<template>
  <button :class="['btn btn-default', css.btnClass]">
    <i :class="css.iconClass"></i>
  </button>
</template>

<script>
  export default {
    name: 'custom-action',
    props: {
      css: {
        type: Object,
        default () {
          return {
            btnClass: '',
            iconClass: ''
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
