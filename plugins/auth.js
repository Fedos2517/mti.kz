/* eslint-disable */

export default function({ $axios, store, redirect, $cookies, app }) {
  if(app.$cookies.get('token') && app.$cookies.get('user')) {
    store.commit('auth/setToken', app.$cookies.get('token'))
    store.commit('auth/setUser', app.$cookies.get('user'))
  }

  $axios.onRequest(request => {
    const token = app.$cookies.get('token') || null

    if (
      token != undefined &&
      token != 'false' &&
      token != 'null' &&
      token != null
    ) {
      request.headers.common['Authorization'] = 'JWT ' + token
    }
    return request
  })
}
