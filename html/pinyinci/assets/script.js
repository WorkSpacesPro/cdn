/*more details button*/
const container = document.querySelector(".info-box");
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  container.classList.toggle("active");
});

/*vibration*/
function vibrate() {
  navigator.vibrate(6);
}

// Zoom in up effect add in every social media button one by one
const socialMediaLinks = document.querySelectorAll(".social-media div");

// ON SCROLL REVEAL SMALL CARDS
ScrollReveal().reveal(socialMediaLinks, {
  duration: 1000,
  opacity: 0,
  distance: "30%",
  origin: "bottom",
  scale: 0.9,
});

// on load name effect 
setTimeout(() => document.querySelector('.name').classList.add('loaded'), 500);

// 鍒囨崲鎼滅储妗嗘樉绀虹姸鎬 
function toggleSearch() {
  const searchContainer = document.querySelector('.search-container');
  const shareMenu = document.querySelector('.share-menu');
  
  searchContainer.classList.toggle('active');
  shareMenu.classList.remove('active'); // 鍏抽棴鍒嗕韩鑿滃崟
}

// 鍒囨崲鍒嗕韩鑿滃崟鏄剧ず鐘舵€ 
function toggleShare() {
  const shareMenu = document.querySelector('.share-menu');
  const searchContainer = document.querySelector('.search-container');
  
  shareMenu.classList.toggle('active');
  searchContainer.classList.remove('active'); // 鍏抽棴鎼滅储妗 
}

// 鍒嗕韩鍒板井淇 
function shareToWeChat() {
  alert('璇蜂娇鐢ㄥ井淇℃壂鎻忎簩缁寸爜鍒嗕韩');
}

// 鍒嗕韩鍒板井鍗 
function shareToWeibo() {
  const text = encodeURIComponent('鍛ㄧ憺鍑殑涓汉缃戠珯');
  const url = encodeURIComponent(window.location.href);
  window.open(`http://service.weibo.com/share/share.php?url=${url}&title=${text}`);
}

// 澶嶅埗閾炬帴
function copyLink() {
  navigator.clipboard.writeText(window.location.href)
    .then(() => alert('閾炬帴宸插鍒跺埌鍓创鏉 '))
    .catch(err => console.error('澶嶅埗澶辫触:', err));
}

// 鐐瑰嚮椤甸潰鍏朵粬鍦版柟鍏抽棴鑿滃崟
document.addEventListener('click', (e) => {
  const searchContainer = document.querySelector('.search-container');
  const shareMenu = document.querySelector('.share-menu');
  const searchBtn = document.querySelector('.search-btn');
  const shareBtn = document.querySelector('.share-btn');
  
  if (!searchContainer.contains(e.target) && !searchBtn.contains(e.target)) {
    searchContainer.classList.remove('active');
  }
  
  if (!shareMenu.contains(e.target) && !shareBtn.contains(e.target)) {
    shareMenu.classList.remove('active');
  }
});

// 鍦ㄦ枃浠舵湯灏炬坊鍔犱富棰樺垏鎹㈠姛鑳 
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// 妫€鏌ユ湰鍦板瓨鍌ㄤ腑鐨勪富棰樿缃 
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  themeToggle.checked = currentTheme === 'dark';
} else {
  // 濡傛灉娌℃湁瀛樺偍鐨勪富棰樿缃紝鍒欎娇鐢ㄧ郴缁熷亸濂 
  themeToggle.checked = prefersDarkScheme.matches;
  document.documentElement.setAttribute('data-theme', prefersDarkScheme.matches ? 'dark' : 'light');
}

// 鐩戝惉涓婚鍒囨崲
themeToggle.addEventListener('change', function() {
  const theme = this.checked ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});

// 鐩戝惉绯荤粺涓婚鍙樺寲
prefersDarkScheme.addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    const theme = e.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    themeToggle.checked = e.matches;
  }
});