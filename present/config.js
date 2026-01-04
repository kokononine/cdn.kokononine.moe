(function () {
    var feedType = "json";
    var feedPath = "//kokononine.moe/feed.php";
    var bgArr = [
        {
            "url": "//cdn.kokononine.moe/pictures/background_light.jpg",
            "thumb": ""
        }, {
            "url": "//cdn.kokononine.moe/pictures/background_black.jpg",
            "thumb": ""
        }/*, {
            "url": "static/img/background-1.jpg",
            "thumb": "static/img/background-1-thumb.jpg"
        }, {
            "url": "static/img/background-2.jpg",
            "thumb": "static/img/background-2-thumb.jpg"
        }*/];
    var senArr = [
        {
            ch: ["for (;;) { kawaii++ && moe++; }"],
            py: ["for (;;) { kawaii++ && moe++; }"],
        }, {
            ch: ["三倍", "あいす", "くりいいいい", "いいいいいむ", "～"],
            py: ["san'pai", "a'i'su", "ku'ri'i'i'i'i", "i'i'i'i'i'mu", "～"],
        }, {
            ch: ["かわいい", " ", "最高", "～"],
            py: ["ka'wa'i'i", " ", "sai'ko", "～"],
        }, {
            ch: ["世界", "で", "一番", "かわいい", " kokononine ", "ちゃん", "～"],
            py: ["se'kai", "de", "ichi'ban", "ka'wa'i'i", " kokononine ", "cha'n", "～"],
        }, {
            ch: ["メンヘラ", " kokononine ", "ちゃん", "～"],
            py: ["me'n'he'ra", " kokononine ", "cha'n", "～"],
        }, {
            ch: ["ウツデレ", " kokononine ", "ちゃん", "～"],
            py: ["u'tsu'de're", " kokononine ", "cha'n", "～"],
        }, {
            ch: ["vanitas vanitatum et omnia vanitas～"],
            py: ["vanitas vanitatum et omnia vanitas～"],
        }/*, {
            ch: ["This is an example."],
            py: ["This is an example."],
        }, {
            ch: ["这是", "一个", "示例", "."],
            py: ["zhe'shi", "yi'ge", "shi'li", "."],
        }*/];

    Init(feedType, feedPath, bgArr, senArr);
})();
