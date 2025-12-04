(function() {
    var MyImageLogo = document.createElement('img');
    MyImageLogo.src = '//cdn.kokononine.moe/images/kokononine.svg';
    MyImageLogo.alt = 'kokononine';
    MyImageLogo.style.width = '570px';
    MyImageLogo.style.height = '90px';
    MyImageLogo.style.display = 'block';
    MyImageLogo.style.marginLeft = 'auto';
    MyImageLogo.style.marginRight = 'auto';
    MyImageLogo.style.maxWidth = '100%';
    MyImageLogo.style.id = 'banner_logo_kokononine';

    const MyImageElement = document.getElementById('banner_container').children[0];

    if (MyImageElement && !document.getElementById('banner_logo_kokononine')) {
        if (MyImageElement.children.length > 0) {
            MyImageElement.insertBefore(MyImageLogo, MyImageElement.children[0]);
        } else {
            MyImageElement.appendChild(MyImageLogo);
        }
    }

    /* Static Notice */
    /*
    const staticNotice = `
    <div class="static-notice">
        <div class="static-notice-inner">
            <div class="static-notice-line">
                You are visiting the kokononine's blog that is under development and being updated, This may cause some page content to display abnormally. ~
            </div>
            <div class="static-notice-line">
                您正在访问开发并修改中的kokononine's blog，这可能导致一部分页面内容显示异常～
            </div>
        </div>
        <div class="static-notice-dismiss">
            <div class="static-notice-dismiss-line">
                Dismiss
            </div>
            <div class="static-notice-dismiss-line">
                我知道了
            </div>
        </div>
    </div>
    <style>
    .static-notice {
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
    .static-notice-line {
        line-height: 1.8;
    }
    .static-notice-dismiss {
        background: var(--themecolor);
        border-radius: 8px;
        padding: 5px 15px;
        cursor: pointer;
        user-select: none;
        transition: transform .2s ease;
        text-align: center;
        color: #fcfcfc;
    }
    .static-notice-dismiss:hover {
        transform: scale(1.05);
    }
    @media (max-width: 500px) {
        .static-notice {
            flex-direction: column;
        }
        .static-notice-line {
            line-height: 1.6;
        }
        .static-notice-dismiss {
            margin-top: 10px;
            display: flex;
            flex-direction: row;
            gap: 0.5em;
        }
    }
    </style>
    `;
    
    if (document.querySelector(".static-notice") == null && window.sessionStorage.getItem("static-notice-dismissed") != "true") {
        $("body").append(staticNotice);
    }
    
    $(document).on("click", ".static-notice-dismiss", function() {
        $(".static-notice").css("transform", "translateY(100%)");
        setTimeout(function() {
            $(".static-notice").remove();
        }, 300);
        window.sessionStorage.setItem("static-notice-dismissed", "true");
    });
    */
})();
