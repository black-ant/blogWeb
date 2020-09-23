var timeOut;
var colorArray = ["#CDCD9A", "#A3D1D1", "#C7C7E2", "#D2A2CC", "#D2A2CC", "#E1E100", "#E1E100", "#ACD6FF", "#FFB5B5", "#E0E0E0", "#FFCBB3"];

class Item {
    constructor(icon, content, backgroundColor, location) {
        this.$element = $(document.createElement("div"));
        this.icon = icon;
        this.$element.addClass("item");
        this.$element.css("background-color", backgroundColor);
        var i = document.createElement("i");
        $(i).addClass("fi-" + icon);
        this.$element.append(i);
        if (content != null) {
            var docmenu_item = document.createElement("div");
            $(docmenu_item).attr("mlocation", location);
            $(docmenu_item).addClass("docmenu_item");
            $(docmenu_item).html(content);
            this.$element.append(docmenu_item);
        }
        this.prev = null;
        this.next = null;
        this.isMoving = false;
        var element = this;
        this.$element.on("mousemove", function () {
            clearTimeout(timeOut);
            timeOut = setTimeout(function () {
                if (element.next && element.isMoving) {
                    element.next.moveTo(element);
                }
            }, 10);
        });
    }

    moveTo(item) {
        anime({targets: this.$element[0], left: item.$element.css("left"), top: item.$element.css("top"), duration: 700, elasticity: 500});
        if (this.next) {
            this.next.moveTo(item);
        }
    }

    updatePosition() {
        anime({targets: this.$element[0], left: this.prev.$element.css("left"), top: this.prev.$element.css("top"), duration: 200});
        if (this.next) {
            this.next.updatePosition();
        }
    }
}

class Menu {
    constructor(menu) {
        this.$element = $(menu);
        this.size = 0;
        this.first = null;
        this.last = null;
        this.timeOut = null;
        this.hasMoved = false;
        this.status = "closed";
    }

    add(item) {
        var menu = this;
        if (this.first == null) {
            this.first = item;
            this.last = item;
            this.first.$element.on("mouseup", function () {
                if (menu.first.isMoving) {
                    menu.first.isMoving = false;
                } else {
                    menu.click();
                }
            });
            item.$element.draggable({
                start: function () {
                    menu.close();
                    item.isMoving = true;
                }
            }, {
                drag: function () {
                    if (item.next) {
                        item.next.updatePosition();
                    }
                }
            }, {
                stop: function () {
                    item.isMoving = false;
                    item.next.moveTo(item);
                }
            });
        } else {
            this.last.next = item;
            item.prev = this.last;
            this.last = item;
        }
        this.$element.after(item.$element);
    }

    open() {
        this.status = "open";
        $(".doc-menu-container").removeClass("menu_hidden");
        var current = this.first.next;
        var iterator = 1;
        var head = this.first;
        var sens = head.$element.css("top") < head.$element.css("bottom") ? 1 : -1;
        while (current != null) {
            anime({
                targets: current.$element[0],
                left: head.$element.css("left"),
                top: parseInt(head.$element.css("top"), 10) + (sens * (iterator * 50)),
                duration: 500
            });
            iterator++;
            current = current.next;
        }
    }

    close() {
        this.status = "closed";
        $(".doc-menu-container").addClass("menu_hidden");
        var current = this.first.next;
        var head = this.first;
        var iterator = 1;
        while (current != null) {
            anime({targets: current.$element[0], left: head.$element.css("left"), top: head.$element.css("top"), duration: 500});
            iterator++;
            current = current.next;
        }
    }

    click() {
        if (this.status == "closed") {
            this.open();
        } else {
            this.close();
        }
    }
}

