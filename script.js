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

/* ANIMACION DE LOGOS */
function copyToClipboardAndShowAlert(textToCopy) {
    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(textToCopy).then(function() {
      // Mostrar la alerta después de copiar el texto
      showAlert();
    }).catch(function(error) {
      console.error('Error al copiar al portapapeles: ', error);
    });
  }
  
  function showAlert() {
    var alertDiv = document.getElementById('alertMessage');
    alertDiv.classList.add('show'); // Hacer visible el div
    alertDiv.style.display = 'block'; // Asegurarse de que el div sea un bloque
    
    setTimeout(function() {
      alertDiv.classList.remove('show'); // Remover la clase después de 3 segundos
      setTimeout(function() { // Esperar a que termine la transición de opacidad para ocultar el div
        alertDiv.style.display = 'none';
      }, 500); // Coincide con la duración de la transición
    }, 3000);
  }
  