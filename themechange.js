function changeColor() {
    let themeOption = document.getElementById("theme").options.selectedIndex;
    let themeColor = document.getElementById("wrapper");
    let titleColor = document.getElementById("title");
    if (themeOption === 0) {
        themeColor.style.backgroundColor = 'white';
        titleColor.style.color = 'black';
    }
    if (themeOption === 1) {
        themeColor.style.backgroundColor = 'black';
        titleColor.style.color = 'white';
    }
    if (themeOption === 2) {
        themeColor.style.backgroundColor = 'blue';
        titleColor.style.color = 'white';
    }
}
changeColor();