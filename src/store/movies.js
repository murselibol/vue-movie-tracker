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
  async fetchMovies(context) {
    try {
      const response = await service.fetchMovies()
      context.commit('setMovies', response.data.results)
    } catch (err) {
      console.log(err)
    }
  },

  async fetchPopularMovies(context) {
    try {
      const response = await service.fetchPopularMovies()
      context.commit('setPopularMovies', response.data.results)
    } catch (err) {
      console.log(err)
    }
  },

  async fetchMoviesGenre(context, movieGenreId) {
    try {
      const response = await service.fetchMoviesGenre(movieGenreId)
      context.commit('setMoviesGenre', response.data.results)
    } catch (err) {
      console.log(err)
    }
  },

  async fetchMovieSearch(context, movieName) {
    try {
      const response = await service.fetchMovieSearch(movieName)
      context.commit('setMovieSearch', response.data.results)
    } catch (err) {
      console.log(err)
    }
  },

  async fetchMovieDetails(context, movieId) {
    try {
      const response = await service.fetchMovieDetails(movieId)
      context.commit('setMovieDetails', response.data)
    } catch (err) {
      console.log(err)
    }
  },

  async fetchMovieSimilar(context, movieId) {
    try {
      const response = await service.fetchMovieSimilar(movieId)
      context.commit('setMovieSimilar', response.data.results)
    } catch (err) {
      console.log(err)
    }
  },

  async fetchMovieVideos(context, movieId) {
    try {
      const response = await service.fetchMovieVideos(movieId)
      context.commit('setMovieVideos', response.data.results)
    } catch (err) {
      console.log(err)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
