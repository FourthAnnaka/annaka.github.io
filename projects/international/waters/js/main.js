// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("nav");
// var waves = document.getElementsByClassName("motionoftheocean");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  // Get the navbar

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    // waves.classList.add("rockmetosleep");
  } else {
    navbar.classList.remove("sticky");
    // waves.classList.remove("rockmetosleep");
  }
}
