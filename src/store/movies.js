import service from './services/service'

const state = {
  movies: []
}

const getters = {
  movies(state) {
    return state.movies
  }
}

const mutations = {
  setMovies(state, movies) {
    state.movies = movies
  }
}

const actions = {
  fetchMovies(context) {
    return service.fetchMovies().then((response) => {
      context.commit('setMovies', response.data.results)
      console.log(response.data.results)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
