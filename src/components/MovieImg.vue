<template>
  <figure>
    <img :src="posterPath" :alt="imgAlt" :class="imgClass" />
  </figure>
</template>

<script>
export default {
  name: 'MovieImg',
  props: {
    imgPath: {
      type: String,
      required: true
    },
    imgAlt: {
      type: String,
      required: true
    },
    imgClass: {
      type: String,
      default: 'movie-poster',
      validator: function(value) {
        return ['movie-poster'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    posterPath() {
      return `https://image.tmdb.org/t/p/w500/${this.imgPath}`
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-poster {
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
</style>
