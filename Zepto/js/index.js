$(function () {
    // 初始化数据
    var direction = {
        up: 1,
        right: 2,
        down: 3,
        left: 4,
    };
    // 初始化两个坐标
    var now = { col: 1, row: 1 };
    var last = { col: 0, row: 0 };
    //初始化变量表示页面不在滑动
    var isMoving = false;
    // 向上滑动
    $("#container").swipeUp(function () {
        // 判断动画是否在执行
        if (isMoving) {
            return;
        }
        last.col = now.col;
        last.row = now.row;

        if (last.col < 5) {
            now.col = last.col + 1;
            now.row = last.row;
            movePage(direction.up);
        }
    });
    // 向下滑动
    $("#container").swipeDown(function () {
        // 判断动画是否在执行
        if (isMoving) {
            return;
        }
        last.col = now.col;
        last.row = now.row;

        if (last.col > 1) {
            now.col = last.col - 1;
            now.row = last.row;
            movePage(direction.down);
        }
    });
    // 向左滑动
    $("#container").swipeLeft(function () {
        // 判断动画是否在执行
        if (isMoving) {
            return;
        }
        last.col = now.col;
        last.row = now.row;

        if (last.col > 1 && last.col < 5 && last.row == 1) {
            now.col = last.col;
            now.row = last.row + 1;
            movePage(direction.left);
        }
    });
    // 向右滑动
    $("#container").swipeRight(function () {
        // 判断动画是否在执行
        if (isMoving) {
            return;
        }
        last.col = now.col;
        last.row = now.row;

        if (last.col > 1 && last.col < 5 && last.row == 2) {
            now.col = last.col;
            now.row = last.row - 1;
            movePage(direction.right);
        }
    });
    //定义滑动的功能函数
    function movePage(dir) {
        // 初始化两个动画类
        var inClass = ""; //进厂动画类
        var outClass = ""; //出场动画类

        // 初始化参与动画的页面
        var lastPage = ".page-" + last.col + "-" + last.row;
        var nowPage = ".page-" + now.col + "-" + now.row;

        // 匹配方向
        switch (dir) {
            case direction.up:
                outClass = "pt-page-moveToTop";
                inClass = "pt-page-moveFromBottom";
                break;
            case direction.right:
                outClass = "pt-page-moveToRight";
                inClass = "pt-page-moveFromLeft";
                break;
            case direction.down:
                outClass = "pt-page-moveToBottom";
                inClass = "pt-page-moveFromTop";
                break;
            case direction.left:
                outClass = "pt-page-moveToLeft";
                inClass = "pt-page-moveFromRight";
                break;
        }
        // 将动画类加到参与动画的页面上
        $(lastPage).find("img").addClass("hide");
        $(lastPage).addClass(outClass);
        $(nowPage).removeClass("hide");
        $(nowPage).addClass(inClass);
        isMoving = true;

        // 动画执行完，清除动画类
        setTimeout(function () {
            $(lastPage).removeClass(outClass);
            $(lastPage).addClass("hide");
            $(lastPage).removeClass("page-current");

            $(nowPage).find("img").removeClass("hide");
            $(nowPage).removeClass(inClass);
            $(nowPage).addClass("page-current");
            isMoving = false;
        }, 600);
    }
});
