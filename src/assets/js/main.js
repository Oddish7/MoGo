// Bootstrap
import * as bootstrap from 'bootstrap'
import * as Popper from "@popperjs/core"

// Slider
new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const donutbtn1 = document.querySelector('.donut-button-1');
const donutbtn2 = document.querySelector('.donut-button-2');
const donutbtn3 = document.querySelector('.donut-button-3');
let donut = true,
    donutCount = document.querySelector('.donut-count-1').innerHTML;
    donutCount = document.querySelector('.donut-count-2').innerHTML;
    donutCount = document.querySelector('.donut-count-3').innerHTML;
donutbtn1.addEventListener('click', () => {
    donutCount = donut ? ++donutCount : --donutCount;
    donut = !donut;
    document.querySelector('.donut-count-1').innerHTML = donutCount;
},
donutbtn2.addEventListener('click', () => {
    donutCount = donut ? ++donutCount : --donutCount;
    donut = !donut;
    document.querySelector('.donut-count-2').innerHTML = donutCount;
},
donutbtn3.addEventListener('click', () => {
    donutCount = donut ? ++donutCount : --donutCount;
    donut = !donut;
    document.querySelector('.donut-count-3').innerHTML = donutCount;
}
)));

const messagebtn1 = document.querySelector('.message-button-1');
const messagebtn2 = document.querySelector('.message-button-2');
const messagebtn3 = document.querySelector('.message-button-3');
let message = true,
    messageCount = document.querySelector('.message-count-1').innerHTML;
    messageCount = document.querySelector('.message-count-2').innerHTML;
    messageCount = document.querySelector('.message-count-3').innerHTML;
messagebtn1.addEventListener('click', () => {
    messageCount = message ? ++messageCount : --messageCount;
    message = !message;
    document.querySelector('.message-count-1').innerHTML = messageCount;
},
messagebtn2.addEventListener('click', () => {
    messageCount = message ? ++messageCount : --messageCount;
    message = !message;
    document.querySelector('.message-count-2').innerHTML = messageCount;
},
messagebtn3.addEventListener('click', () => {
    messageCount = message ? ++messageCount : --messageCount;
    message = !message;
    document.querySelector('.message-count-3').innerHTML = messageCount;
}
)));
