// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '╭(°A°`)╮ 404 NO FOUND ~';
        clearTimeout(titleTime);
    }
    else {
        document.title = '欢迎回来 ᕕ(◠ڼ◠)ᕗ ' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
