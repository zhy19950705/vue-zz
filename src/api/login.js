import request from '@/utils/request'
import fetch from '@/utils/fetch'

export function loginByUsername(username, password) {
  return fetch({
    url: '/login/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
