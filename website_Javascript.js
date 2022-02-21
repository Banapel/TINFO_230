// javascript to create a scroll to top button

// create the button
mybutton = document.getElementByID("myBtn");

// show the button once the users scrolls down 20 px
windows.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    }else {
        mybutton.style.display = "none";
    }
    // once the button is pressed, scroll to the top of the page
    function topFunction () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}