<template>
  <section class="search" :class="{ 'menu-show-search': isMenuActive }">
    <form class="form-search">
      <input type="text" name="search" placeholder="search..." />
      <IconSearch class="icon-search" />
    </form>
  </section>
</template>

<script>
import IconSearch from '../assets/icons/search.svg'
import { eventBus } from '../main.js'

export default {
  name: 'Search',
  components: {
    IconSearch
  },
  data() {
    return {
      isMenuActive: true
    }
  },
  created() {
    eventBus.$on('menuStatus', (status) => {
      this.isMenuActive = status
    })
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: none;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;

  .form-search {
    position: relative;
    width: 500px;

    input {
      width: 100%;
      height: 50px;
      font-size: 1.125rem;
      font-weight: 500;
      padding-left: 25px;
      padding-right: 25px;
      color: var(--color-white);
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 40px;
    }

    @include mq('--1200') {
      z-index: 1;
    }

    .icon-search {
      position: absolute;
      right: 25px;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  }
}

.menu-show-search {
  display: flex;
}
</style>
