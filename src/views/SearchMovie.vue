<template>
  <div class="main-container " v-if="isLoading">
    <section class="movies">
      <MovieCard v-for="movie in movieSearch" :key="movie.id" :movie="movie" />
    </section>
    <SideBar />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MovieCard from '../components/MovieCard'
import SideBar from '../components/SideBar'

export default {
  name: 'SearchMovie',
  data() {
    return {
      isLoading: true
    }
  },
  components: {
    MovieCard,
    SideBar
  },
  computed: {
    ...mapGetters(['movieSearch']),

    queryName() {
      return this.$route.query.search
    }
  },

  watch: {
    $route() {
      this.fetchMovieSearch()
    }
  },

  methods: {
    fetchMovieSearch() {
      this.$store.dispatch('fetchMovieSearch', this.queryName)
    }
  },
  created() {
    if (this.queryName != undefined || this.queryName != null || this.queryName != '') {
      this.fetchMovieSearch()
    }
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  padding-top: 15px;
  padding-bottom: 15px;
  display: grid;
  grid-column-gap: 0;

  @include mq('--1200') {
    grid-template-columns: 1fr 300px;
    grid-column-gap: 30px;
  }

  .movies {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: var(--movies-gap);
  }
}
</style>
