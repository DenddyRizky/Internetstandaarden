var index = 0;
var rotationTime = 3000;
slideShow();

function slideShow() {
    var currentSlide;
    var slides = document.getElementsByClassName("slide");

    for (currentSlide = 0; currentSlide < slides.length; currentSlide++) {
        slides[currentSlide].style.display = "none";
    }
    index++;
    if (index > slides.length) {
        index = 1;
    }
    slides[index - 1].style.display = "block";
    setTimeout(slideShow, rotationTime);

}
// Bron  https://www.w3schools.com/w3css/w3css_slideshow.asp