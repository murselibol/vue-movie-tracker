<template>
  <div class="main-container">
    <section class="movies">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </section>
    <SideBar />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MovieCard from '../components/MovieCard'
import SideBar from '../components/SideBar'

export default {
  name: 'Home',
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
  grid-column-gap: 30px;

  @include mq('--t') {
    display: block;
    grid-column-gap: 0;
  }

  .movies {
    display: flex;
    flex-wrap: wrap;
    gap: 29px;
  }
}
</style>
