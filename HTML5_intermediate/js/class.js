// 定义一个函数向元素中添加指定的class属性值;
/*
            参数：
                obj：要添加class属性的元素
                cn：要添加的class值
         */
function addClass(obj, cn) {
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;
    }
}

/*
                判断一个元素是否有该类
             */
function hasClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b");
    // alert(reg);
    return reg.test(obj.className);
}
// 删除元素中一个正则表达式
function removeClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b");

    obj.className = obj.className.replace(reg, "");
}

// 如果元素中有该类就删除；没有该类就添加
function toggleClass(obj, cn) {
    if (hasClass(obj, cn)) {
        removeClass(obj, cn);
    } else {
        addClass(obj, cn);
    }
}

function changeTime(time) {
    time = parseInt(time);
    var h, m, s;
    h = Math.floor(time / 3600);

    m = Math.floor((time % 3600) / 60);
    s = Math.floor((time % 3600) % 60);
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    return h + ":" + m + ":" + s;
}
