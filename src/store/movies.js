import service from './services/service'

const state = {
  movies: [],
  movieDetails: [],
  movieVideos: [],
  popularMovies: [],
  movieSearch: [],
  movieSimilar: []
}

const getters = {
  movies(state) {
    return state.movies
  },

  movie(state) {
    return state.movieDetails
  },

  movieVideoKey(state) {
    var size = Object.keys(state.movieVideos).length
    var random = Math.floor(Math.random() * size)
    if (size === 0) {
      return null
    } else {
      return state.movieVideos[random].key
    }
  },

  popularMovies(state) {
    return state.popularMovies
  },

  movieSearch(state) {
    return state.movieSearch
  },

  movieSimilar(state) {
    return state.movieSimilar
  }
}

const mutations = {
  setMovies(state, movies) {
    state.movies = movies
  },

  setMovieDetails(state, payload) {
    state.movieDetails = payload
  },

  setMovieVideos(state, payload) {
    state.movieVideos = payload
  },

  setPopularMovies(state, payload) {
    state.popularMovies = payload
  },

  setMovieSearch(state, movieName) {
    state.movieSearch = movieName
  },

  setMovieSimilar(state, payload) {
    state.movieSimilar = payload
  }
}

const actions = {
  fetchMovies(context) {
    return service.fetchMovies().then((response) => {
      context.commit('setMovies', response.data.results)
    })
  },

  fetchMovieDetails(context, movieId) {
    return service.fetchMovieDetails(movieId).then((response) => {
      context.commit('setMovieDetails', response.data)
    })
  },

  fetchMovieVideos(context, movieId) {
    return service.fetchMovieVideos(movieId).then((response) => {
      context.commit('setMovieVideos', response.data.results)
    })
  },

  fetchPopularMovies(context) {
    return service.fetchPopularMovies().then((response) => {
      context.commit('setPopularMovies', response.data.results)
    })
  },

  fetchMovieSearch(context, movieName) {
    return service.fetchMovieSearch(movieName).then((response) => {
      context.commit('setMovieSearch', response.data.results)
    })
  },

  fetchMovieSimilar(context, movieId) {
    return service.fetchMovieSimilar(movieId).then((response) => {
      context.commit('setMovieSimilar', response.data.results)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
