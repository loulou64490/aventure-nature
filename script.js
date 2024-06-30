document.oncontextmenu = new Function("return false;")
window.ondragstart = function () { return false }

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const header = document.getElementById('header');

    function handleScroll() {
        if (window.scrollY === 0 && !menuBtn.checked) {
            header.classList.remove('scrolled');
        } else {
            header.classList.add('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    menuBtn.addEventListener('change', function () {
        if (menuBtn.checked) {
            header.classList.add('scrolled');
        } else {
            handleScroll();
        }
    });

    handleScroll();
});

function hideMenu() {
    var checkbox = document.getElementById("menu-btn");
    checkbox.checked = false;
}