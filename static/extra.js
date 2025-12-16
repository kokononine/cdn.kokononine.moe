if ($("#banner_logo_kokononine").length === 0) {
    $("#banner_container > :first-child").prepend('<img src="//cdn.kokononine.moe/images/kokononine.svg" alt="kokononine" id="banner_logo_kokononine" style="width: 570px; height: 90px; display: block; margin-left: auto; margin-right: auto; max-width: 100%;">');
}

/*
if (document.querySelector(".my-notice") == null && window.sessionStorage.getItem("my-notice-dismissed") != "true") {
    $("body").append(`
<div class="my-notice">
    <div class="my-notice-inner">
        <div class="my-notice-line">
            You are visiting the kokononine's blog that is under development and being updated, This may cause some page content to display abnormally. ~
        </div>
        <div class="my-notice-line">
            您正在访问开发并修改中的kokononine's blog，这可能导致一部分页面内容显示异常～
        </div>
    </div>
    <div class="my-notice-dismiss">
        <div class="my-notice-dismiss-line">
            Dismiss
        </div>
        <div class="my-notice-dismiss-line">
            我知道了
        </div>
    </div>
</div>
<style>
.my-notice {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--color-border-on-foreground-deeper);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px 30px;
    justify-content: space-between;
    z-index: 2147483647;
    transition: transform .3s ease;
}
.my-notice-line {
    line-height: 1.8;
}
.my-notice-dismiss {
    background: var(--themecolor);
    border-radius: 8px;
    padding: 5px 15px;
    cursor: pointer;
    user-select: none;
    transition: transform .2s ease;
    text-align: center;
    color: #fcfcfc;
}
.my-notice-dismiss:hover {
    transform: scale(1.05);
}
@media (max-width: 500px) {
    .my-notice {
        flex-direction: column;
    }
    .my-notice-line {
        line-height: 1.6;
    }
    .my-notice-dismiss {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        gap: 0.5em;
    }
}
</style>
`);
}

$(document).on("click", ".my-notice-dismiss", function() {
    $(".my-notice").css("transform", "translateY(100%)");
    setTimeout(function() {
        $(".my-notice").remove();
    }, 300);
    window.sessionStorage.setItem("my-notice-dismissed", "true");
});
*/
