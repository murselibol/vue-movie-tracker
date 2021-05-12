<template>
  <aside class="sidebar">
    <h3 class="sidebar-title">Most populer movies</h3>
    <hr class="hr-20" />
    <div class="card-container" v-for="movie in popularMovies" :key="movie.id">
      <router-link to="/">
        <div class="card">
          <MovieImg :imgPath="movie.poster_path" :imgAlt="movie.title" class="img-movie-popular " />
          <div class="card-body">
            <h5 class="card-title">{{ movie.title | maxCharacter }}</h5>
            <span class="card-item"> IMDB {{ movie.vote_average.toFixed(1) }} </span>
            <span class="card-item"> 1h 37m </span>
            <span class="card-item"> {{ movie.release_date.substring(0, 4) }} </span>
          </div>
        </div>
      </router-link>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
import MovieImg from './MovieImg'

export default {
  name: 'SideBar',
  components: {
    MovieImg
  },
  computed: {
    ...mapGetters(['popularMovies'])
  },
  filters: {
    maxCharacter(movie_title) {
      return movie_title.length > 35 ? movie_title.substring(0, 35) + '...' : movie_title
    },
    movieTime(movie_time) {
      const hours = Math.floor(movie_time / 60)
      const minutes = movie_time - 60 * hours

      return ` ${hours}h ${minutes}m`
    }
  },
  methods: {
    fetchPopularMovies() {
      this.$store.dispatch('fetchPopularMovies')
    }
  },
  created() {
    this.fetchPopularMovies()
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  display: none;
  @include mq('--1200') {
    display: block;
  }

  .sidebar-title {
    font-size: 1.5rem;
    user-select: none;
    cursor: pointer;
  }

  hr {
    width: 90%;
    height: 1px;
    background: var(--color-silver-chalice);
    margin-top: 10px;
    margin-bottom: 25px;
  }

  .card {
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin-bottom: 12px;
    transition: 0.2s;

    &:hover {
      color: var(--color-spring-green);
      transition: 0.2s;
    }

    .card-body {
      .card-title {
        font-size: 0.75rem;
      }
      span {
        font-size: 0.75rem;
        &:not(:last-child) {
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
