function setTheme(themeName) {
    let btns = document.getElementsByClassName('colorSwitchBtn');
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove("colorSwitchBtnActive");
    }
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    if (themeName == 'theme-green') {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
        document.getElementById('switchGreen').classList.add("colorSwitchBtnActive");
        link.href = '../images/favicon_green.ico';
        document.getElementsByTagName('head')[0].appendChild(link);

    }
    else if (themeName == 'theme-purple') {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
        document.getElementById('switchPurple').classList.add("colorSwitchBtnActive");
        link.href = '../images/favicon_purple.ico';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    else {
        localStorage.setItem('theme', 'theme-blue');
        document.documentElement.className = 'theme-blue';
        document.getElementById('switchBlue').classList.add("colorSwitchBtnActive");
        link.href = '../images/favicon_blue.ico';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
}
(function () {
    if (localStorage.getItem('theme') === 'theme-green') {
        setTheme('theme-green');
    } 
    else if (localStorage.getItem('theme') === 'theme-purple') {
        setTheme('theme-purple');
    } 
    else {
        setTheme('theme-blue');
    }
})();
