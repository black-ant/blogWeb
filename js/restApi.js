var restAddress = {
    rootAddress: "http://127.0.0.1:8086/blog",
    doclist: "/docs/",
}

var restApi = {
    getDocList: function (page, fun) {
        antRequest.get(restAddress.doclist + page).then(res => {
            console.log(res);
            fun(res);
        })
    }
}

// 创建 axios 实例
const antRequest = axios.create({
    timeout: 6000,
    baseURL: restAddress.rootAddress,
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
antRequest.interceptors.request.use(config => {
    return config
}, err)


// response interceptor（接收拦截器）
antRequest.interceptors.response.use((response) => {
    const res = response.data;
    return res.code == "200" ? res.data : res;
}, err)
