import axios from 'axios'
const apiKey = '?api_key=9923e05df8d5661186572a8659e8575d'
const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: { api_key: '9923e05df8d5661186572a8659e8575d' }
})

export default {
  fetchMovies() {
    return tmdb.get(`/movie/now_playing${apiKey}`)
  },

  fetchPopularMovies() {
    return tmdb.get(`/movie/popular${apiKey}`)
  },

  fetchMoviesGenre(movieGenreId) {
    let currentdate = new Date()
    let today = currentdate.getFullYear() + '-' + (currentdate.getMonth() + 1 < 10 ? '0' + (currentdate.getMonth() + 1) : currentdate.getMonth() + 1) + '-' + currentdate.getDate()
    return tmdb.get(`/discover/movie${apiKey}&sort_by=primary_release_date.desc&primary_release_date.lte=${today}&vote_average.gte=1.0&with_genres=${movieGenreId}`)
  },

  fetchMovieSearch(movieName) {
    return tmdb.get(`/search/movie${apiKey}&query=${movieName}`)
  },

  fetchMovieDetails(movieId) {
    return tmdb.get(`/movie/${movieId}${apiKey}`)
  },

  fetchMovieSimilar(movieId) {
    return tmdb.get(`/movie/${movieId}/similar${apiKey}`)
  },

  fetchMovieVideos(movieId) {
    return tmdb.get(`/movie/${movieId}/videos${apiKey}`)
  }
}
