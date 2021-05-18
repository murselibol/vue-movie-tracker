import service from './services/service'

const state = {
  movies: [],
  popularMovies: [],
  moviesGenre: [],
  movieSearch: [],
  movieDetails: [],
  movieVideos: [],
  movieSimilar: []
}

const getters = {
  movies(state) {
    return state.movies
  },

  popularMovies(state) {
    return state.popularMovies
  },

  moviesGenre(state) {
    return state.moviesGenre
  },

  movieSearch(state) {
    return state.movieSearch
  },

  movie(state) {
    return state.movieDetails
  },

  movieSimilar(state) {
    return state.movieSimilar
  },

  movieVideoKey(state) {
    var size = Object.keys(state.movieVideos).length
    var random = Math.floor(Math.random() * size)
    if (size === 0) {
      return null
    } else {
      return state.movieVideos[random].key
    }
  }
}

const mutations = {
  setMovies(state, movies) {
    state.movies = movies
  },

  setPopularMovies(state, payload) {
    state.popularMovies = payload
  },

  setMoviesGenre(state, payload) {
    state.moviesGenre = payload
  },

  setMovieSearch(state, movieName) {
    state.movieSearch = movieName
  },

  setMovieDetails(state, payload) {
    state.movieDetails = payload
  },

  setMovieSimilar(state, payload) {
    state.movieSimilar = payload
  },

  setMovieVideos(state, payload) {
    state.movieVideos = payload
  }
}

const actions = {
  fetchMovies(context) {
    return service.fetchMovies().then((response) => {
      context.commit('setMovies', response.data.results)
    })
  },

  fetchPopularMovies(context) {
    return service.fetchPopularMovies().then((response) => {
      context.commit('setPopularMovies', response.data.results)
    })
  },

  fetchMoviesGenre(context, movieGenreId) {
    return service.fetchMoviesGenre(movieGenreId).then((response) => {
      context.commit('setMoviesGenre', response.data.results)
    })
  },

  fetchMovieSearch(context, movieName) {
    return service.fetchMovieSearch(movieName).then((response) => {
      context.commit('setMovieSearch', response.data.results)
    })
  },

  fetchMovieDetails(context, movieId) {
    return service.fetchMovieDetails(movieId).then((response) => {
      context.commit('setMovieDetails', response.data)
    })
  },

  fetchMovieSimilar(context, movieId) {
    return service.fetchMovieSimilar(movieId).then((response) => {
      context.commit('setMovieSimilar', response.data.results)
    })
  },

  fetchMovieVideos(context, movieId) {
    return service.fetchMovieVideos(movieId).then((response) => {
      context.commit('setMovieVideos', response.data.results)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
