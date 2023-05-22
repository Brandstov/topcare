// Smaller navbar on scroll
window.onscroll = function () { navResize(); scrollLines();};

function navResize() {
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

//Scroll lines
document.getElementById("red-line").style.transform = "translateY(-100%)";
document.getElementById("blue-line").style.transform = "translateX(-100%)";

function scrollLines() {
    if (document.documentElement.scrollTop > 50 && document.documentElement.scrollTop < 150) {
        document.getElementById("red-line").style.transform = "translateY(-100%)";
        document.getElementById("blue-line").style.transform = "translateX(-100%)";
    } else if (document.documentElement.scrollTop > 150 && document.documentElement.scrollTop < 250) {
        document.getElementById("red-line").style.transform = "translateY(-80%)";
        document.getElementById("blue-line").style.transform = "translateX(-80%)";
    } else if (document.documentElement.scrollTop > 250 && document.documentElement.scrollTop < 350) {
        document.getElementById("red-line").style.transform = "translateY(-60%)";
        document.getElementById("blue-line").style.transform = "translateX(-60%)";
    } else if (document.documentElement.scrollTop > 350 && document.documentElement.scrollTop < 450) {
        document.getElementById("red-line").style.transform = "translateY(-40%)";
        document.getElementById("blue-line").style.transform = "translateX(-40%)";
    } else if (document.documentElement.scrollTop > 450 && document.documentElement.scrollTop < 550) {
        document.getElementById("red-line").style.transform = "translateY(-20%)";
        document.getElementById("blue-line").style.transform = "translateX(-20%)";
    } else if (document.documentElement.scrollTop > 550 && document.documentElement.scrollTop < 650) {
        document.getElementById("red-line").style.transform = "translateY(0%)";
        document.getElementById("blue-line").style.transform = "translateX(0%)";
    } else if (document.documentElement.scrollTop > 650 && document.documentElement.scrollTop < 750) {
        document.getElementById("red-line").style.transform = "translateY(0%)";
        document.getElementById("blue-line").style.transform = "translateX(0%)";
    }
}

const percentage = document.getElementById("percentage");

window.addEventListener('scroll', function (event) {
    if (isInViewport(percentage)) {

    }
}, false);

let count = true

function isInViewport(element) {
    // Get the bounding client rectangle position in the viewport
    var bounding = element.getBoundingClientRect();

    // Checking part. Here the code checks if it's *fully* visible
    // Edit this part if you just want a partial visibility
    if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        
        something()
        console.log('In the viewport! :)');
        return true;
    } else {
        console.log('Not in the viewport. :(');
        return false;
    }
}

var something = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            //Count effect
        let valueDisplays = document.querySelectorAll('.num');
        let interval = 3000;

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
        }
    };
})();
