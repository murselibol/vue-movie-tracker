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
  display: block;
  background-color: yellowgreen;
  @include mq('--t') {
    display: none;
  }
}
</style>
