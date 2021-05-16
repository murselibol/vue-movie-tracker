<template>
  <section class="search">
    <form @submit.prevent="handleSubmit()" class="form-search">
      <input v-model="searchName" type="text" name="search" placeholder="search..." />
      <IconSearch class="icon-search" @click="handleSubmit()" />
    </form>
    <h3 class="searchResult" v-if="searchControl">＂ {{ $route.query.search }} ＂ için arama sonuçları</h3>
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
      searchName: ''
      // isMenuActive: true
    }
  },
  // created() {
  //   eventBus.$on('menuStatus', (status) => {
  //     this.isMenuActive = status
  //   })
  // },
  computed: {
    keepParams() {
      return this.$route.fullPath
    },
    searchControl() {
      if (this.$route.query.search === undefined) {
        return false
      }
      return true
    }
  },
  watch: {
    keepParams() {
      return (this.searchName = '')
    }
  },

  methods: {
    handleSubmit() {
      this.$router.push({ name: 'SearchMovie', query: { search: this.searchName } })
      // this.isMenuActive = !this.isMenuActive
      eventBus.$emit('menuStatus', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 30px;
  padding-bottom: 30px;

  .form-search {
    position: relative;
    width: 100%;

    @include mq('--576') {
      width: 500px;
    }

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
      cursor: pointer;
      transition: 0.15s ease;
      &:hover {
        fill: var(--color-main-green);
      }
    }
  }

  .searchResult {
    margin-top: 15px;
    font-size: 1rem;

    @include mq('--576') {
      font-size: 1.17rem;
    }
  }
}
</style>
