const switchBtn = document.querySelector('.switch-container input');

// 浠  localStorage 涓幏鍙栫敤鎴蜂富棰樻ā寮 
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
    switchBtn.checked = currentTheme === 'dark-mode';
}

switchBtn.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem('theme', 'dark-mode');
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem('theme', '');
    }
});


console.log('\n' + ' %c Whois Query by Yang庐 %c HTTPS://WWW.YANGR.COM ' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0; font-size:18px;', 'background: #fadfa3; padding:5px 0; font-size:18px;');