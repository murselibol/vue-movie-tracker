<template>
  <div class="main-container">
    <section class="movies">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </section>
    <aside class="sidebar"></aside>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MovieCard from '../components/MovieCard'

export default {
  name: 'Home',
  data() {
    return {
      isLoading: true
    }
  },
  components: {
    MovieCard
  },
  computed: {
    ...mapGetters(['movies'])
  },
  created() {
    this.$store.dispatch('fetchMovies').then(() => {
      this.isLoading = false
    })
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  padding-top: 15px;
  padding-bottom: 15px;
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-gap: 30px;

  @include mq('--t') {
    display: block;
    justify-content: center;
  }

  .movies {
    display: flex;
    flex-wrap: wrap;
    gap: 15px 15px;
    justify-content: center;

    @include mq('--t') {
    }
  }
  .sidebar {
    display: block;
    background-color: yellowgreen;
    @include mq('--t') {
      display: none;
    }
  }
}
</style>
