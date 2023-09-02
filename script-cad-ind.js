document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slider div");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex = 0;
  
    // Función para mostrar la diapositiva actual
    function showSlide(index) {
      if (index < 0) {
        currentIndex = slides.length - 1;
      } else if (index >= slides.length) {
        currentIndex = 0;
      }
  
      // Calcula la transformación horizontal para mostrar la diapositiva actual
      const translateX = -currentIndex * 100;
      slider.style.transform = `translateX(${translateX}%)`;
    }
  
    // Función para avanzar a la siguiente diapositiva
    function nextSlide() {
      currentIndex++;
      showSlide(currentIndex);
    }
  
    // Función para retroceder a la diapositiva anterior
    function prevSlide() {
      currentIndex--;
      showSlide(currentIndex);
    }
  
    // Agrega eventos a los botones de navegación
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
  
    // Inicializa el carrusel mostrando la primera diapositiva
    showSlide(currentIndex);
  });
  