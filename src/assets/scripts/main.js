/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(
    ".slider-wrapper .slide-button"
  );
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  // La acción slide de las imágenes según los clicks del botón slide.
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;

      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  //Mostrar  esconder el botón de slide según la posición.
  const handleSlideButtons = () => {
    slideButtons[0].style.display =
      imageList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display =
      imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  };

  imageList.addEventListener("scroll", () => {
    handleSlideButtons();
  });
};

window.addEventListener("load", initSlider);
