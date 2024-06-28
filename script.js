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

function switchCheckbox() {
    // Récupère la case à cocher par son ID
    var checkbox = document.getElementById("menu-btn");
    // Bascule l'état de la case à cocher
    checkbox.checked = false;
}