//move second text
window.onscroll = function () { scrollFunction(); };

document.getElementById("ball-line-1").style.transform = "translateY(-100%)";
document.getElementById("ball-line-2").style.transform = "translateX(-100%)";

function scrollFunction() {
    if (document.documentElement.scrollTop > 80 && document.documentElement.scrollTop < 120) {
        //if element is past 100vh
        document.getElementById("ball-line-1").style.transform = "translateY(-50%)";
        document.getElementById("ball-line-2").style.transform = "translateX(-50%)";
    } else if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("ball-line-1").style.transform = "translateY(0%)";
        document.getElementById("ball-line-2").style.transform = "translateX(0%)";
    } else {
        document.getElementById("ball-line-1").style.transform = "translateY(-100%)";
        document.getElementById("ball-line-2").style.transform = "translateX(-100%)";
    }
    console.log(document.body.scrollTop)
}

console.log(window.innerHeight)