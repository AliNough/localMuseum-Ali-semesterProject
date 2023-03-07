const button = document.getElementById("js-toggle-button");
const menu = document.getElementById("js-menu");

button.addEventListener("click", () => {
  menu.classList.toggle("is-visible");
});

//author: unknown
//src: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// go to top button:
let topButton = document.getElementById("goToTopButton");


window.onscroll = function() {scrollFunction()};

function goToTopFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

console.log("sub madafakka");