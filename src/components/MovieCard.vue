<template>
  <div class="movie-card">
    <router-link :to="moviePath">
      <div class="card-img">
        <MovieImg class="card-img-poster" :imgPath="movie.poster_path" :imgAlt="movie.title" />
        <div class="poster-overlay">
          <div class="item-rating">
            <IconStar class="icon-star" />
            <span class="imdb"> {{ movie.vote_average.toFixed(1) }} </span>
          </div>
          <span class="release-year"> {{ movie.release_date.substring(0, 4) }} </span>
        </div>
      </div>
      <div class="card-footer">
        <h2 class="movie-title">{{ movie.title }}</h2>
      </div>
    </router-link>
  </div>
</template>

<script>
import MovieImg from './MovieImg'
import IconStar from '../assets/icons/star.svg'

export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  components: {
    MovieImg,
    IconStar
  },
  computed: {
    moviePath() {
      return `/movie/${this.movie.id}`
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-card {
  border-radius: 4px;
  background-color: var(--color-movie-card-title-bg);
  transition: 0.2s;
  // box-shadow: 0px 0px 13px 2px rgba(255, 255, 255, 0.2);
  &:hover {
    box-shadow: 0px 0px 13px 2px rgba(255, 255, 255, 0.78);
    // box-shadow: 0px 0px 13px 2px rgba(163, 163, 163, 0.78);
    transition: 0.2s;
  }

  .card-img {
    cursor: pointer;

    .poster-overlay {
      font-size: 0.875rem;
      position: relative;
      bottom: 0px;
      left: 0px;
      right: 0px;

      .item-rating {
        position: absolute;
        left: 10px;
        bottom: 10px;

        .icon-star {
          width: 1em;
          height: 1em;
          fill: var(--color-imdb);
        }
        .imdb {
          margin-left: 5px;
          color: var(--color-imdb);
        }
      }

      .release-year {
        position: absolute;
        right: 10px;
        bottom: 10px;
      }
    }
  }

  .card-footer {
    padding: 15px;

    .movie-title {
      font-size: 1rem;
      font-weight: normal;
      display: block;
      width: 100%;

      transition: 0.3s;

      @include mq('--576') {
        width: auto;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &:hover {
        color: var(--color-spring-green);
        transition: 0.3s;
      }
    }
  }

  @media (min-width: 320px) {
    width: 100%;
    // flex: 0 0 calc(100% / 1);
  }
  @media (min-width: 576px) {
    max-width: calc((100% - (var(--movies-gap) * 1)) / 2);
    // flex: 0 0 calc(100% / 2);
  }
  @media (min-width: 768px) {
    max-width: calc((100% - (var(--movies-gap) * 2)) / 3);
    // flex: 0 0 calc(100% / 3);
  }
  @media (min-width: 992px) {
    max-width: calc((100% - (var(--movies-gap) * 3)) / 4);
    // flex: 0 0 calc(100% / 4);
  }
  @media (min-width: 1200px) {
    max-width: calc((100% - (var(--movies-gap) * 3)) / 4);
    // flex: 0 0 calc(100% / 4);
  }
  @media (min-width: 1440px) {
    max-width: calc((100% - (var(--movies-gap) * 4)) / 5);
    // flex: 0 0 calc(100% / 5);
  }
}
</style>
