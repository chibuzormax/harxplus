//section one slide show function 
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("section1");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "grid";
    setTimeout(showSlides, 8000);
}
showSlides();

// Our clients slide show function
let clientSlideIndex = 1;
showClientSlides(clientSlideIndex);

function plusSlides(n) {
  showClientSlides(clientSlideIndex += n);
}

function currentSlide(n) {
  showClientSlides(clientSlideIndex = n);
}

function showClientSlides(n) {
  let slides = document.getElementsByClassName("client");
  if (n > slides.length) {clientSlideIndex = 1}    
  if (n < 1) {clientSlideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[clientSlideIndex-1].style.display = "grid";
}
