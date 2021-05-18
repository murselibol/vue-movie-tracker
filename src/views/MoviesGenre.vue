<template>
  <div class="main-container ">
    <section class="movies">
      <MovieCard v-for="movie in moviesGenre" :key="movie.id" :movie="movie" />
    </section>
    <SideBar />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MovieCard from '../components/MovieCard'
import SideBar from '../components/SideBar'

export default {
  name: 'MoviesGenre',
  components: {
    MovieCard,
    SideBar
  },
  created() {
    this.whatGenre()
  },
  watch: {
    $route() {
      this.whatGenre()
    }
  },
  computed: {
    getGenreName() {
      return this.$route.params.genre
    },

    ...mapGetters(['moviesGenre'])
  },
  methods: {
    whatGenre() {
      if (this.getGenreName === 'adventure') {
        return this.fetchAndventureMovies()
      } else if (this.getGenreName === 'animation') {
        return this.fetchAnimationMovies()
      } else if (this.getGenreName === 'horror') {
        return this.fetchHorrorMovies()
      } else if (this.getGenreName === 'comedy') {
        return this.fetchComedyMovies()
      } else if (this.getGenreName === 'romance') {
        return this.fetchRomanceMovies()
      }
    },
    fetchAndventureMovies() {
      const adventureMoviesId = Number(12)
      this.$store.dispatch('fetchMoviesGenre', adventureMoviesId)
    },
    fetchAnimationMovies() {
      const animationMoviesId = Number(16)
      this.$store.dispatch('fetchMoviesGenre', animationMoviesId)
    },
    fetchHorrorMovies() {
      const horrorMoviesId = Number(27)
      this.$store.dispatch('fetchMoviesGenre', horrorMoviesId)
    },
    fetchRomanceMovies() {
      const romanceMoviesId = Number(10749)
      this.$store.dispatch('fetchMoviesGenre', romanceMoviesId)
    },
    fetchComedyMovies() {
      const comedyMoviesId = Number(35)
      this.$store.dispatch('fetchMoviesGenre', comedyMoviesId)
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
