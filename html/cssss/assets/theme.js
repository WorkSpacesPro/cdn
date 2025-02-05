 
        function initTheme() {
            const themeToggle = document.querySelector('.theme-toggle');
            const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
            const root = document.documentElement;
            const storedTheme = localStorage.getItem('theme') || 'auto';
            
            let themeChangeRequest;
            
            const setTheme = (theme) => {
                cancelAnimationFrame(themeChangeRequest);
                themeChangeRequest = requestAnimationFrame(() => {
                    root.setAttribute('data-theme', theme);
                    localStorage.setItem('theme', theme);
                });
            };

            setTheme(storedTheme);

            themeToggle.addEventListener('click', () => {
                const currentTheme = root.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                setTheme(newTheme);
            });

            prefersDarkScheme.addEventListener('change', (e) => {
                if (root.getAttribute('data-theme') === 'auto') {
                    setTheme(e.matches ? 'dark' : 'light');
                }
            });
        }

        function createStarField() {
            const wrapper = document.getElementById('spaceWrapper');
            const starCount = 150;
            const maxSize = 2;
            const fragment = document.createDocumentFragment();

            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                const size = Math.random() * maxSize + 0.5;
                
                Object.assign(star.style, {
                    left: `${x}px`,
                    top: `${y}px`,
                    width: `${size}px`,
                    height: `${size}px`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random()}s`
                });

                fragment.appendChild(star);
            }

            wrapper.innerHTML = '';
            wrapper.appendChild(fragment);
        }

        function init3DCard() {
             // 检查是否为移动设备
             if (window.innerWidth <= 768) return;  // 移动端不初始化 3D 效果
            const card = document.querySelector('.card');
            let rafId;
            
            card.addEventListener('mousemove', (e) => {
                cancelAnimationFrame(rafId);
                rafId = requestAnimationFrame(() => {
                    const rect = card.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;
                    const mouseX = e.clientX - centerX;
                    const mouseY = e.clientY - centerY;
                    const rotateX = (mouseY / (rect.height / 2)) * 8;
                    const rotateY = -(mouseX / (rect.width / 2)) * 8;

                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                });
            });

            card.addEventListener('mouseleave', () => {
                cancelAnimationFrame(rafId);
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        }
        //打赏JS
        function initDonateModal() {
            const modal = document.getElementById('donateModal');
            const donateBtn = document.querySelector('.donate-btn');
            const closeBtn = document.querySelector('.close-btn');
            const tabBtns = document.querySelectorAll('.tab-btn');
            const qrItems = document.querySelectorAll('.qr-item');
        
            // 打开模态框
            donateBtn.addEventListener('click', () => {
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            });
        
            // 关闭模态框
            closeBtn.addEventListener('click', () => {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            });
        
            // 点击外部关闭
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('show');
                    document.body.style.overflow = '';
                }
            });
        
            // 切换支付方式
            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const tab = btn.dataset.tab;
                    
                    // 更新按钮状态
                    tabBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    // 更新二维码显示
                    qrItems.forEach(item => {
                        item.classList.remove('active');
                        if (item.id === `${tab}-qr`) {
                            item.classList.add('active');
                        }
                    });
                });
            });
        }
        // 初始化
        window.addEventListener('DOMContentLoaded', () => {
            createStarField();
            init3DCard();
            initTheme();
            initDonateModal();
        });

        // 响应窗口大小变化
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(createStarField, 200);
        });
    