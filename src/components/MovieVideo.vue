<template>
  <div class="video-wrapper">
    <iframe width="560" height="315" :src="videoPath" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: 'MovieVideo',
  props: {
    moviePath: {
      value: [String, null, undefined],
      required: true
    }
  },

  computed: {
    videoPath() {
      if (this.moviePath == null || this.moviePath == undefined) {
        return `https://www.youtube.com/embed/ZWcRmoLqhkc`
      }
      return `https://www.youtube.com/embed/${this.moviePath}`
    }
  }
}
</script>

<style lang="scss" scoped>
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
