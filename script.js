document.oncontextmenu = new Function("return false;")
window.ondragstart = function () { return false }

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

function hideMenu() {
    var checkbox = document.getElementById("menu-btn");
    checkbox.checked = false;
}