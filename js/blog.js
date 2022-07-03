//Get the button
var scrollButton = document.getElementById("scrollToTop");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        scrollButton.classList.add('visible')
        scrollButton.classList.remove('hidden')
    }
    else {
        scrollButton.classList.remove('visible')
        scrollButton.classList.add('hidden')
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}