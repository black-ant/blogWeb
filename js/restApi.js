var restAddress = {
    rootAddress: "http://127.0.0.1:8086/blog",
    doclist: "/docs/",
    view: "/view/",
    project: "/project",
    viewList: "/views",
    collectionList: "/collection/",
}

var restUtuls = {
    getQueryString: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        } else {
            return null;
        }
    },
    setQueryString: function (data) {
        var params = "";
        if (!isnull(data) && (typeof (data) == "object" && Object.keys(data).length > 0)) {
            params += "?";
            var num = 0;
            for (var x in data) {
                num++;
                params += x + "=" + data[x];
                if (num < Object.keys(data).length) {
                    params += "&";
                }
            }
        }
        return params; //返回参数值
    }
}

var restApi = {
    getDocList: function (page, fun) {
        antRequest.get(restAddress.doclist + page).then(res => {
            fun(res);
        })
    },
    getView: function (key, fun) {
        antRequest.get(restAddress.view + key).then(res => {
            fun(res);
        })
    },
    getProject: function (param, fun) {
        const paramStr = restUtuls.setQueryString(param);
        antRequest.get(restAddress.project + paramStr).then(res => {
            fun(res);
        })
    },
    getCollectionList: function (page, fun) {
        antRequest.get(restAddress.collectionList + page).then(res => {
            fun(res);
        })
    },
    getViewList: function (param, fun) {
        const paramStr = restUtuls.setQueryString(param);
        antRequest.get(restAddress.viewList + paramStr).then(res => {
            fun(res.data, res.info.menu);
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
    return res.code == "200" ? res : res;
}, err)
