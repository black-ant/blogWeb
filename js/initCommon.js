var antInit = {
    init: function (page) {
        $(".headerPage").load("component/headerCommon.html");
        antInit.initJs();
        antInit.initCss();
        setTimeout(function () {
            var pageNum = page == null ? "header_index" : page;
            $("." + pageNum + " a").addClass("active");
        }, 300);
    },
    initCss: function () {

    },
    initJs: function () {
        antInit.buildScript("./js/axios.min.js");
        antInit.buildScript("./js/ant/ant-utils.js");
        antInit.buildScript("./js/restApi.js");
    },
    buildScript: function (url, time) {
        if (null == time) {
            var localJs = document.createElement("script");
            localJs.setAttribute("src", url);
            document.head.appendChild(localJs);
        } else {
            setTimeout(function () {
                var localCss = document.createElement("script");
                localCss.setAttribute("src", url);
                document.head.appendChild(localJs);
            }, time);
        }

    },
    buildCss: function (url) {
        var localCss = document.createElement("link");
        localCss.setAttribute("rel", "stylesheet");
        localCss.setAttribute("href", url);
        document.head.appendChild(localCss);
    }
}
