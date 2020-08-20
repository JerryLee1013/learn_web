/*
    node1:拖拽元素
    flag:是否限制范围
    value: 吸附程度
    node2:碰撞元素
*/
(function (w) {
    window.lfx = {};
    lfx.drag = function (node1, flag, value, node2) {
        var xifu = 0;
        var limit = true;
        //抽象元素一开始的位置
        var startPoint = {
            x: 0,
            y: 0,
        };

        //鼠标一开始的位置
        var elementPoint = {
            x: 0,
            y: 0,
        };
        node1.onmousedown = function (ev) {
            ev = ev || event;
            if (node1.setCapture) {
                node1.setCapture();
            }

            startPoint.x = node1.offsetLeft;
            startPoint.y = node1.offsetTop;

            elementPoint.x = ev.clientX;
            elementPoint.y = ev.clientY;

            document.onmousemove = function (ev) {
                ev = ev || event;
                var nowPoint = {
                    x: 0,
                    y: 0,
                };
                nowPoint.x = ev.clientX;
                nowPoint.y = ev.clientY;

                var L = startPoint.x + (nowPoint.x - elementPoint.x);
                var T = startPoint.y + (nowPoint.y - elementPoint.y);

                limit = flag === false ? false : true;

                if (limit) {
                    if (value) {
                        xifu = value;
                    }

                    // 限制范围 磁性吸附
                    if (L < xifu) {
                        L = 0;
                    }
                    if (
                        L >=
                        document.documentElement.clientWidth -
                            node1.offsetWidth -
                            xifu
                    ) {
                        L =
                            document.documentElement.clientWidth -
                            node1.offsetWidth;
                    }

                    if (T < xifu) {
                        T = 0;
                    } else if (
                        T >=
                        document.documentElement.clientHeight -
                            node1.offsetHeight -
                            xifu
                    ) {
                        T =
                            document.documentElement.clientHeight -
                            node1.offsetHeight;
                    }
                }

                node1.style.left = L + "px";
                node1.style.top = T + "px";

                //碰撞检测
                var T1 = node1.offsetTop;
                var B1 = node1.offsetTop + node1.offsetHeight;
                var R1 = node1.offsetLeft + node1.offsetWidth;
                var L1 = node1.offsetLeft;

                if (node2) {
                    var T2 = node2.offsetTop;
                    var B2 = node2.offsetTop + node2.offsetHeight;
                    var R2 = node2.offsetLeft + node2.offsetWidth;
                    var L2 = node2.offsetLeft;
                    if (R1 < L2 || B1 < T2 || L1 > R2 || T1 > B2) {
                        node2.src = "../img/飞鸟.jfif";
                    } else {
                        node2.src = "../img/314301.jpg";
                    }
                }
            };

            document.onmouseup = function () {
                document.onmousemove = document.onmouseup = null;
                if (document.releaseCapture) {
                    document.realeaseCapture();
                }
            };

            return false;
        };
    };
})(window);
