// Fonction pour ajouter ou supprimer la classe selon la position de défilement
function handleScroll() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}
