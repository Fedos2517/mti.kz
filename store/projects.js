export const state = () => ({
  projectList: '',
  projectDetail: ''
})

export const getters = {
  topProjects: (state) => {
    if (state.projectList) {
      return state.projectList.additional_data.top_projects
    }
  },

  totalProjects: (state) => {
    if (state.projectList) {
      return state.projectList.additional_data.total_found
    }
  },

  allProjects: (state) => {
    if (state.projectList) {
      return state.projectList.results
    }
  }

}

export const mutations = {
  setProjectList(state, payload) {
    state.projectList = payload
  },

  setProjectDetail(state, payload) {
    state.projectDetail = payload
  }
}

export const actions = {
  getProjectList({ commit }) {
    this.$axios.get('/main/projects/')
      .then((res) => {
        commit('setProjectList', res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  getProjectDetail({ commit }, id) {
    this.$axios.get(`/main/projects/${id}/`)
      .then((res) => {
        commit('setProjectDetail', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  sendSubmit({ commit }, payload) {
    return new Promise(((resolve, reject) => {
      let form = new FormData()

      form.append('category', payload.category)
      form.append('comment', payload.comment)

      this.$axios.post(`/main/projects/${payload.id}/submit/`, form)
        .then((res) => {
          console.log(res)
          resolve(res)
        })
        .catch((err) => {
          console.log(err)
          reject(err.response.data)
        })
    }))
  }
}
