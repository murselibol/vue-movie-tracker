<template>
  <section class="search">
    <form class="form-search">
      <input type="text" name="search" placeholder="search..." />
      <IconSearch class="icon-search" />
    </form>
  </section>
</template>

<script>
import IconSearch from '../assets/icons/search.svg'

export default {
  name: 'Search',
  components: {
    IconSearch
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;

  .form-search {
    position: relative;
    input {
      min-width: 500px;
      height: 50px;
      font-size: 1.125rem;
      font-weight: 500;
      padding-left: 25px;
      color: white;
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 40px;
    }

    .icon-search {
      position: absolute;
      position: absolute;
      right: 25px;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  }
}
</style>
