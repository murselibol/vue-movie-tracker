<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="movie in movieSimilar" :key="movie.key" class="swiper-slide">
      <div class="movie-caro">
        <router-link :to="'/movie/' + movie.id">
          <div class="caro-img">
            <MovieImg class="caro-img-poster" :imgPath="movie.poster_path" :imgAlt="movie.title" imgClass="img-carousel" />
            <div class="poster-overlay">
              <div class="item-rating">
                <IconStar class="icon-star" />
                <span class="imdb"> {{ movie.vote_average.toFixed(1) }} </span>
              </div>
              <span class="release-year"> {{ movie.release_date.substring(0, 4) }} </span>
            </div>
          </div>
          <div class="caro-footer">
            <h2 class="movie-title">{{ movie.title }}</h2>
          </div>
        </router-link>
      </div>
    </swiper-slide>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import MovieImg from './MovieImg'
import IconStar from '../assets/icons/star.svg'

export default {
  name: 'MovieCarousel',
  components: {
    Swiper,
    SwiperSlide,
    MovieImg,
    IconStar
  },
  data() {
    return {
      swiperOption: {
        mousewheel: true,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 40
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    }
  },
  props: {
    movieSimilar: {
      value: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
// @import './base.scss';

.swiper-wrapper {
  // background-color: red;
  // height: 200px;
  max-height: 450px;
}
.swipper-slide {
  // background-color: blue;
  max-height: 450px;
}

.movie-caro {
  border-radius: 4px;
  background-color: var(--color-movie-card-title-bg);

  &:hover {
    color: var(--color-main-green);
  }

  .caro-img {
    cursor: pointer;
    width: 100%;

    .caro-img-poster {
      overflow: hidden;
      max-height: 450px;
      height: 100%;
    }

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
        color: var(--color-white);
      }
    }
  }

  .caro-footer {
    padding: 15px;

    .movie-title {
      width: 100%;
      font-size: 1rem;
      font-weight: normal;
      display: block;
      transition: 0.3s ease;

      @include mq('--576') {
        width: auto;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
