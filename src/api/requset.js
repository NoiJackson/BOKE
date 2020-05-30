import axios from 'axios'

export function request(config) {
  //创建axios的实例
  const instance = axios.create({
    baseURL: 'http://localhost:8082/',
    timeout: 15000
  })

  //发送真正的网络请求
  return instance(config)
}
