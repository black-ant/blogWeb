import axios from 'axios'


var rootAddress = "/proxyApi";
var restApi = {
  doclist: "/blog/",
  getDocList: function (page, fun) {
    requests.get(this.doclist + page).then(res => {
      console.log(res);
      fun(res);
    })
  }
}

// 创建 axios 实例
const requests = axios.create({
  timeout: 6000,
  baseURL: rootAddress,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  withCredentials: true,  // 是否携带cookie信息
})

// 错误处理函数
const err = (error) => {
  if (error.response) {
    const data = error.response.data
    console.log(data);
  }
  return Promise.reject(error)
}


// request interceptor(请求拦截器)
requests.interceptors.request.use(config => {
  return config
}, err)


// response interceptor（接收拦截器）
requests.interceptors.response.use((response) => {
  const res = response.data;
  return res.code == "200" ? res.data : res;
}, err)


export {
  restApi, rootAddress
}
