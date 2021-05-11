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

  // MEDİA QUERY
  @media (min-width: 320px) {
    max-width: 576px;
  }
  @media (min-width: 576px) {
    max-width: 768px;
  }

  @media (min-width: 768px) {
    max-width: 992px;
  }

  @media (min-width: 992px) {
    max-width: 1200px;
  }

  @media (min-width: 1200px) {
    max-width: 1440px;
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (min-width: 1440px) {
    max-width: 1600px;
  }
}
</style>
