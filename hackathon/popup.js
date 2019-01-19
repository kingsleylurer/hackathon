'use strict';

// hmm...
const button1 = document.querySelector('#summary');
const button2 = document.querySelector('.button-container');
const button3 = document.querySelector('#bug_button');
const button4 = document.querySelector('.bug-report');
const body = document.querySelector('body');
const button = document.querySelector('.twitter');

button1.addEventListener("mouseover", function () {
    body.classList.add('linked')
},false);

button1.addEventListener("mouseout", function () {
    body.classList.remove('linked')
}, false);


button2.addEventListener("click", function () {
    if (bug_form.style.display === "none") {
        body.style.display = "none";
        button_container.style.display = "none";
        bug_form.style.display = "flex";
    } else {
        body.style.display = "none";
        button_container.style.display = "flex";
        main_page_summary.style.display = "flex";
    }
});