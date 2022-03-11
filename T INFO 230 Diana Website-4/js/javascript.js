
const faders = document.querySelectorAll
('.fade-in');

const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -250% 0px"
};
const appearOnScroll = new IntersectionObserver
(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry=> {
    if(!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target); //stops looking
    }
  });
},
  appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

// text slideshow
var quotes = new Array();

quotes[0] = "Life is too short to have boring hair";
quotes[1] = "Eat, Sleep, Do Hair, Repeat";
quotes[2] = "Do not waste a good hair day";
console.log(quotes);
var counter = 0;

function loop() {
    if (counter > 2) counter = 0;
    document.getElementById('textslide').firstElementChild.innerHTML = quotes[counter];
    counter++;
    console.log(counter);
    setTimeout(loop, 3000);
}
loop();

var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    }
