function setTheme(themeName) {
    const btns = document.getElementsByClassName('colorSwitchBtn');
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove("colorSwitchBtnActive");
    }
    if (themeName == 'theme-green') {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
        document.getElementById('switchGreen').classList.add("colorSwitchBtnActive");
    }
    else if (themeName == 'theme-purple') {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
        document.getElementById('switchPurple').classList.add("colorSwitchBtnActive");
    }
    else {
        localStorage.setItem('theme', 'theme-blue');
        document.documentElement.className = 'theme-blue';
        document.getElementById('switchBlue').classList.add("colorSwitchBtnActive");
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
