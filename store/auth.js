import VueJwtDecode from 'vue-jwt-decode'

export const state = () => ({
  token: '',
  user: {
    username: '',
    first_name: '',
    last_name: '',
    date_of_birth: '',
    role: '',
    email: '',
    password: ''
  },

  role: '',
  email: '',
  cities: '',
  tags: '',
  categories: '',
  speacializations: '',
  phone: '',
  verifyPhone: ''
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },

  setUserKey(state, payload) {
    state.user[payload.key] = payload.value
  },

  setToken(state, payload) {
    state.token = payload
  },

  setCities(state, payload) {
    state.cities = payload
  },

  setTagSearcher(state, payload) {
    state.tags = payload
  },

  setCategories(state, payload) {
    state.categories = payload
  },

  setSpecializations(state, payload) {
    state.speacializations = payload
  },

  setPhone(state, payload) {
    state.phone = payload
  },

  setVerifyPhone(state, payload) {
    state.verifyPhone = payload
  },

  setRole(state, payload) {
    state.role = payload
  },

  setEmail(state, payload) {
    state.email = payload
  }
}

export const actions = {

  socialLogin({ commit }) {
    return new Promise(((resolve, reject) => {
      let tokens = {
          facebook: this.$cookies.get('auth.token.facebook'),
          google: this.$cookies.get('auth.token.google'),
          vk: this.$cookies.get('auth.token.vk')
        },
        authStrategy = this.$cookies.get('auth.strategy')

      if (tokens.google)
        tokens.google = tokens.google.substring(7)

      let data = {
        social_type: authStrategy,
        access_token: tokens[authStrategy],
        role: 1
      }

      this.$axios.post('/users/social_login/', data)
        .then((res) => {

          if(!res.data.register) {
            let user = VueJwtDecode.decode(res.data.token)

            this.$cookies.set('user', user)
            this.$cookies.set('token', res.data.token)

            commit('setToken', res.data.token)
            commit('setUser', user)

            console.log(user)
          }

          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    }))
  },

  registerClient({ commit }, payload) {
    return new Promise(((resolve, reject) => {
      let user = new FormData()
      user.append('first_name', payload.first_name)
      user.append('last_name', payload.last_name)
      user.append('date_of_birth', payload.date_of_birth)
      user.append('role', payload.role)
      user.append('email', payload.email)
      user.append('password', payload.password)

      this.$axios.post('/users/', user)
        .then((res) => {
          let user = VueJwtDecode.decode(res.data.token)

          this.$cookies.set('user', user)
          this.$cookies.set('token', res.data.token)

          commit('setToken', res.data.token)
          commit('setUser', user)

          resolve()
        })
        .catch((err) => {
          console.log(err)
          reject(err.response.data)
        })
    }))
  },

  registerSpecialist({commit}, payload) {
    return new Promise(((resolve, reject) => {
      let user = new FormData(),
        arrayPhone = []

      for (var i = 0; i < payload.tags.length; i++) {
        user.append('tags', payload.tags[i]);
      }

      for (var i = 0; i < payload.specializations.length; i++) {
        user.append('specializations', payload.specializations[i]);
      }

      for (var i = 0; i < payload.categories.length; i++) {
        user.append('categories', payload.categories[i]);
      }

      for (var i = 0; i < payload.documents.length; i++) {
        user.append('documents', payload.documents[i]);
      }



      arrayPhone.push(payload.phones)

      console.log(arrayPhone)

      user.append('first_name', payload.first_name)
      user.append('last_name', payload.last_name)
      user.append('company_name', payload.company_name)
      user.append('address', payload.address)
      user.append('phones', arrayPhone)
      user.append('city', payload.city)
      // user.append('specializations', payload.specializations)
      // user.append('categories', payload.categories)
      // user.append('tags', JSON.stringify(new Blob([1, 2, 3])))
      user.append('description_short', payload.description_short)
      user.append('description_full', payload.description_full)
      user.append('url', payload.url)
      user.append('documents_description', payload.documents_description)
      // user.append('documents', payload.documents)
      user.append('role', payload.role)
      user.append('email', payload.email)
      user.append('password', payload.password)

      this.$axios.post('/users/', user)
        .then((res) => {

          let user = VueJwtDecode.decode(res.data.token)

          this.$cookies.set('user', user)
          this.$cookies.set('token', res.data.token)

          commit('setToken', res.data.token)
          commit('setUser', user)

          resolve()
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    }))
  },

  sendEmail({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.post('/users/send_activation_email/',
        {
          email: payload,
          role: state.role
        }
      )
        .then((res) => {
          commit('setEmail', payload)
          resolve(res.data)
          this.$cookies.set('email', payload)
        })
        .catch((err) => {
          reject(err.response.data)
        })
    })
  },

  login({ commit, state }, payload) {
    return new Promise(((resolve, reject) => {
      this.$axios.post('/users/login_regular/', payload)
        .then((res) => {
          let user = VueJwtDecode.decode(res.data.token)

          this.$cookies.set('user', user)
          this.$cookies.set('token', res.data.token)

          commit('setToken', res.data.token)
          commit('setUser', user)

          resolve()
        })
        .catch((err) => {
          console.log(err)
          reject(err.response.data)
        })
    }))
  },

  getCities({commit}) {
    this.$axios.get('/main/cities/')
      .then((res) => {
        commit('setCities', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  tagSearcher({ commit }, payload) {
    this.$axios.post(`/main/project_tags/search/?search=${payload}`)
      .then((res) => {
        commit('setTagSearcher', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  getCategories({ commit }) {
    this.$axios.get('/main/categories/')
      .then((res) => {
        console.log(res.data)
        commit('setCategories', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  getSpecializations({ commit }) {
    this.$axios.get('/main/specializations/')
      .then((res) => {
        commit('setSpecializations', res.data)
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  verifyPhone({ commit }, number) {

    return new Promise(((resolve, reject) => {
      let phone = {
        phone: {
          phone: number
        }
      }
      this.$axios.post('/users/verify_phone/', phone )
        .then((res) => {
          commit('setPhone', phone.phone.phone)
          resolve()
        })
        .catch((err) => {
          console.log(err)
        })
    }))
  },

  verifyCode({commit, state}, payload) {
    return new Promise(((resolve, reject) => {

      let data = {
        code: payload,
        phone: {
          phone: state.phone
        }
      }

      this.$axios.post('/users/send_code/', data)
        .then((res) => {
          commit('setVerifyPhone', res.data.phone)
          resolve()
        })
        .catch((err) => {
          console.log(err)
        })
    }))
  }
}
