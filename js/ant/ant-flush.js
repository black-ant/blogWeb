var antFlush = {
    flushHeader: function () {
        $(".commonHeader .container").css("width", "95%");
    },
    flushBefore: function () {
        document.getElementById("refush_page").innerText = "";
        antFlush.removeCss();
        antFlush.removeStyle();
    },
    removeCss: function () {
        var links = document.getElementsByTagName("link");
        for (var i = 0; i < links.length; i++) {
            links[i].parentNode.removeChild(links[i]);
        }
    },
    removeStyle: function () {
        var links = document.getElementsByTagName("style");
        for (var i = 0; i < links.length; i++) {
            links[i].parentNode.removeChild(links[i]);
        }
    }
}


export {
    antFlush
}
