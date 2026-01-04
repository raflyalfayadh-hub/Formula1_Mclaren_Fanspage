/* SCROLL EFFECT */
const scrollElements = document.querySelectorAll(".scroll");

const elementInView = el =>
    el.getBoundingClientRect().top < window.innerHeight - 100;

const displayScroll = el => el.classList.add("show");

const hideScroll = el => el.classList.remove("show");

const handleScroll = () => {
    scrollElements.forEach(el => {
        elementInView(el) ? displayScroll(el) : hideScroll(el);
    });
};

window.addEventListener("scroll", handleScroll);

/* DARK / LIGHT MODE */
function toggleMode() {
    document.body.classList.toggle("light");
}

/* PARALLAX EFFECT */
window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    document.querySelector(".banner").style.transform =
        `translateY(${scrolled * 0.3}px)`;
});

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 3000);
});

const logo = document.querySelector(".logo");
const engine = document.getElementById("engine");

logo.addEventListener("mouseenter", () => {
    engine.currentTime = 0;
    engine.play();
});

logo.addEventListener("mouseleave", () => {
    engine.pause();
});

// Sound engine saat hover
const items = document.querySelectorAll('.gallery-item');

items.forEach(item => {
    const audioSrc = item.getAttribute('data-audio');
    const audio = new Audio(audioSrc);

    item.addEventListener('mouseenter', () => {
        audio.currentTime = 0;
        audio.play();
    });

    item.addEventListener('mouseleave', () => {
        audio.pause();
        audio.currentTime = 0;
    });
});




