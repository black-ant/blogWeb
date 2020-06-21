var antUtils = {
    cacheSet: function (name, value, option) {
        // if (option != null) {
        //     storegeditOption(option);
        // }
        window.localStorage.setItem(name, JSON.stringify(value));
    },
    cacheGet: function (name) {
        try {
            if (isnotnull(name)) {
                return JSON.parse(window.localStorage.getItem(name))
            }
        } catch (err) {
            console.log("cache parse json error");
        }
        return {};
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
        let code = value.split(/[(\r\n)\r\n]+/); // 根据换行或者回车进行识别
        code.forEach((item, index) => { // 删除空项
            if (!item) {
                code.splice(index, 1);
            }
        })
        return code;
    }
}

function isnotnull(data) {
    if ("" == data || "undefined" == data || "null" == data || null == data || typeof data == "undefined") {
        return false;
    }
    return true;
}
