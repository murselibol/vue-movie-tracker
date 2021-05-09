<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style lang="scss" scoped>
.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 1200px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (min-width: 1440px) {
    max-width: 1600px;
  }
}
</style>
