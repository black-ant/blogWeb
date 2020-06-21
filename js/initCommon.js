var antInit = {
    init: function (page) {
        antInit.initJs();
        antInit.initCss();
        $(".headerPage").load("component/headerCommon.html");
        setTimeout(function () {
            var pageNum = page == null ? "header_index" : page;
            $("." + pageNum + " a").addClass("active");
        }, 300);
    },
    initCss: function () {

    },
    initJs: function () {

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

