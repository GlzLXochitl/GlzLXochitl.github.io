setTimeout(function() {
    var intro = document.querySelector('#intro');
    intro.classList.add('hide');

    setTimeout(function() {
        intro.style.display = 'none';
    }, 2000); // Este tiempo debe ser igual a la duración de la transición en CSS
}, 1000);