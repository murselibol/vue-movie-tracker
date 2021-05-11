<template>
  <aside class="sidebar"></aside>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style lang="scss" scoped>
.sidebar {
  display: none;
  @include mq('--1200') {
    background-color: yellowgreen;
    display: block;
  }
}
</style>
