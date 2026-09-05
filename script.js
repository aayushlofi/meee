/* =========================================
   ENTER ARCHIVE
========================================= */

const enterArchive = document.getElementById("enterArchive");
const aboutSection = document.getElementById("about");

enterArchive.addEventListener("click", () => {

    aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


/* =========================================
   ARCHIVE HOVER FOCUS
========================================= */

const archiveItems = document.querySelectorAll(".archive-item");

archiveItems.forEach((item) => {

    item.addEventListener("mouseenter", () => {

        document.body.classList.add("archive-focus");

    });

    item.addEventListener("mouseleave", () => {

        document.body.classList.remove("archive-focus");

    });

});


/* =========================================
   IMAGE FALLBACK
========================================= */

const images = document.querySelectorAll("img");

images.forEach((image) => {

    image.addEventListener("error", () => {

        image.style.display = "none";

        image.parentElement.classList.add("image-missing");

    });

});


/* =========================================
   AUDIO
========================================= */

const audioPlayer = document.getElementById("audioPlayer");

audioPlayer.addEventListener("play", () => {

    document.body.classList.add("audio-playing");

});

audioPlayer.addEventListener("pause", () => {

    document.body.classList.remove("audio-playing");

});

audioPlayer.addEventListener("ended", () => {

    document.body.classList.remove("audio-playing");

});


/* =========================================
   SMALL SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".about-content, .archive-item, .dedication-content"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});
