import axios from 'axios'
const apiKey = '?api_key=9923e05df8d5661186572a8659e8575d'
const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export default {
  fetchMovies() {
    return tmdb.get(`/movie/now_playing${apiKey}`)
  },

  fetchMovieDetails(movieId) {
    return tmdb.get(`/movie/${movieId}${apiKey}`)
  },

  fetchMovieVideos(movieId) {
    return tmdb.get(`/movie/${movieId}/videos${apiKey}`)
  },

  fetchMovieSearch(movieSearch) {
    return tmdb.get(`/search/movie${apiKey}&query=${movieSearch}`)
  },

  fetchPopularMovies() {
    return tmdb.get(`/movie/popular${apiKey}`)
  }
}
