export const state = () => ({
  search: {
    additional_data: {
      projects_count: '',
      blog_count: '',
      total_found: ''
    },

    page: '',
    total_pages: '',

    results: ''
  }
})

export const getters = {}

export const mutations = {
  setSearch(state, payload) {
    state.search = payload
  }
}

export const actions = {
  search({ commit }, payload) {

    return new Promise(((resolve, reject) => {
      this.$axios.get(`/main/search/merchants/?page=${payload.page}&search=${payload.value}`)
        .then((res) => {
          commit('setSearch', res.data)

          console.log(res)
          resolve(res)
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    }))


  }
}
