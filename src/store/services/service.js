import axios from 'axios'
require('dotenv').config()
const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: { api_key: process.env.VUE_APP_API_KEY }
})

export default {
  fetchMovies() {
    console.log(process.env)
    return tmdb.get(`/movie/now_playing`)
  },

  fetchPopularMovies() {
    return tmdb.get(`/movie/popular`)
  },

  fetchMoviesGenre(movieGenreId) {
    var todayDate = new Date().toISOString().slice(0, 10)
    return tmdb.get(`/discover/movie`, { params: { sort_by: 'primary_release_date.desc', 'primary_release_date.lte': todayDate, 'vote_average.gte': '1.0', with_genres: movieGenreId } })
  },

  fetchMovieSearch(movieName) {
    return tmdb.get(`/search/movie`, { params: { query: movieName } })
  },

  fetchMovieDetails(movieId) {
    return tmdb.get(`/movie/${movieId}`)
  },

  fetchMovieSimilar(movieId) {
    return tmdb.get(`/movie/${movieId}/similar`)
  },

  fetchMovieVideos(movieId) {
    return tmdb.get(`/movie/${movieId}/videos`)
  }
}
