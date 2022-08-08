import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:7001/api'
axios.defaults.withCredentials = true
// 添加请求拦截器
axios.interceptors.request.use(
  function (config: any) {
    const token = window.localStorage.getItem('token')
    token && (config.headers['Authorization'] = 'Bearer ' + token)
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    const { data } = response
    if (data.code === 403) {
      window.localStorage.removeItem('token')
    }

    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
  },
  function (error) {
    console.log(error)

    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default axios
