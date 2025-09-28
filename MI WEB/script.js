document.addEventListener('DOMContentLoaded', () => {
  // Botón de consulta
  const boton = document.getElementById('btn-accion');
  if (boton) {
    boton.addEventListener('click', () => {
      alert('Gracias por tu interés en Confecciones Ilvia ✂️');
    });
  }

  // Carruseles múltiples
  const carruseles = document.querySelectorAll('.carrusel');

  carruseles.forEach(carrusel => {
    const slides = carrusel.querySelector('.slides');
    const images = carrusel.querySelectorAll('.slides img');
    const prev = carrusel.querySelector('.prev');
    const next = carrusel.querySelector('.next');
    let index = 0;

    function showSlide(i) {
      if (i < 0) index = images.length - 1;
      else if (i >= images.length) index = 0;
      else index = i;
      slides.style.transform = `translateX(${-index * 100}%)`;
    }

    prev.addEventListener('click', () => showSlide(index - 1));
    next.addEventListener('click', () => showSlide(index + 1));

    // Auto-slide cada 4 segundos
    setInterval(() => showSlide(index + 1), 4000);
  });
});
