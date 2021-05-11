<template>
  <div class="main-container">
    <div class="backdrop-img-container">
      <MovieImg :imgPath="movie.backdrop_path" :imgAlt="movie.title" imgClass="img-movie-backdrop" />
    </div>
    <section class="movie-details">
      <MovieImg :imgPath="movie.poster_path" :imgAlt="movie.title" imgClass="img-movie-thumbnail" />
      <div class="movie-info">
        <h2 class="movie-title">{{ movie.title }}</h2>
        <span class="movie-genres" v-for="genre in movie.genres" :key="genre.id"> {{ genre.name }}, </span>
        <article class="movie-overview">{{ movie.overview }}</article>
        <div class="detail-items">
          <span class="detail-item"><IconStar /> {{ movie.vote_average }} </span>
          <span class="detail-item"><IconClock /> {{ runtime }} </span>
          <span class="detail-item"><IconCalendar /> {{ movie.release_date }} </span>
          <span class="detail-item" v-for="country in movie.production_countries" :key="country.id"><IconFlag /> {{ country.iso_3166_1 }}</span>
        </div>
        <div class="movie-trailer-container">
          <h3 class="trailer-text">Trailer</h3>
          <a @click="openTrailerPlayer()" class="trailer-player">
            <MovieImg :imgPath="movie.backdrop_path" :imgAlt="movie.title" imgClass="img-movie-trailer" />
            <IconPlay class="icon-play" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MovieImg from '../components/MovieImg'
import IconStar from '../assets/icons/star.svg'
import IconCalendar from '../assets/icons/calendar.svg'
import IconClock from '../assets/icons/clock.svg'
import IconFlag from '../assets/icons/flag.svg'
import IconPlay from '../assets/icons/play.svg'

export default {
  name: 'MovieDetails',
  components: {
    MovieImg,
    IconStar,
    IconCalendar,
    IconClock,
    IconFlag,
    IconPlay
  },
  data() {
    return {
      isLoading: true
    }
  },

  computed: {
    ...mapGetters(['movie']),

    movieId() {
      return this.$route.params.id
    },

    runtime() {
      const { runtime } = this.movie
      const hours = Math.floor(runtime / 60)
      const minutes = runtime - 60 * hours

      return ` ${hours}h ${minutes}m`
    }
  },

  watch: {
    $route: 'fetchMovieDetails'
  },

  methods: {
    fetchMovieDetails() {
      return this.$store.dispatch('fetchMovieDetails', this.movieId)
    }
  },

  created() {
    return this.fetchMovieDetails().then(() => {
      this.isLoading = false
    })
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  .backdrop-img-container {
    position: absolute;
    width: 0;

    @include mq('--1200') {
      min-width: 100%;
      left: 0;
      top: 0;
      z-index: -1;
      pointer-events: none;
    }
  }

  .movie-details {
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;
    // column-gap: 0;

    @include mq('--768') {
      flex-direction: row;
      column-gap: 40px;
    }

    .movie-info {
      .movie-title {
        font-size: 1.875rem;
        font-weight: 700;
      }

      .movie-genres {
        display: inline-block;
        margin-top: 3px;
        margin-bottom: 15px;
      }

      .movie-overview {
        font-size: 1rem;
        margin-bottom: 15px;
      }

      .detail-items {
        margin-bottom: 25px;
        span:not(:last-child) {
          margin-right: 12px;
        }

        svg {
          width: 12px;
          height: 12px;
        }
      }
    }

    .movie-trailer-container {
      .trailer-text {
        font-size: 1.35rem;
        margin-bottom: 15px;
      }

      .trailer-player {
        display: inline-block;
        position: relative;

        .icon-play {
          position: absolute;
          top: calc(50% - 25px);
          left: calc(50% - 25px);
          height: 50px;
          width: 50px;
        }
      }
    }
  }
}
</style>
