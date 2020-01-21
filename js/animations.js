// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

// check if element is in view
function inView(element) {
    var elementHeight = element.clientHeight;
    if (elementHeight > 0) {
        // get window height
        var windowHeight = window.innerHeight;
        // get number of pixels that the document is scrolled
        var scrollY = window.scrollY || window.pageYOffset;

        // get current scroll position (distance from the top of the page to the bottom of the current viewport)
        var scrollPosition = scrollY + windowHeight;
        // get element position (distance from the top of the page to the bottom of the element)
        var elementPosition = element.getBoundingClientRect().top + scrollY + 100;

        // is scroll position greater than element position? (is element in view?)
        if (scrollPosition > elementPosition) {
            return true;
        }

        return false;
    }
    else
        return false;
}

// animate element when it is in view
function animate() {
    let elements = document.getElementsByClassName('animated');
    Array.from(elements).forEach(function (element) {         
        // is element in view?
        if (inView(element)) {
            // element is in view
            element.classList.add("fadeInUp");
        }
    });
}

// smooth scroll upon navigation to an internal anchor
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});