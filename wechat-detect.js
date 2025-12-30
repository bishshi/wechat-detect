(function() {
    // 1. 判断是否为微信浏览器
    if (/MicroMessenger/i.test(navigator.userAgent)) {
        // 2. 动态创建样式，不影响原文件 CSS
        var style = document.createElement('style');
        style.innerHTML = `
            #wechat-guide-mask {
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0, 0, 0, 0.85); z-index: 2000000;
                display: flex; flex-direction: column; align-items: flex-end;
                color: white; font-family: -apple-system, sans-serif;
            }
            .guide-arrow {
                margin: 10px 30px 0 0; font-size: 40px;
                animation: bounce 1.5s infinite;
            }
            .guide-content {
                margin: 10px 30px; font-size: 18px; line-height: 1.6; text-align: right;
            }
            .guide-content b { color: #07c160; font-size: 20px; }
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);

        // 3. 动态创建遮罩层 HTML
        var mask = document.createElement('div');
        mask.id = 'wechat-guide-mask';
        mask.innerHTML = `
            <div class="guide-arrow">↗</div>
            <div class="guide-content">
                点击右上角<br/>
                选择 <b>“在浏览器中打开”</b><br/>
                以获得更好的体验
            </div>
        `;

        // 4. 将遮罩层插入页面
        document.body.appendChild(mask);
        
        // 可选：阻止微信中的页面滚动
        document.body.style.overflow = 'hidden';
    }
})();
