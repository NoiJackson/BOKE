
import {request} from './requset' //引入封装好的 axios 请求

export function login(username, password) { //登录接口
  return request({ //使用封装好的 axios 进行网络请求
    url: '/home',
    method: 'post',
    data: { //提交的数据
      username,
      password
    }
  })
}
