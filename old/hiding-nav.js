var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var navSmallOn = false
    if (currentScrollPos >= 300) {
        document.querySelector(".nav-small").style.top = "8px";
        document.querySelector(".nav-small").style.display = "block";
        navSmallOn = true
    }
    else {
        navSmallOn = false
    }

    if (navSmallOn) {
        if (prevScrollpos > currentScrollPos) {
            document.querySelector(".nav-small").style.top = "8px";
        } else {
            document.querySelector(".nav-small").style.top = "-200px";
        }
    }

    if (currentScrollPos <= 300) {
        document.querySelector(".nav-small").style.top = "-200px";
        document.querySelector(".nav-small").style.display = "none";
    }

    prevScrollpos = currentScrollPos;
}