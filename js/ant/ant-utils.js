var antUtils = {
    cacheSet: function (name, value, option) {
        // if (option != null) {
        //     storegeditOption(option);
        // }
        window.localStorage.setItem(name, JSON.stringify(value));
    },
    cacheGet: function (name) {
        try {
            if (!isnull(name)) {
                return JSON.parse(window.localStorage.getItem(name))
            }
        } catch (err) {
            console.log("cache parse json error");
        }
        return {};
    },
    pageGet: function (name) {
        var cache = antUtils.cacheGet(name);
        return null == cache || null == cache.page ? 0 : cache.page;
    },
    pageSet: function (name, page) {
        var search = isnull(antUtils.cacheGet(name)) ? {} : antUtils.cacheGet(name);
        search.page = null == page ? 0 : page;
        antUtils.cacheSet(name, search);
    },
    GetDateBefore: function (AddDayCount) {
        var dd = new Date();
        dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
        var year = dd.getFullYear();
        var month = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
        var day = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
        return year + "-" + month + "-" + day;
    },
    mkExchangeArray: function (value) {
        let code = value.split(/[\r\n]+/); // 根据换行或者回车进行识别
        code.forEach((item, index) => { // 删除空项
            if (!item) {
                code.splice(index, 1);
            }
        })
        return code;
    }
}

function isnull(data) {
    if ("" == data || "undefined" == data || "null" == data || null == data || typeof data == "undefined") {
        return true;
    }
    return false;
}
