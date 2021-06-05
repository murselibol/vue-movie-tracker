<template>
  <div class="main-container" v-if="isLoading">
    <section class="backdrop-img-container">
      <MovieImg :imgPath="movie.backdrop_path" :imgAlt="movie.title" imgClass="img-movie-backdrop" />
    </section>
    <section class="movie-details">
      <MovieImg :imgPath="movie.poster_path" :imgAlt="movie.title" imgClass="img-movie-thumbnail" />
      <div class="movie-info">
        <h2 class="movie-title">{{ movie.title }}</h2>
        <span class="movie-genres" v-for="(genre, index) in movie.genres" :key="genre.id"> {{ genre.name }}<span v-if="index != movie.genres.length - 1">, </span> </span>
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
    <hr />
    <section class="video-play">
      <a href=""><h5 class="video-player-name">Player1</h5></a>
      <a href=""><h5 class="video-player-name">Player2</h5></a>
      <a href=""><h5 class="video-player-name">Player3</h5></a>
      <MovieVideo :moviePath="movieVideoKey" />
    </section>
    <section class="carousel-container">
      <!-- <section class="carousel-container" v-if="similarIsEmpty"> -->
      <h3 class="carousel-main-title">
        {{ carouselTitle }} Movies
        <hr />
      </h3>

      <MovieCarousel :movieSimilar="similarORpopularMovies" />
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MovieImg from '../components/MovieImg'
import MovieVideo from '../components/MovieVideo'
import MovieCarousel from '../components/MovieCarousel'
import IconStar from '../assets/icons/star.svg'
import IconCalendar from '../assets/icons/calendar.svg'
import IconClock from '../assets/icons/clock.svg'
import IconFlag from '../assets/icons/flag.svg'
import IconPlay from '../assets/icons/play.svg'

export default {
  name: 'MovieDetails',
  components: {
    MovieImg,
    MovieVideo,
    MovieCarousel,
    IconStar,
    IconCalendar,
    IconClock,
    IconFlag,
    IconPlay
  },
  data() {
    return {
      isLoading: false,
      isOpenTrailer: false,
      carouselTitle: 'Similar'
    }
  },
  created() {
    this.fetchMovieVideos()

    this.fetchMovieSimilar()

    return this.fetchMovieDetails().then(() => {
      this.isLoading = true
    })
  },

  computed: {
    ...mapGetters(['movie', 'movieVideoKey', 'movieSimilar', 'popularMovies']),

    movieId() {
      return this.$route.params.id
    },

    runtime() {
      const { runtime } = this.movie
      const hours = Math.floor(runtime / 60)
      const minutes = runtime - 60 * hours

      return ` ${hours}h ${minutes}m`
    },

    similarORpopularMovies() {
      return this.movieGenre()
    }
  },

  watch: {
    $route() {
      this.fetchMovieDetails()
      this.fetchMovieVideos()
      this.fetchMovieSimilar()
      this.movieGenre()
    }
  },

  methods: {
    fetchMovieDetails() {
      return this.$store.dispatch('fetchMovieDetails', this.movieId)
    },
    fetchMovieVideos() {
      return this.$store.dispatch('fetchMovieVideos', this.movieId)
    },
    fetchMovieSimilar() {
      return this.$store.dispatch('fetchMovieSimilar', this.movieId)
    },
    fetchPopularMovies() {
      return this.$store.dispatch('fetchPopularMovies', this.movieId)
    },
    movieGenre() {
      if (this.movieSimilar.length > 0) {
        this.carouselTitle = 'Similar'
        return this.movieSimilar
      } else {
        this.fetchPopularMovies()
        this.carouselTitle = 'Popular'
        return this.popularMovies
      }
    },

    openTrailerPlayer() {
      this.isOpenTrailer = true
    }
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
    padding-top: 15px;
    padding-bottom: 40px;
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

  hr {
    width: 100%;
    height: 1px;
    background: var(--color-tundora);
  }

  .video-play {
    padding-top: 40px;
    padding-bottom: 40px;

    a:not(:last-child) {
      margin-right: 12px;
    }

    .video-player-name {
      margin-bottom: 10px;
      display: inline-block;
      border: 1.2px solid var(--color-main-green);
      border-radius: 5px;
      padding: 10px;
      transition: 0.3s ease;

      &:hover {
        background-color: var(--color-main-green);
        color: var(--color-black);
      }
    }
  }

  .carousel-container {
    padding-top: 40px;
    padding-bottom: 40px;

    .carousel-main-title {
      font-size: 2rem;
      cursor: pointer;
      user-select: none;
      margin-bottom: 20px;

      hr {
        margin-top: 5px;
      }
    }
  }
}
</style>
