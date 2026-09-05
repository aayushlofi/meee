/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================================
   SMOOTH ANCHOR SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================
   SUBTLE PARALLAX FOR HERO
========================================= */

const heroContent = document.querySelector(".hero-content");

window.addEventListener(
    "scroll",
    () => {

        if (!heroContent) return;

        const scrollY = window.scrollY;

        if (scrollY < window.innerHeight) {

            heroContent.style.transform =
                `translateY(${scrollY * 0.12}px)`;

            heroContent.style.opacity =
                Math.max(0, 1 - scrollY / (window.innerHeight * 0.8));

        }

    },
    {
        passive: true
    }
);


/* =========================================
   DYNAMIC CURRENT YEAR
========================================= */

const footerCopyright = document.querySelector(".footer span");

if (footerCopyright) {

    // Keeps the requested visual format while
    // allowing easy future year updates.
    footerCopyright.textContent = "© aayush. 00:00";

}
