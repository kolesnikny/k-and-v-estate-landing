const slides = document.getElementsByClassName("slider__item");
for (let number = 0; number < slides.length; number++) {
  slides[number].classList.toggle("slider__item--show");
}

/*
slides[3].classList.toggle("slider__item--show");
*/

/*
const showSlides = () => {
  for (let nunber = 0; number < slides.length; number++) {
    slides[number].classList.toggle("slider__item--show");
  }
};
*/
/*
let slideIndex = 0;
showSlides();

const showSlides = () => {
  let number;
  let slides = document.getElementsByClassName("slider__item");

  
  for (number = 0; number < slides.length; number++) {
    slides[slideIndex - 1].classList.toggle("slider__item");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.toggle("slider__item--show");
  setTimeout(showSlides, 1000);
};
*/
