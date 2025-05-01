document.addEventListener('DOMContentLoaded', function() {
    // 骞虫粦婊氬姩鏁堟灉
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 40,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 椤甸潰鍔犺浇鍔ㄧ敾
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.opacity = '1';
    }
    
    // 婊氬姩鍔ㄧ敾
    const features = document.querySelectorAll('.feature');
    
    function checkScroll() {
        features.forEach(feature => {
            const position = feature.getBoundingClientRect();
            
            if (position.top < window.innerHeight * 0.8) {
                feature.classList.add('fade-in');
            }
        });
    }
    
    // 鍒濆妫€鏌�
    setTimeout(checkScroll, 100);
    
    // 婊氬姩鏃舵鏌�
    window.addEventListener('scroll', checkScroll);

    // 鏇挎崲涔嬪墠鐨勭矑瀛愯儗鏅负鏄熺┖鏋佸厜鏁堟灉
    function initAuroraEffect() {
        const canvas = document.getElementById('particles-bg');
        const ctx = canvas.getContext('2d');
        
        // 璁剧疆鐢诲竷澶у皬涓虹獥鍙ｅぇ灏�
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            return true;
        }
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // 鏄熸槦鏁扮粍
        const stars = [];
        // 鏋佸厜鏁扮粍
        const auroras = [];
        
        // 鍒涘缓鏄熸槦
        function createStars() {
            const starCount = Math.floor(canvas.width * canvas.height / 5000); // 鏍规嵁灞忓箷澶у皬璋冩暣鏄熸槦鏁伴噺
            
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5 + 0.5,
                    brightness: Math.random() * 0.5 + 0.5,
                    color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`,
                    blinkSpeed: Math.random() * 0.02 + 0.005,
                    blinkDirection: Math.random() > 0.5 ? 1 : -1
                });
            }
        }
        
        // 鍒涘缓鏋佸厜
        function createAuroras() {
            const isLightTheme = document.body.getAttribute('data-theme') !== 'dark';
            const auroraColors = isLightTheme ? 
                ['rgba(55, 145, 255, 0.07)', 'rgba(80, 200, 255, 0.05)', 'rgba(100, 180, 255, 0.06)'] : 
                ['rgba(80, 255, 200, 0.12)', 'rgba(55, 200, 255, 0.1)', 'rgba(100, 180, 255, 0.14)'];
            
            const auroraCount = Math.floor(canvas.width / 250); // 鏍规嵁灞忓箷瀹藉害璋冩暣鏋佸厜鏁伴噺
            
            for (let i = 0; i < auroraCount; i++) {
                const auroraWidth = Math.random() * canvas.width * 0.4 + canvas.width * 0.3;
                auroras.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height * 0.7,
                    width: auroraWidth,
                    height: Math.random() * 150 + 50,
                    color: auroraColors[Math.floor(Math.random() * auroraColors.length)],
                    speed: Math.random() * 0.2 + 0.1,
                    points: []
                });
                
                // 鍒涘缓鏋佸厜鏇茬嚎鐨勭偣
                const pointCount = Math.floor(auroraWidth / 20);
                let lastY = 0;
                
                for (let j = 0; j < pointCount; j++) {
                    const x = j * (auroraWidth / pointCount);
                    const y = Math.sin(j * 0.5) * 20 + (Math.random() * 10 - 5);
                    auroras[i].points.push({ x, y: lastY + y });
                    lastY += y;
                }
            }
        }
        
        // 鏇存柊鍜岀粯鍒舵槦鏄�
        function updateStars() {
            for (let star of stars) {
                // 鏄熸槦闂儊
                star.brightness += star.blinkSpeed * star.blinkDirection;
                
                if (star.brightness > 1) {
                    star.brightness = 1;
                    star.blinkDirection = -1;
                } else if (star.brightness < 0.5) {
                    star.brightness = 0.5;
                    star.blinkDirection = 1;
                }
                
                // 缁樺埗鏄熸槦
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
                ctx.fill();
            }
        }
        
        // 鏇存柊鍜岀粯鍒舵瀬鍏�
        function updateAuroras() {
            for (let aurora of auroras) {
                // 绉诲姩鏋佸厜
                aurora.x += aurora.speed;
                if (aurora.x > canvas.width + aurora.width) {
                    aurora.x = -aurora.width;
                }
                
                // 缁樺埗鏋佸厜
                ctx.save();
                ctx.translate(aurora.x, aurora.y);
                
                // 鍒涘缓鏋佸厜娓愬彉
                const gradient = ctx.createLinearGradient(0, 0, 0, aurora.height);
                gradient.addColorStop(0, 'transparent');
                gradient.addColorStop(0.5, aurora.color);
                gradient.addColorStop(1, 'transparent');
                
                // 缁樺埗鏋佸厜璺緞
                ctx.beginPath();
                ctx.moveTo(0, aurora.points[0].y);
                
                for (let i = 1; i < aurora.points.length; i++) {
                    const point = aurora.points[i];
                    // 浣跨敤璐濆灏旀洸绾夸娇鏋佸厜鏇村钩婊�
                    const xc = (aurora.points[i].x + aurora.points[i - 1].x) / 2;
                    const yc = (aurora.points[i].y + aurora.points[i - 1].y) / 2;
                    ctx.quadraticCurveTo(aurora.points[i - 1].x, aurora.points[i - 1].y, xc, yc);
                }
                
                // 瀹屾垚鏋佸厜璺緞
                ctx.lineTo(aurora.width, aurora.points[aurora.points.length - 1].y);
                ctx.lineTo(aurora.width, aurora.height);
                ctx.lineTo(0, aurora.height);
                ctx.closePath();
                
                // 濉厖鏋佸厜
                ctx.fillStyle = gradient;
                ctx.fill();
                
                ctx.restore();
            }
        }
        
        // 涓诲姩鐢诲惊鐜�
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            updateAuroras();
            updateStars();
            
            requestAnimationFrame(animate);
        }
        
        // 鍒濆鍖�
        createStars();
        createAuroras();
        animate();
        
        // 涓婚鍒囨崲鏃舵洿鏂版瀬鍏夐鑹�
        document.getElementById('theme-toggle-btn').addEventListener('click', function() {
            auroras.length = 0; // 娓呯┖鏋佸厜
            createAuroras(); // 閲嶆柊鍒涘缓鏋佸厜锛岄鑹蹭細鏍规嵁褰撳墠涓婚鑷姩璋冩暣
        });
    }

    // 鍒濆鍖栨槦绌烘瀬鍏夋晥鏋�
    initAuroraEffect();

    // 绮掑瓙鑳屾櫙鍔ㄧ敾
    const canvas = document.getElementById('particles-bg');
    const ctx = canvas.getContext('2d');
    
    // 淇鍏ㄥ睆妯″紡涓媍anvas鐨勯棶棰�
    function resizeCanvas() {
        // 鑾峰彇褰撳墠瑙嗙獥鐨勫昂瀵革紝鑰冭檻鍏ㄥ睆妯″紡
        const displayWidth = window.innerWidth;
        const displayHeight = window.innerHeight;
        
        // 妫€鏌anvas鏄惁瀛樺湪涓斿昂瀵告槸鍚﹂渶瑕佹洿鏂�
        if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
            canvas.width = displayWidth;
            canvas.height = displayHeight;
            
            // 纭繚canvas鏍峰紡涔熸纭缃�
            canvas.style.width = `${displayWidth}px`;
            canvas.style.height = `${displayHeight}px`;
            
            // 鎵撳嵃鏃ュ織浠ヤ究璋冭瘯
            console.log(`Canvas resized to: ${displayWidth}x${displayHeight}`);
            
            return true; // 灏哄宸叉洿鏂�
        }
        
        return false; // 灏哄鏈彉
    }
    
    // 淇鍏ㄥ睆鍒囨崲鐨勯€昏緫锛岀‘淇漜anvas鍦ㄥ叏灞忔ā寮忎笅姝ｇ‘鏄剧ず
    function onFullScreenChange() {
        if (document.fullscreenElement || 
            document.webkitFullscreenElement || 
            document.mozFullScreenElement || 
            document.msFullscreenElement) {
            // 鍏ㄥ睆妯″紡婵€娲�
            fullscreenIcon.style.display = 'none';
            exitFullscreenIcon.style.display = 'block';
            
            // 纭繚canvas瑕嗙洊鍏ㄥ睆鍖哄煙
            setTimeout(() => {
                // 閲嶆柊璋冩暣canvas灏哄
                resizeCanvas();
                
                // 纭繚canvas瀹氫綅姝ｇ‘
                canvas.style.position = 'fixed';
                canvas.style.top = '0';
                canvas.style.left = '0';
                canvas.style.zIndex = '-1';
                
                // 閲嶆柊鍒濆鍖栫矑瀛愪互閫傚簲鏂扮殑灏哄
                initParticles();
                
                // 灏濊瘯寮哄埗閲嶇粯
                requestAnimationFrame(() => {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    particles.forEach(p => {
                        p.update();
                        if (p.isMeteor) {
                            drawMeteorTail(p);
                        }
                        p.draw();
                    });
                });
            }, 300); // 澧炲姞寤惰繜锛岀‘淇濆叏灞忔ā寮忓畬鍏ㄧ敓鏁�
        } else {
            // 閫€鍑哄叏灞忔ā寮�
            fullscreenIcon.style.display = 'block';
            exitFullscreenIcon.style.display = 'none';
            
            // 閲嶇疆涓洪潪鍏ㄥ睆鐘舵€�
            setTimeout(() => {
                // 閲嶆柊璋冩暣canvas灏哄
                resizeCanvas();
                
                // 纭繚canvas瀹氫綅姝ｇ‘
                canvas.style.position = 'fixed';
                canvas.style.top = '0';
                canvas.style.left = '0';
                canvas.style.zIndex = '-1';
                
                // 閲嶆柊鍒濆鍖栫矑瀛�
                initParticles();
                
                // 寮哄埗閲嶇粯
                requestAnimationFrame(() => {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    particles.forEach(p => {
                        p.update();
                        if (p.isMeteor) {
                            drawMeteorTail(p);
                        }
                        p.draw();
                    });
                });
            }, 300);
        }
    }
    
    // 涓篶anvas娣诲姞CSS纭繚瀹冨湪鍏ㄥ睆妯″紡涓嬫纭樉绀�
    function setupCanvas() {
        // 纭繚canvas濮嬬粓瑕嗙洊鏁翠釜瑙嗗浘鍖哄煙
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '-1';
        canvas.style.pointerEvents = 'none'; // 璁╅紶鏍囦簨浠剁┛閫廲anvas
        
        // 鍒濆璋冩暣澶у皬
        resizeCanvas();
    }
    
    // 鍒濆鍖朿anvas璁剧疆
    setupCanvas();
    
    // 绮掑瓙鍙傛暟 - 鍑忓皯鏁伴噺
    const particleCount = Math.min(30, window.innerWidth / 40); // 鍑忓皯绮掑瓙鏁伴噺
    const particles = [];
    
    // 鍒涘缓绮掑瓙绫�
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.5 + 0.2; // 澶氭牱鍖栫殑鏄熸槦澶у皬
            this.baseSize = this.size; // 璁颁綇鍘熷澶у皬鐢ㄤ簬闂儊鏁堟灉
            
            // 闈炲父鎱㈢殑绉诲姩 - 鍑犱箮闈欐鐨勬槦鏄�
            this.speedX = Math.random() * 0.2 - 0.1;
            this.speedY = Math.random() * 0.2 - 0.1;
            
            // 鏄熸槦鐨勪寒搴﹀睘鎬�
            this.opacity = Math.random() * 0.5 + 0.2;
            this.baseOpacity = this.opacity;
            
            // 闂儊鏁堟灉鍙傛暟
            this.twinkleSpeed = Math.random() * 0.01 + 0.005; // 闂儊閫熷害
            this.twinkleDirection = Math.random() > 0.5 ? 1 : -1; // 闂儊鏂瑰悜
            
            // 姣忛鏄熸槦鐨勮壊璋冨彉鍖�
            this.hue = Math.random() > 0.9 ? 
                Math.random() * 60 + 200 : // 鍋跺皵鍑虹幇钃濊壊绯绘槦鏄�
                0; // 澶у鏄櫧鑹�
            this.saturation = this.hue > 0 ? 80 : 0; // 鏈夎壊璋冪殑璇濆氨澧炲姞楗卞拰搴�
        }
        
        // 鏇存柊绮掑瓙浣嶇疆鍜岄棯鐑佹晥鏋�
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // 澶勭悊杈圭晫 - 涓烘祦鏄熷畬鍏ㄧ姝㈢幆缁�
            if (this.isMeteor) {
                // 娴佹槦涓嶅啀澶勭悊杈圭晫寰幆锛岃秴鍑轰换浣曡竟鐣岄兘鏍囪涓虹Щ闄�
                if (this.x > canvas.width * 1.2 || 
                    this.x < -canvas.width * 0.2 || 
                    this.y > canvas.height * 1.2) {
                    this.toRemove = true;
                }
            } else {
                // 鏅€氭槦鏄熺殑杈圭晫澶勭悊淇濇寔涓嶅彉
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }
            
            // 澧炲己闂儊鏁堟灉 - 鏇村ぇ鐨勫彉鍖栧箙搴�
            this.opacity += this.twinkleSpeed * this.twinkleDirection;
            this.size = this.baseSize * (0.8 + (this.opacity / this.baseOpacity) * 0.4); // 鏇村ぇ鐨勫昂瀵稿彉鍖�
            
            // 鍙嶈浆闂儊鏂瑰悜锛屽鍔犳洿澶х殑浜害鍙樺寲
            if (this.opacity > this.baseOpacity * 2 || this.opacity < this.baseOpacity * 0.4) {
                this.twinkleDirection *= -1;
            }
        }
        
        // 缁樺埗鏄熸槦
        draw() {
            const isDark = document.body.hasAttribute('data-theme') && 
                            document.body.getAttribute('data-theme') === 'dark';
            
            // 澶勭悊娣辫壊/娴呰壊妯″紡涓嬬殑鏄熸槦棰滆壊
            let color;
            if (isDark) {
                // 娣辫壊妯″紡: 鏄庝寒鐨勬槦鏄�
                if (this.hue > 0) {
                    color = `hsla(${this.hue}, ${this.saturation}%, 80%, ${this.opacity})`;
                } else {
                    color = `rgba(255, 255, 255, ${this.opacity})`;
                }
            } else {
                // 娴呰壊妯″紡: 钃濊壊绯绘槦鏄燂紝鑰岄潪榛戣壊
                if (this.hue > 0) {
                    color = `hsla(${this.hue}, ${this.saturation}%, 50%, ${this.opacity * 0.7})`;
                } else {
                    // 浣跨敤娣¤摑鑹茶€屼笉鏄粦鑹�
                    color = `rgba(50, 120, 255, ${this.opacity * 0.5})`;
                }
            }
            
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            
            // 涓鸿緝澶х殑鏄熸槦娣诲姞鏇存槑鏄剧殑鍏夋檿鏁堟灉
            if (this.baseSize > 1) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
                ctx.fillStyle = color.replace(/[\d.]+\)$/, `${this.opacity * 0.2})`);
                ctx.fill();
            }
        }
    }
    
    // 鍒濆鍖栫矑瀛�
    function initParticles() {
        // 娓呯┖鐜版湁绮掑瓙
        particles.length = 0;
        
        // 鍒涘缓鏇村绮掑瓙浣滀负鏄熸槦
        for (let i = 0; i < particleCount * 1.5; i++) {
            const star = new Particle();
            // 澧炲己闂儊閫熷害
            star.twinkleSpeed = Math.random() * 0.02 + 0.01; // 鏇村揩鐨勯棯鐑�
            particles.push(star);
        }
        
        // 娣诲姞涓€浜涚壒娈婄殑澶ф槦鏄�
        for (let i = 0; i < particleCount / 5; i++) {
            const brightStar = new Particle();
            brightStar.size = Math.random() * 2 + 1.5; // 鏇村ぇ鐨勬槦鏄�
            brightStar.opacity = Math.random() * 0.4 + 0.6; // 鏇翠寒鐨勬槦鏄�
            brightStar.twinkleSpeed = Math.random() * 0.03 + 0.01; // 闂儊閫熷害
            brightStar.twinkleDirection = 1;
            particles.push(brightStar);
        }
    }
    
    // 鏂板娴佹槦鏁堟灉
    function addMeteors() {
        // 鍒濆娣诲姞鍑犱釜娴佹槦
        for (let i = 0; i < 3; i++) {
            if (Math.random() > 0.5) {
                createRandomMeteor();
            }
        }
        
        // 鏇撮绻佸湴娣诲姞娴佹槦
        setInterval(() => {
            // 闄愬埗鏈€澶ф祦鏄熸暟閲忥紝闃叉杩囧娴佹槦褰卞搷鎬ц兘
            const meteorCount = particles.filter(p => p.isMeteor).length;
            if (meteorCount < 5 && Math.random() > 0.5) { // 闄愬埗鏈€澶�5涓祦鏄�
                createRandomMeteor();
            }
        }, 4000);
    }
    
    // 鍒涘缓闅忔満浣嶇疆鍜岃搴︾殑娴佹槦
    function createRandomMeteor() {
        // 妫€鏌ユ槸鍚﹀凡瀛樺湪澶绮掑瓙锛岄伩鍏嶅唴瀛樻硠婕�
        if (particles.length > 500) {
            console.warn('Too many particles, skipping meteor creation');
            return null;
        }
        
        const meteor = new Particle();
        
        // 50%鐨勬鐜囦粠椤堕儴寮€濮嬶紝50%鐨勬鐜囦粠宸︿晶鎴栧彸渚у紑濮�
        const startPosition = Math.random();
        
        if (startPosition < 0.5) {
            // 浠庨《閮ㄥ紑濮�
            meteor.x = Math.random() * canvas.width;
            meteor.y = -10;
            meteor.speedX = (Math.random() - 0.5) * 5; // 宸﹀彸闅忔満鍋忕Щ
            meteor.speedY = Math.random() * 5 + 3; // 鍚戜笅绉诲姩
        } else if (startPosition < 0.75) {
            // 浠庡乏渚у紑濮�
            meteor.x = -10;
            meteor.y = Math.random() * (canvas.height * 0.7); // 鍦ㄤ笂70%鍖哄煙
            meteor.speedX = Math.random() * 3 + 2; // 鍚戝彸绉诲姩
            meteor.speedY = Math.random() * 4 + 2; // 鍚戜笅绉诲姩
        } else {
            // 浠庡彸渚у紑濮�
            meteor.x = canvas.width + 10;
            meteor.y = Math.random() * (canvas.height * 0.7); // 鍦ㄤ笂70%鍖哄煙
            meteor.speedX = -(Math.random() * 3 + 2); // 鍚戝乏绉诲姩
            meteor.speedY = Math.random() * 4 + 2; // 鍚戜笅绉诲姩
        }
        
        meteor.size = Math.random() * 2 + 1;
        meteor.opacity = 0.7;
        meteor.isMeteor = true;
        meteor.tailLength = Math.random() * 20 + 15;
        meteor.prevPositions = [];
        
        particles.push(meteor);
        
        return meteor;
    }
    
    // 涓烘祦鏄熸坊鍔犲熬宸存晥鏋�
    function drawMeteorTail(meteor) {
        // 璁板綍褰撳墠浣嶇疆
        meteor.prevPositions.unshift({x: meteor.x, y: meteor.y});
        
        // 闄愬埗灏惧反闀垮害
        if (meteor.prevPositions.length > meteor.tailLength) {
            meteor.prevPositions.pop();
        }
        
        // 妫€鏌ユ槸鍚︽湁瓒冲鐨勭偣鏉ョ粯鍒跺熬宸�
        if (meteor.prevPositions.length < 2) return;
        
        // 妫€鏌ュ熬宸翠腑鏄惁鏈変笉鍚堢悊鐨勮烦璺冿紙姘村钩鎴栧瀭鐩存柟鍚戯級
        for (let i = 1; i < meteor.prevPositions.length; i++) {
            const current = meteor.prevPositions[i-1];
            const prev = meteor.prevPositions[i];
            const dx = current.x - prev.x;
            const dy = current.y - prev.y;
            
            // 濡傛灉涓ょ偣涔嬮棿鐨勮窛绂昏秴杩囦竴瀹氶槇鍊硷紝璁や负鍙戠敓浜�"鐜粫"璺宠穬
            // 鍚屾椂妫€娴嬫按骞冲拰鍨傜洿鏂瑰悜
            if (Math.abs(dx) > canvas.width * 0.4 || Math.abs(dy) > canvas.height * 0.4) {
                // 鎴柇灏惧反锛屽彧淇濈暀鍒拌繖涓偣涔嬪墠鐨勯儴鍒�
                meteor.prevPositions = meteor.prevPositions.slice(0, i);
                break;
            }
        }
        
        // 缁樺埗灏惧反
        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        
        for (let i = 0; i < meteor.prevPositions.length; i++) {
            const pos = meteor.prevPositions[i];
            ctx.lineTo(pos.x, pos.y);
        }
        
        const isDark = document.body.hasAttribute('data-theme') && 
                       document.body.getAttribute('data-theme') === 'dark';
        
        // 鍒涘缓娓愬彉
        const gradient = ctx.createLinearGradient(
            meteor.x, meteor.y,
            meteor.prevPositions[meteor.prevPositions.length - 1].x,
            meteor.prevPositions[meteor.prevPositions.length - 1].y
        );
        
        // 鏍规嵁涓婚璋冩暣娴佹槦灏惧反棰滆壊
        if (isDark) {
            gradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        } else {
            // 娴呰壊妯″紡涓嬩娇鐢ㄨ摑鑹茶皟鐨勬祦鏄燂紝鎻愰珮鍙搴�
            gradient.addColorStop(0, `rgba(0, 110, 255, ${meteor.opacity})`);
            gradient.addColorStop(0.5, `rgba(50, 120, 255, ${meteor.opacity * 0.5})`);
            gradient.addColorStop(1, 'rgba(100, 150, 255, 0)');
        }
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = meteor.size / (isDark ? 2 : 1.5); // 娴呰壊妯″紡涓嬪熬宸寸◢寰矖涓€鐐�
        ctx.stroke();
        
        // 涓烘祦鏄熷ご閮ㄦ坊鍔犲厜鏅曟晥鏋�
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, meteor.size * 2, 0, Math.PI * 2);
        if (isDark) {
            ctx.fillStyle = `rgba(255, 255, 255, ${meteor.opacity * 0.3})`;
        } else {
            ctx.fillStyle = `rgba(0, 110, 255, ${meteor.opacity * 0.3})`;
        }
        ctx.fill();
    }
    
    // 鍔ㄧ敾寰幆
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 绉婚櫎鏍囪涓哄垹闄ょ殑娴佹槦
        for (let i = particles.length - 1; i >= 0; i--) {
            if (particles[i].toRemove) {
                particles.splice(i, 1);
                continue;
            }
            
            particles[i].update();
            
            if (particles[i].isMeteor) {
                drawMeteorTail(particles[i]);
            }
            
            particles[i].draw();
            
            if (!particles[i].isMeteor) {
                connectParticlesMinimal(particles[i], particles);
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    // 鏈€灏忓寲杩炴帴闄勮繎绮掑瓙
    function connectParticlesMinimal(p1, particles) {
        // 鍑忓皯杩炵嚎 - 鍙繛鎺ラ潪甯歌繎鐨勬槦鏄�
        const maxDistance = 30; 
        let connections = 0;
        const maxConnections = 2; // 姣忛鏄熸槦鏈€澶氳繛鎺ユ暟
        
        for (let i = 0; i < particles.length; i++) {
            if (connections >= maxConnections) break;
            
            const p2 = particles[i];
            if (p1 === p2) continue;
            
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < maxDistance) {
                connections++;
                const opacity = (1 - (distance / maxDistance)) * 0.03;
                const isDark = document.body.hasAttribute('data-theme') && 
                              document.body.getAttribute('data-theme') === 'dark';
                
                ctx.strokeStyle = isDark ? 
                    `rgba(255, 255, 255, ${opacity})` : 
                    `rgba(0, 0, 0, ${opacity * 0.5})`;
                    
                ctx.lineWidth = 0.3; // 鏇寸粏鐨勮繛绾�
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        }
    }
    
    // 榧犳爣浜や簰
    let mouse = {
        x: null,
        y: null,
        radius: 150
    };
    
    window.addEventListener('mousemove', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });
    
    // 鍒濆鍖栫矑瀛愬苟寮€濮嬪姩鐢�
    initParticles();
    addMeteors();
    animate();
    
    // 鑾峰彇涓婚鍒囨崲鎸夐挳鍜屽綋鍓嶄富棰�
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const notification = document.getElementById('theme-notification');
    const notificationText = document.getElementById('theme-notification-text');
    
    // 浠巐ocalStorage鑾峰彇鐢ㄦ埛鍋忓ソ锛屽鏋滄病鏈夊垯浣跨敤绯荤粺鍋忓ソ
    const currentTheme = localStorage.getItem('theme');
    
    // 濡傛灉鏈変繚瀛樼殑涓婚鍋忓ソ锛屽垯搴旂敤瀹�
    if (currentTheme) {
        document.body.setAttribute('data-theme', currentTheme);
    } else if (prefersDarkScheme.matches) {
        // 濡傛灉娌℃湁淇濆瓨鐨勫亸濂戒絾绯荤粺鍋忓ソ鏄殫鑹诧紝鍒欏簲鐢ㄦ殫鑹蹭富棰�
        document.body.setAttribute('data-theme', 'dark');
    }
    
    // 鍒囨崲涓婚鐨勫嚱鏁�
    function toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme');
        let newTheme;
        
        // 娣诲姞鎸夐挳鍔ㄧ敾
        themeToggleBtn.classList.add('pulse');
        setTimeout(() => {
            themeToggleBtn.classList.remove('pulse');
        }, 500);
        
        if (currentTheme === 'dark') {
            newTheme = 'light';
            document.body.removeAttribute('data-theme');
            notificationText.textContent = '宸插垏鎹㈠埌娴呰壊妯″紡';
        } else {
            newTheme = 'dark';
            document.body.setAttribute('data-theme', 'dark');
            notificationText.textContent = '宸插垏鎹㈠埌娣辫壊妯″紡';
        }
        
        // 鏄剧ず閫氱煡
        notification.classList.add('show');
        
        // 3绉掑悗闅愯棌閫氱煡
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
        
        // 淇濆瓨鐢ㄦ埛鐨勪富棰樺亸濂�
        localStorage.setItem('theme', newTheme);
        
        // 鏄剧ず涓婚鍒囨崲閫氱煡
        const themeNotification = document.querySelector('.theme-notification');
        const locationNotification = document.getElementById('location-notification');
        
        // 妫€鏌ヤ綅缃€氱煡鏄惁鏄剧ず
        if (locationNotification && locationNotification.classList.contains('show')) {
            themeNotification.classList.add('with-location');
            locationNotification.classList.add('with-theme');
        }
        
        themeNotification.classList.add('show');
    }
    
    // 鍒濆鍔犺浇鏃舵牴鎹綋鍓嶄富棰樿缃纭殑閫氱煡鏂囨湰
    const initialTheme = document.body.getAttribute('data-theme');
    if (initialTheme === 'dark') {
        notificationText.textContent = '娣辫壊妯″紡';
    } else {
        notificationText.textContent = '娴呰壊妯″紡';
    }
    
    // 纭繚鎸夐挳鐐瑰嚮浜嬩欢浣跨敤鏇存柊鍚庣殑鍑芥暟
    themeToggleBtn.addEventListener('click', toggleTheme);
    
    // 鐩戝惉绯荤粺涓婚鍙樺寲
    prefersDarkScheme.addEventListener('change', function(e) {
        // 鍙湁褰撶敤鎴锋病鏈夋槑纭缃亸濂芥椂鎵嶈窡闅忕郴缁�
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.body.setAttribute('data-theme', 'dark');
            } else {
                document.body.removeAttribute('data-theme');
            }
        }
    });

    // 鍒涘缓榧犳爣璺熼殢鏁堟灉
    const createMouseFollower = () => {
        const follower = document.createElement('div');
        follower.className = 'mouse-follower';
        document.body.appendChild(follower);
        
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        const links = document.querySelectorAll('a, button');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                follower.classList.add('link-hover');
            });
            link.addEventListener('mouseleave', () => {
                follower.classList.remove('link-hover');
            });
        });
        
        function animate() {
            // 骞虫粦璺熼殢绠楁硶
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            
            follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
            
            requestAnimationFrame(animate);
        }
        
        animate();
    };

    // 鍙湪闈炶Е鎽歌澶囦笂鍚敤
    if (!('ontouchstart' in window)) {
        createMouseFollower();
    }

    const loader = document.querySelector('.loader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500);
    });

    // 澧炲己寮圭獥鎵撳紑/鍏抽棴鍔ㄧ敾鏁堟灉
    function setupModals() {
        const aboutLink = document.getElementById('about-link');
        const contactLink = document.getElementById('contact-link');
        const aboutModal = document.getElementById('about-modal');
        const contactModal = document.getElementById('contact-modal');
        const closeButtons = document.querySelectorAll('.close-modal');
        
        // 娣诲姞鍔ㄧ敾鏁堟灉
        function openModal(modal) {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
            
            // 涓�"鍏充簬"寮圭獥涓殑鍏冪礌娣诲姞鍏ュ満鍔ㄧ敾
            if (modal === aboutModal) {
                const elements = modal.querySelectorAll('p, li');
                elements.forEach((el, index) => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(20px)';
                    el.style.transition = `opacity 0.5s ease ${0.2 + index * 0.1}s, transform 0.5s ease ${0.2 + index * 0.1}s`;
                    
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, 50);
                });
            }
            
            // 涓�"鑱旂郴"寮圭獥涓殑鑱旂郴鏂瑰紡娣诲姞鍏ュ満鍔ㄧ敾
            if (modal === contactModal) {
                const items = modal.querySelectorAll('.contact-item');
                items.forEach((item, index) => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    item.style.transition = `opacity 0.5s ease ${0.2 + index * 0.1}s, transform 0.5s ease ${0.2 + index * 0.1}s`;
                    
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                });
            }
        }
        
        function closeModal(modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
        
        // 鎵撳紑鍏充簬寮圭獥
        aboutLink.addEventListener('click', function(e) {
            e.preventDefault();
            openModal(aboutModal);
        });
        
        // 鎵撳紑鑱旂郴鏂瑰紡寮圭獥
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            openModal(contactModal);
        });
        
        // 鍏抽棴鎸夐挳
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                closeModal(aboutModal);
                closeModal(contactModal);
            });
        });
        
        // 鐐瑰嚮寮圭獥澶栭儴鍏抽棴
        window.addEventListener('click', function(e) {
            if (e.target === aboutModal) {
                closeModal(aboutModal);
            }
            if (e.target === contactModal) {
                closeModal(contactModal);
            }
        });
        
        // ESC閿叧闂脊绐�
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal(aboutModal);
                closeModal(contactModal);
            }
        });
    }

    // 璁剧疆寮圭獥鍔熻兘
    setupModals();

    // 娣诲姞鍏ㄥ睆鍒囨崲鍔熻兘
    function setupFullscreenToggle() {
        const fullscreenBtn = document.getElementById('fullscreen-btn');
        const fullscreenIcon = document.querySelector('.fullscreen-icon');
        const exitFullscreenIcon = document.querySelector('.exit-fullscreen-icon');
        
        if (!fullscreenBtn) return;
        
        // 鐩戝惉鍏ㄥ睆鐘舵€佸彉鍖�
        document.addEventListener('fullscreenchange', onFullScreenChange);
        document.addEventListener('webkitfullscreenchange', onFullScreenChange);
        document.addEventListener('mozfullscreenchange', onFullScreenChange);
        document.addEventListener('MSFullscreenChange', onFullScreenChange);
        
        // 鍒囨崲鍏ㄥ睆鐘舵€�
        fullscreenBtn.addEventListener('click', function() {
            if (!document.fullscreenElement && 
                !document.mozFullScreenElement && 
                !document.webkitFullscreenElement && 
                !document.msFullscreenElement) {
                // 杩涘叆鍏ㄥ睆
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                // 閫€鍑哄叏灞�
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
        });
    }

    // 鍦―OMContentLoaded浜嬩欢涓垵濮嬪寲鍏ㄥ睆鍔熻兘
    setupFullscreenToggle();

    // 淇鍩熷悕娉㈡氮鍔ㄧ敾鏁堟灉锛屼繚鐣欏師濮嬫笎鍙樿壊
    function setupDomainWaveEffect() {
        // 鑾峰彇鍩熷悕鍏冪礌
        const firstPart = document.querySelector('.domain-name .first');
        const lastPart = document.querySelector('.domain-name .last');
        
        if (!firstPart || !lastPart) return;
        
        // 鑾峰彇鍘熷鏂囨湰鍜屾牱寮�
        const firstText = firstPart.textContent;
        const lastText = lastPart.textContent;
        
        // 鑾峰彇鍘熸湁鐨勬牱寮忥紙濡傛笎鍙樿壊锛�
        const computedStyleFirst = window.getComputedStyle(firstPart);
        const computedStyleLast = window.getComputedStyle(lastPart);
        
        // 淇濆瓨鍘熸湁鐨勬牱寮忓睘鎬�
        const originalStyles = {
            firstColor: computedStyleFirst.color,
            firstBackground: computedStyleFirst.background,
            firstBgClip: computedStyleFirst.webkitBackgroundClip || computedStyleFirst.backgroundClip,
            firstTextFillColor: computedStyleFirst.webkitTextFillColor,
            lastColor: computedStyleLast.color,
            lastBackground: computedStyleLast.background,
            lastBgClip: computedStyleLast.webkitBackgroundClip || computedStyleLast.backgroundClip,
            lastTextFillColor: computedStyleLast.webkitTextFillColor
        };
        
        // 娓呯┖鍘熷鍐呭
        firstPart.innerHTML = '';
        lastPart.innerHTML = '';
        
        // 涓虹涓€閮ㄥ垎(ssss)鍒涘缓鍗曠嫭鐨勫瓧姣峴pan锛屽苟淇濈暀鍘熸牱寮�
        for (let i = 0; i < firstText.length; i++) {
            const letterSpan = document.createElement('span');
            letterSpan.className = 'wave-letter';
            letterSpan.textContent = firstText[i];
            letterSpan.style.animationDelay = `${i * 0.1}s`; // 閿欏紑鍔ㄧ敾鏃堕棿
            
            // 搴旂敤鍘熷鏍峰紡鍒版瘡涓瓧姣�
            letterSpan.style.color = originalStyles.firstColor;
            letterSpan.style.background = originalStyles.firstBackground;
            if (originalStyles.firstBgClip) {
                letterSpan.style.webkitBackgroundClip = originalStyles.firstBgClip;
                letterSpan.style.backgroundClip = originalStyles.firstBgClip;
            }
            if (originalStyles.firstTextFillColor) {
                letterSpan.style.webkitTextFillColor = originalStyles.firstTextFillColor;
            }
            
            firstPart.appendChild(letterSpan);
        }
        
        // 涓虹浜岄儴鍒�(ss)鍒涘缓鍗曠嫭鐨勫瓧姣峴pan锛屽苟淇濈暀鍘熸牱寮�
        for (let i = 0; i < lastText.length; i++) {
            const letterSpan = document.createElement('span');
            letterSpan.className = 'wave-letter';
            letterSpan.textContent = lastText[i];
            letterSpan.style.animationDelay = `${(firstText.length + i) * 0.1}s`; // 寤剁画鍔ㄧ敾寤惰繜
            
            // 搴旂敤鍘熷鏍峰紡鍒版瘡涓瓧姣�
            letterSpan.style.color = originalStyles.lastColor;
            letterSpan.style.background = originalStyles.lastBackground;
            if (originalStyles.lastBgClip) {
                letterSpan.style.webkitBackgroundClip = originalStyles.lastBgClip;
                letterSpan.style.backgroundClip = originalStyles.lastBgClip;
            }
            if (originalStyles.lastTextFillColor) {
                letterSpan.style.webkitTextFillColor = originalStyles.lastTextFillColor;
            }
            
            lastPart.appendChild(letterSpan);
        }
    }

    // 鍦―OM鍔犺浇瀹屾垚鍚庤皟鐢�
    setupDomainWaveEffect();

    // 瀹屽杽鐗堟湰鏇存柊鍑芥暟
    function addVersionToResources() {
        const timestamp = new Date().getTime();
        
        // 鏌ユ壘CSS鍜孞S璧勬簮
        const allResources = document.querySelectorAll('link[rel="stylesheet"], script[src]');
        
        allResources.forEach(resource => {
            const src = resource.href || resource.src;
            if (!src) return;
            
            // 鎺掗櫎澶栭儴璧勬簮鎴栦笉闇€瑕佺紦瀛樼牬鍧忕殑璧勬簮
            if (src.includes('//') && !src.includes(window.location.hostname)) return;
            
            // 澶勭悊宸叉湁鐗堟湰鍙傛暟鐨勬儏鍐�
            if (src.includes('?v=')) {
                const newSrc = src.replace(/\?v=[\d\.]+/, `?v=${timestamp}`);
                if (resource.href) {
                    resource.href = newSrc;
                } else {
                    resource.src = newSrc;
                }
            } 
            // 澶勭悊鏈夊叾浠栨煡璇㈠弬鏁扮殑鎯呭喌
            else if (src.includes('?')) {
                const newSrc = `${src}&v=${timestamp}`;
                if (resource.href) {
                    resource.href = newSrc;
                } else {
                    resource.src = newSrc;
                }
            } 
            // 娌℃湁浠讳綍鏌ヨ鍙傛暟鐨勬儏鍐�
            else {
                const newSrc = `${src}?v=${timestamp}`;
                if (resource.href) {
                    resource.href = newSrc;
                } else {
                    resource.src = newSrc;
                }
            }
        });
        
        console.log('璧勬簮鐗堟湰宸叉洿鏂�: ' + timestamp);
        return timestamp;
    }

    // 鍚敤璧勬簮鐗堟湰鏇存柊
    const currentVersion = addVersionToResources();

    // 娆㈣繋璇嚜閫傚簲鏄剧ず閫昏緫
    function handleWelcomeMessageDisplay() {
        const welcomeNotification = document.getElementById('location-notification');
        const welcomeText = document.getElementById('location-message');
        
        // 鐩戞祴娆㈣繋璇搴︽槸鍚﹁秴鍑哄鍣�
        function checkMessageWidth() {
            // 閲嶇疆white-space浠ヤ究姝ｇ‘璁＄畻鍐呭瀹藉害
            welcomeNotification.style.whiteSpace = 'normal';
            
            // 鑾峰彇鍐呭瀹藉害
            const contentWidth = welcomeText.scrollWidth;
            const containerWidth = welcomeNotification.clientWidth - 64; // 鍑忓幓鍐呰竟璺�
            
            if (contentWidth > containerWidth) {
                // 濡傛灉灏忓睆骞曚笂鍐呭澶暱锛岄€傚綋璋冩暣瀛椾綋澶у皬
                if (window.innerWidth <= 480) {
                    welcomeNotification.style.fontSize = '14px';
                    welcomeNotification.style.padding = '12px 20px';
                }
            }
            
            // 鎭㈠white-space璁剧疆
            welcomeNotification.style.whiteSpace = 'nowrap';
        }
        
        // 褰撴杩庢秷鎭樉绀烘椂妫€鏌ュ搴�
        if (welcomeNotification && welcomeText) {
            welcomeNotification.addEventListener('transitionend', function(e) {
                if (e.propertyName === 'opacity' && this.classList.contains('show')) {
                    checkMessageWidth();
                }
            });
        }
    }

    // 淇敼娆㈣繋璇樉绀哄嚱鏁帮紝妫€娴嬩富棰橀€氱煡鏄惁鏄剧ず
    function fetchWelcomeMessage() {
        const welcomeNotification = document.getElementById('location-notification');
        const welcomeText = document.getElementById('location-message');
        const themeNotification = document.querySelector('.theme-notification');
        
        // 璇锋眰娆㈣繋璇瑼PI
        fetch('welcome.php')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                if (data.success && data.message) {
                    // 璁剧疆娆㈣繋鍐呭
                    welcomeText.innerHTML = data.message;
                    
                    // 妫€鏌ヤ富棰橀€氱煡鏄惁鏄剧ず
                    if (themeNotification && themeNotification.classList.contains('show')) {
                        welcomeNotification.classList.add('with-theme');
                        themeNotification.classList.add('with-location');
                    }
                    
                    // 鏄剧ず閫氱煡
                    welcomeNotification.classList.add('show');
                    handleWelcomeMessageDisplay();
                    
                    // 6绉掑悗鑷姩闅愯棌
                    setTimeout(() => {
                        welcomeNotification.classList.add('hide');
                        welcomeNotification.classList.remove('with-theme');
                        if (themeNotification) {
                            themeNotification.classList.remove('with-location');
                        }
                        setTimeout(() => {
                            welcomeNotification.classList.remove('show', 'hide');
                        }, 700);
                    }, 6000);
                }
            })
            .catch(error => {
                console.error('娆㈣繋娑堟伅鑾峰彇澶辫触:', error);
            });
    }

    // 鍦―OM鍔犺浇瀹屾垚鍚庤皟鐢�
    fetchWelcomeMessage();

    // 椤甸潰鍔犺浇瀹屾垚鏃舵樉绀哄唴瀹�
    function handlePageLoad() {
        // 闅愯棌鍔犺浇鍣�
        const loader = document.querySelector('.loader');
        
        // 纭繚鎵€鏈夎祫婧愬姞杞藉畬鎴愶紙鍖呮嫭鍥剧墖銆佸瓧浣撶瓑锛�
        window.addEventListener('load', function() {
            // 鏄剧ず鎵€鏈夊唴瀹�
            document.querySelectorAll('.content, .domain-name, .tagline, .minimal-nav').forEach(el => {
                el.style.opacity = '1';
                el.style.transition = 'opacity 0.5s ease';
            });
            
            // 鍚敤婊氬姩
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            
            // 闅愯棌鍔犺浇鍣�
            if (loader) {
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
                
                // 瀹屽叏绉婚櫎鍔犺浇鍣�
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }
            
            // 鍏朵粬椤甸潰鍒濆鍖栨搷浣�...
        });
        
        // 濡傛灉鍔犺浇鏃堕棿杩囬暱锛堣秴杩�3绉掞級锛屼篃鏄剧ず鍐呭
        setTimeout(function() {
            if (loader && loader.style.opacity !== '0') {
                // 鍚敤婊氬姩
                document.documentElement.style.overflow = '';
                document.body.style.overflow = '';
                
                // 鏄剧ず鎵€鏈夊唴瀹�
                document.querySelectorAll('.content, .domain-name, .tagline, .minimal-nav').forEach(el => {
                    el.style.opacity = '1';
                });
                
                // 闅愯棌鍔犺浇鍣�
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
                
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }
        }, 3000);
    }
    
    // 璋冪敤椤甸潰鍔犺浇澶勭悊
    handlePageLoad();

    // 鏇挎崲鐜版湁鐨勮瀹㈡ā鎬佺獥鍙ｅ姛鑳戒负渚ц竟鏍�
    function setupVisitorsSidebar() {
        const visitorToggle = document.getElementById('visitors-toggle');
        const visitorSidebar = document.getElementById('visitors-sidebar');
        const visitorOverlay = document.getElementById('visitors-overlay');
        const closeSidebar = document.querySelector('.close-sidebar');
        const visitorsList = document.getElementById('visitors-list');
        const totalVisitors = document.getElementById('total-visitors');
        const uniqueLocations = document.getElementById('unique-locations');
        
        // 鎵撳紑渚ц竟鏍�
        function openSidebar(e) {
            e.stopPropagation();
            visitorSidebar.classList.add('open');
            visitorOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            loadVisitors(true); // 寮哄埗鍒锋柊
        }
        
        // 鍏抽棴渚ц竟鏍�
        function closeSidebarFn() {
            visitorSidebar.classList.remove('open');
            visitorOverlay.classList.remove('active');
            document.body.style.overflow = ''; // 鎭㈠婊氬姩
        }
        
        // 鐐瑰嚮鍒囨崲鎸夐挳鎵撳紑渚ц竟鏍忥紝骞剁‘淇濈偣鍑诲浘鏍囦篃鑳借Е鍙�
        if (visitorToggle) {
            visitorToggle.addEventListener('click', openSidebar);
            
            // 纭繚鐐瑰嚮SVG鍥炬爣鍜岃矾寰勪篃鑳借Е鍙戜簨浠�
            const toggleIcon = visitorToggle.querySelector('.toggle-icon');
            if (toggleIcon) {
                toggleIcon.addEventListener('click', function(e) {
                    // 杩欓噷涓嶅啀闇€瑕佸崟鐙鐞嗭紝鍥犱负浜嬩欢浼氬啋娉″埌鐖跺厓绱�
                    // 浣嗘垜浠‘淇濋樆姝㈠啋娉″埌document锛岄槻姝㈢珛鍗冲叧闂�
                    e.stopPropagation();
                });
            }
        }
        
        // 鐐瑰嚮鍏抽棴鎸夐挳
        if (closeSidebar) {
            closeSidebar.addEventListener('click', closeSidebarFn);
        }
        
        // 鐐瑰嚮閬僵灞傚叧闂�
        if (visitorOverlay) {
            visitorOverlay.addEventListener('click', closeSidebarFn);
        }
        
        // ESC閿叧闂�
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && visitorSidebar.classList.contains('open')) {
                closeSidebarFn();
            }
        });
        
        // 淇敼鍏抽棴鍔熻兘锛屽厑璁哥偣鍑讳晶杈规爮澶栦换鎰忎綅缃叧闂�
        function handleClickOutside(e) {
            if (visitorSidebar.classList.contains('open') && 
                !visitorSidebar.contains(e.target) && 
                e.target !== visitorToggle) {
                closeSidebarFn();
            }
        }
        
        // 娣诲姞鐐瑰嚮渚ц竟鏍忓閮ㄥ叧闂姛鑳�
        document.addEventListener('click', handleClickOutside);
        
        // 鍔犺浇璁垮璁板綍 - 杩欓儴鍒嗕唬鐮佷笌涔嬪墠鐨勫姛鑳戒竴鑷�
        function loadVisitors(forceRefresh = false) {
            visitorsList.innerHTML = '<div class="loading-visitors">鍔犺浇涓�...</div>';
            
            // 娣诲姞鏃堕棿鎴虫垨闅忔満鍙傛暟閬垮厤缂撳瓨
            const cacheParam = forceRefresh ? `?t=${Date.now()}` : '';
            
            return fetch(`visitor-log.php${cacheParam}`)
                .then(response => {
                    if (!response.ok) throw new Error('Network response was not ok');
                    return response.json();
                })
                .then(data => {
                    if (data.success && Array.isArray(data.visitors)) {
                        displayVisitors(data.visitors);
                    } else {
                        visitorsList.innerHTML = '<div class="no-visitors">鏆傛棤璁垮璁板綍</div>';
                    }
                })
                .catch(error => {
                    console.error('鏃犳硶鍔犺浇璁垮璁板綍:', error);
                    visitorsList.innerHTML = '<div class="no-visitors">鍔犺浇澶辫触锛岃绋嶅悗鍐嶈瘯</div>';
                });
        }
        
        // 鏄剧ず璁垮璁板綍 - 杩欓儴鍒嗕唬鐮佷笌涔嬪墠鐨勫姛鑳戒竴鑷�
        function displayVisitors(visitors) {
            if (visitors.length === 0) {
                visitorsList.innerHTML = '<div class="no-visitors">鏆傛棤璁垮璁板綍</div>';
                totalVisitors.textContent = '0';
                uniqueLocations.textContent = '0';
                return;
            }
            
            // 璁＄畻鎬昏闂鏁板拰鍞竴鍦扮偣
            const totalVisits = visitors.reduce((sum, visitor) => sum + visitor.visits, 0);
            const locations = new Set(visitors.map(visitor => visitor.location));
            
            totalVisitors.textContent = totalVisits;
            uniqueLocations.textContent = locations.size;
            
            // 鐢熸垚璁垮鍒楄〃HTML锛屼娇鐢ㄦ敼杩涚殑缁撴瀯
            const visitorsHTML = visitors.map(visitor => {
                const time = formatTime(visitor.last_visit);
                return `
                    <div class="visitor-item">
                        <div class="visitor-count">${visitor.visits}</div>
                        <div class="visitor-info">
                            <div class="visitor-location">
                                <span class="location-label"></span>
                                <span class="highlight-location">${visitor.location}</span>
                                <span class="location-label">鐨勬湅鍙�</span>
                            </div>
                        </div>
                        <div class="visitor-time">${time}</div>
                    </div>
                `;
            }).join('');
            
            visitorsList.innerHTML = visitorsHTML;
        }
        
        // 鏍煎紡鍖栨椂闂� - 淇濇寔涓嶅彉
        function formatTime(timestamp) {
            const date = new Date(timestamp * 1000);
            const now = new Date();
            const diffMs = now - date;
            const diffSec = Math.floor(diffMs / 1000);
            const diffMin = Math.floor(diffSec / 60);
            const diffHour = Math.floor(diffMin / 60);
            const diffDay = Math.floor(diffHour / 24);
            
            if (diffSec < 60) {
                return '鍒氬垰';
            } else if (diffMin < 60) {
                return `${diffMin}鍒嗛挓鍓峘;
            } else if (diffHour < 24) {
                return `${diffHour}灏忔椂鍓峘;
            } else if (diffDay < 7) {
                return `${diffDay}澶╁墠`;
            } else {
                return `${date.getFullYear()}-${padZero(date.getMonth() + 1)}-${padZero(date.getDate())}`;
            }
        }
        
        // 琛ラ浂 - 淇濇寔涓嶅彉
        function padZero(num) {
            return num.toString().padStart(2, '0');
        }

        // 娣诲姞涓嬫媺鍒锋柊鍔熻兘
        function setupPullToRefresh() {
            let touchStartY = 0;
            let touchEndY = 0;
            const minSwipeDistance = 80;
            
            visitorsList.addEventListener('touchstart', e => {
                touchStartY = e.touches[0].clientY;
            }, { passive: true });
            
            visitorsList.addEventListener('touchmove', e => {
                touchEndY = e.touches[0].clientY;
            }, { passive: true });
            
            visitorsList.addEventListener('touchend', () => {
                if (touchEndY - touchStartY > minSwipeDistance) {
                    // 鍚戜笅鎷夊姩瓒呰繃闃堝€硷紝鍒锋柊璁垮鍒楄〃
                    loadVisitors(true);
                }
            });
        }

        // 鍦╯etupVisitorsSidebar鍑芥暟鏈熬璋冪敤
        setupPullToRefresh();

        // 娣诲姞鍒锋柊鎸夐挳浜嬩欢鐩戝惉
        const refreshBtn = document.getElementById('refresh-visitors');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', function() {
                this.classList.add('loading');
                loadVisitors(true).finally(() => {
                    setTimeout(() => this.classList.remove('loading'), 500);
                });
            });
        }
    }

    // 鏇存柊鍑芥暟璋冪敤
    setupVisitorsSidebar();

    // 鏇存柊璁垮鏀堕泦鍑芥暟
    function recordVisitor() {
        // 妫€鏌ユ槸鍚﹂渶瑕佽褰�
        const lastRecord = parseInt(localStorage.getItem('lastVisitorRecord') || '0');
        const now = Math.floor(Date.now() / 1000);
        const recordInterval = 300; // 5鍒嗛挓闂撮殧
        
        // 濡傛灉5鍒嗛挓鍐呭凡璁板綍杩囷紝鍒欒烦杩�
        if (now - lastRecord < recordInterval) {
            console.log(`璺濈涓婃璁板綍浠� ${now - lastRecord} 绉掞紝璺宠繃璁板綍`);
            return;
        }
        
        console.log('寮€濮嬭褰曡瀹俊鎭�...');
        
        // 浣跨敤鏂扮殑record-visitor.php
        fetch('record-visitor.php?t=' + Date.now())
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log('鎴愬姛璁板綍璁垮淇℃伅:', data);
                    localStorage.setItem('visitorRecorded', 'true');
                    localStorage.setItem('lastVisitorRecord', now.toString());
                } else {
                    console.error('璁板綍璁垮淇℃伅澶辫触:', data);
                }
            })
            .catch(error => {
                console.error('璋冪敤record-visitor.php澶辫触:', error);
            });
    }

    // 鍦ㄩ〉闈㈠姞杞藉悗璋冪敤recordVisitor鍑芥暟
    setTimeout(recordVisitor, 1500);
}); 
