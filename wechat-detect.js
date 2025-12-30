<script>
(function() {
    // 1. 判断是否为微信浏览器
    if (/MicroMessenger/i.test(navigator.userAgent)) {
        // 2. 增强型样式
        var style = document.createElement('style');
        style.innerHTML = `
            #wechat-guide-mask {
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: radial-gradient(circle at top right, rgba(20, 40, 30, 0.95), rgba(0, 0, 0, 0.98)); 
                z-index: 2000000;
                display: flex; flex-direction: column; align-items: flex-end;
                color: white; font-family: -apple-system, sans-serif;
                animation: fadeIn 0.4s ease-out forwards;
                opacity: 0;
            }
            
            /* 动态 SVG 箭头容器 */
            .guide-arrow-svg {
                margin: 20px 40px 0 0;
                width: 100px; height: 100px;
                transform: rotate(-10deg);
                animation: arrowFloat 2s ease-in-out infinite;
            }

            .guide-content {
                margin: 20px 40px; font-size: 19px; line-height: 1.8; text-align: right;
                text-shadow: 0 2px 10px rgba(0,0,0,0.5);
            }

            /* 强调文字的呼吸灯效果 */
            .guide-content b { 
                color: #07c160; font-size: 22px; 
                animation: glow 1.5s ease-in-out infinite;
            }

            /* 动画定义 */
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            @keyframes arrowFloat {
                0%, 100% { transform: translate(0, 0) rotate(-10deg); }
                50% { transform: translate(-10px, 10px) rotate(-15deg); }
            }

            @keyframes glow {
                0%, 100% { text-shadow: 0 0 5px rgba(7, 193, 96, 0.2); }
                50% { text-shadow: 0 0 20px rgba(7, 193, 96, 0.8); }
            }
        `;
        document.head.appendChild(style);

        // 3. 动态创建遮罩层（使用 SVG 箭头）
        var mask = document.createElement('div');
        mask.id = 'wechat-guide-mask';
        mask.innerHTML = `
            <div class="guide-arrow-svg">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 90C30 70 50 40 85 15M85 15L65 18M85 15L82 35" 
                          stroke="#07c160" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
                        <animate attributeName="stroke-dasharray" from="0,150" to="150,0" dur="1.5s" repeatCount="1" />
                    </path>
                </svg>
            </div>
            <div class="guide-content">
                请点击右上角菜单<br/>
                选择 <b>“在浏览器中打开”</b><br/>
                解锁完整功能体验
            </div>
        `;

        // 4. 将遮罩层插入页面
        document.body.appendChild(mask);
        
        // 禁止背景滚动
        document.body.style.overflow = 'hidden';

        // 5. 点击遮罩层可尝试关闭（可选）
        mask.onclick = function() {
            mask.style.display = 'none';
            document.body.style.overflow = '';
        };
    }
})();
</script>
