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
      value: [String, null],
      required: true
    },
    imgAlt: {
      value: [String, null],
      required: true
    },
    imgClass: {
      type: String,
      default: 'img-movie-poster',
      validator: function(value) {
        return ['img-movie-poster', 'img-movie-popular', 'img-movie-backdrop', 'img-movie-thumbnail', 'img-movie-trailer'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    posterPath() {
      return this.imgPath != null && this.imgAlt != null ? `https://image.tmdb.org/t/p/w500/${this.imgPath}` : 'https://lh3.googleusercontent.com/proxy/WqOpJahIkdPuKXnmEpZylEwnzWSMn3V3y_lkwA3XLaG5lMpKSABKgaLS1AJWVw8EmumLPB1S1wH1jqI_PO2LtQnMOAjsXIBXUboK2mtWVA'
    }
  }
}
</script>

<style lang="scss" scoped>
.img-movie-poster {
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  img {
    align-items: center;
  }
}
.img-movie-popular {
  width: 40px;
  height: 60px;
}
.img-movie-backdrop {
  border-radius: 4px;
  width: 100%;
  opacity: 0.1;
  height: 100%;
  // height: 100px;
}
.img-movie-thumbnail {
  width: 100%;
  @include mq('--768') {
    width: 350px;
  }
}
.img-movie-trailer {
  width: 100%;
  @include mq('--768') {
    border-radius: 2px;
    width: 250px;
  }
}
</style>
