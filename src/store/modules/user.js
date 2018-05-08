import { loginByUsername, getUserInfo } from '@/api/login'
import { getToken, setToken } from '@/utils/auth'
const user = {
  state: {
    user: '',
    status: '',
    token: getToken(),
    roles: []
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          const data = response.data
          commit('SET_TOKEN', data.token)
          setToken(response.data.token)
          resolve()
        }).catch(e => {
          reject(e)
        })
      })
    },
    getUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => {
          if (!response.data) {
            reject('error')
          }
          debugger
          const data = response.data
        })
      })
    }
  }
}

export default user
