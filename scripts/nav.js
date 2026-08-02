var navDesktop = document.querySelector(".nav-desktop")
var navMobile = document.querySelector(".nav-mobile")
var main = document.querySelector("main");
var scrollThreshhold = 150
var navMobileOn = false


if (window.innerWidth <= 700) {
    navMobileOn = true
}

if (navMobileOn) {
    navDesktop.style.display = "none";
    navMobile.style.display = "block";
    main.style.padding = "10dvh 2dvw";

    var prevScrollpos = window.pageYOffset;

    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (currentScrollPos >= scrollThreshhold) {
            navMobile.style.top = "8px";
            navMobileOn = true
        }
        else {
            navMobileOn = false
        }

        if (navMobileOn) {
            if (prevScrollpos > currentScrollPos) {
                navMobile.style.top = "8px";
            } else {
                navMobile.style.top = "-200px";
            }
        }

        prevScrollpos = currentScrollPos;
    }
}
else {
    var prevScrollpos = window.pageYOffset;

    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        var navSmallOn = false
        if (currentScrollPos >= 300) {
            navMobile.style.top = "8px";
            navMobile.style.display = "block";
            navSmallOn = true
        }
        else {
            navSmallOn = false
        }

        if (navSmallOn) {
            if (prevScrollpos > currentScrollPos) {
                navMobile.style.top = "8px";
            } else {
                navMobile.style.top = "-200px";
            }
        }

        if (currentScrollPos <= 300) {
            navMobile.style.top = "-200px";
            navMobile.style.display = "none";
        }

        prevScrollpos = currentScrollPos;
    }
}

