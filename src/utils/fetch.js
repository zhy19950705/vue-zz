import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 15000
})

console.log(process.env)

service.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(response => {
  const res = response.data
  return res
}, error => {
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})
export default service
