document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".banner-title", { opacity: 0, y: 100, duration: 1, delay: 2 });
    gsap.from(".banner-subtitle", { opacity: 0, y: -1000, duration: 1, delay: 2.2 });
    gsap.from(".header", { opacity: 0, y: -100, duration: 1 });
    gsap.from(".header-mobile__button", { opacity: 0, y: -100, duration: 1 });
    gsap.from(".banner", { opacity: 0, y: -100, duration: 1, delay: 1 });
    gsap.fromTo(".banner-main", { opacity: 0 }, { opacity: 0.5, duration: 1  });
})



function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 300;
    if (elem.classList.contains("gs__fromLeft")) {
        x = -100;
        y = 0;
    } else if (elem.classList.contains("gs__fromRight")) {
        x = 100;
        y = 0;
    } else if (elem.classList.contains("gs__fromTop")) {
        x = 0;
        y = -1000;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        duration: 2,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}

function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
}



function animate(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 300;
    if (elem.classList.contains("animate__Left")) {
        x = -100;
        y = 0;
    } else if (elem.classList.contains("animate__Right")) {
        x = 100;
        y = 0;
    } else if (elem.classList.contains("animate__Top")) {
        x = 0;
        y = -100;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        duration: 4.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}

function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
}



document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs").forEach(function (elem) {
        hide(elem);

        ScrollTrigger.create({
            trigger: elem,
            markers: false,
            onEnter: function () { animateFrom(elem) },
            onEnterBack: function () { animateFrom(elem, -1) },
            onLeave: function () { hide(elem) }
        });
    });

    gsap.utils.toArray(".animate").forEach(function (elem) {
        hide(elem);

        ScrollTrigger.create({
            trigger: elem,
            markers: false,
            onEnter: function () { animate(elem) },
            onEnterBack: function () { animate(elem, -1) },
            onLeave: function () { hide(elem) }
        });
    });
});



// LINK TO SECTION
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    let links = gsap.utils.toArray("nav a");
    links.forEach(a => {
        let element = document.querySelector(a.getAttribute("href")),
            linkST = ScrollTrigger.create({
                trigger: element,
                start: "top top"
            });
        ScrollTrigger.create({
            trigger: element,
            start: "top center",
            end: "bottom center",
            onToggle: self => self.isActive && setActive(a)
        });
        a.addEventListener("click", e => {
            e.preventDefault();
            gsap.to(window, { duration: 1.15, scrollTo: linkST.start, overwrite: "auto" });
        });
    });

    function setActive(link) {
        links.forEach(el => el.classList.remove("active"));
        link.classList.add("active");
    }
})