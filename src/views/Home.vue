<template>
  <div class="main-container" v-if="isLoading">
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
      isLoading: false
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
      this.isLoading = true
    })
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
