import service from './services/service'

const state = {
  movies: [],
  movieDetails: []
}

const getters = {
  movies(state) {
    return state.movies
  },
  movie(state) {
    return state.movieDetails
  }
}

const mutations = {
  setMovies(state, movies) {
    state.movies = movies
  },
  setMovieDetails(state, payload) {
    state.movieDetails = payload
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
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
