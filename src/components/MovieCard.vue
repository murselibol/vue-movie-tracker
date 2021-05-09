<template>
  <div class="movie-card">
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
  }
}
</script>

<style lang="scss" scoped>
.movie-card {
  width: 270px;
  border-radius: 4px;
  background-color: #0d0d0d;

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
    max-width: 150px;

    .movie-title {
      font-size: 1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  // MEDİA QUERY
  @media (min-width: 576px) {
    max-width: calc(100%-30px / 3);
    flex: 0 0 calc(100% / 3);
  }

  @media (min-width: 768px) {
    flex: 0 0 calc(100% / 4);
  }

  @media (min-width: 992px) {
    flex: 0 0 calc(100% / 4);
  }

  @media (min-width: 1200px) {
    flex: 0 0 calc(100% / 5);
  }

  @media (min-width: 1440px) {
    flex: 0 0 calc(100% / 5);
  }
  @media (min-width: 1600px) {
    flex: 0 0 calc(100% / 6);
  }
}
</style>
