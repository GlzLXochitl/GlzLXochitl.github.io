/* MODAL */
document.addEventListener('DOMContentLoaded', (event) => {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
    myModal.show();
});

/* ANIMACION DE INTRO */
setTimeout(function() {
    var intro = document.querySelector('#intro');
    intro.classList.add('hide');

    setTimeout(function() {
        intro.style.display = 'none';
    }, 2000); // Este tiempo debe ser igual a la duración de la transición en CSS
}, 1000);

/* ANIMACION DE NAV */
window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("scrolled", window.scrollY > 100);
});

/* ANIMACION DE LAS REDES DEL NAV */
window.addEventListener('scroll', function() {
    var socialMedia = document.querySelector('.social-media-disposition');
    if (window.pageYOffset > 100) { // puedes ajustar este valor
        socialMedia.classList.add('hide');
    } else {
        socialMedia.classList.remove('hide');
    }
});

