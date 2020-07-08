export const state = () => ({
  specialTopDetail: {
    id: '',
    description_full: '',
    documents: [],
    tags: [
      {
        id: '',
        name: ''
      }
    ],

  },

  requestId: '',

  specialProjects: {
    additional_data: '',
    page: '',
    results: [
      {
        id: '',
        is_detailed: '',
        is_favorite: '',
        is_top: '',
        name: '',
        photo: '',
        price_from_full: '',
        rating: '',
        user: ''
      }
    ],
    total_pages: ''
  },

  specialReviews: {
    // additional_data: {
    //   total_found: ''
    // },
    //
    // total_found: '',
    // page: '',
    // results: [
    //   {
    //     creation_date: '',
    //     id: '',
    //     is_liked: '',
    //     likes_count: '',
    //     photos: [],
    //     rating: '',
    //     reply: {},
    //     text: '',
    //     user: {
    //       avatar: ''
    //     }
    //   }
    // ],
    // total_pages: ''
  },

  specialOverview: {},

  requests: {}

})

export const getters = {}

export const mutations = {
  setSpecialTopDetail(state, payload) {
    state.specialTopDetail = payload
  },

  setSpecialProjects(state, payload) {
    state.specialProjects = payload
  },

  setSpecialReviews(state, payload) {
    state.specialReviews = payload
  },

  setSpecialOverview(state, payload) {
    state.specialOverview = payload
  },

  setRequests(state, payload) {
    state.requests = payload
  },

  setRequestId(state, payload) {
    state.requestId = payload
  }
}

export const actions = {
  getSpecialTopDetail({ commit }, id) {
    this.$axios.get(`/users/${id}/top_details/`)
      .then((res) => {
        commit('setSpecialTopDetail', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  getSpecialProjects({ commit }, id) {
    this.$axios.get(`/users/${id}/projects/`)
      .then((res) => {
        commit('setSpecialProjects', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  getSpecialReviews({ commit }, id) {
    this.$axios.get(`/users/${id}/reviews/`)
      .then((res) => {
        console.log(res)
        commit('setSpecialReviews', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  getSpecialOverview({ commit }, id) {
    this.$axios.get(`/users/${id}/details/`)
      .then((res) => {
        commit('setSpecialOverview', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  getRequests({ commit }, payload) {
    this.$axios.get(`/profiles/applications/?status=${payload.status}&page=1`)
      .then((res) => {
        console.log(res)
        commit('setRequests', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  acceptRequest({ commit }, id) {
    return new Promise(((resolve, reject) => {
      this.$axios.post(`/profiles/applications/${id}/accept/`)
        .then(res => {
          resolve(res)
          commit('setRequestId', id)
        })
        .catch(err => {
          reject(err)
          console.log(err)
        })
    }))

  }
}
