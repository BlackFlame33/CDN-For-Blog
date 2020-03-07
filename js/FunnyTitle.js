//浏览器搞笑标题
var OriginTitle =
    document.title;
var titleTime;
document.addEventListener(
    'visibilitychange',
    function() {
        if (
            document.hidden
        ) {
            $(
                '[rel="icon"]'
            ).attr(
                'href',
                '/img/trhx2.png'
            );
            document.title =
                'ヽ(●-`Д´-)ノ怎么不看人家了！';
            clearTimeout(
                titleTime
            );
        } else {
            $(
                '[rel="icon"]'
            ).attr(
                'href',
                '/img/trhx2.png'
            );
            document.title =
                'ヾ(Ő∀Ő3)ノ还是你最在乎我！' +
                OriginTitle;
            titleTime = setTimeout(
                function() {
                    document.title = OriginTitle;
                },
                2000
            );
        }
    }
);
