// Smaller navbar on scroll
window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("nav").style.padding = "28px 200px";
    } else {
        document.getElementById("nav").style.padding = "60px 200px";
    }
}

//Curve effect
const scroll = document.querySelector('.curve');

window.addEventListener('scroll', function () {
    const value = 1 + window.scrollY / -500;
    scroll.style.transform = `scaleY(${value})`;
});

//Count effect
let valueDisplays = document.querySelectorAll('.num');
let interval = 1000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 20;
    let endValue = parseInt(valueDisplay.getAttribute('data-val'));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

//Appear effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//TEST
const inViewport = (entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

// Attach observer to every [data-inviewport] element:
const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
});