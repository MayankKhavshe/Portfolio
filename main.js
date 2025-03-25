var typed = new Typed(".text", {
    strings:["Software Engineer", "Full Stack Developer", "Data Scientist"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

window.onload = function() {
    document.querySelectorAll('.progress-line').forEach(function(bar) {
        bar.style.width = bar.querySelector('span').style.width;
    });
};
