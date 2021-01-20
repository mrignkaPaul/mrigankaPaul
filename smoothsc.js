
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

/* FOR DIVISION 1 */

const box = document.querySelector('.hey');
const message = document.querySelector('.message');

document.addEventListener('scroll', function () {
    if(isInViewport(box) ){
        
        message.style.backgroundColor =    "black" ;
        message.style.opacity =    "0.9" ;
    }
        else{
            message.style.backgroundColor = "white";
            message.style.opacity =    "0.5" ;
        }
}, {
    passive: true
});

/* FOR DIVISION 2 */

const box1 = document.querySelector('.bolder');
const message1 = document.querySelector('.message1');

document.addEventListener('scroll', function () {
    if(isInViewport(box1) ){
        
        message1.style.backgroundColor =    "white" ;
        message1.style.opacity =    "0.9" ;
    }
        else{
            message1.style.opacity =    "0.5" ;
            message1.style.backgroundColor = "white";
        }
}, {
    passive: true
});

/* FOR DIVISION 3 */


const box2 = document.querySelector('.contents');
const message2 = document.querySelector('.message2');

document.addEventListener('scroll', function () {
    if(isInViewport(box2) ){
        
        message2.style.backgroundColor =    "black" ;
        message2.style.opacity =    "0.9" ;
        
    }
        else{
            message2.style.opacity =    "0.5" ;
            message2.style.backgroundColor = "white";
        }
}, {
    passive: true
});

/* FOR DIVISION 4 */

const box3 = document.querySelector('.skill2');
const message3 = document.querySelector('.message3');

document.addEventListener('scroll', function () {
    if(isInViewport(box3) ){
        
        message3.style.background =    "white" ;
        message3.style.opacity =    "0.9" ;
    }
        else{
            message3.style.backgroundColor = "white";
            message3.style.opacity =    "0.5" ;
        }
}, {
    passive: true
});


/* FOR DIVISION 5 */

const box4 = document.querySelector('.pofaoi');
const message4 = document.querySelector('.message4');

document.addEventListener('scroll', function () {
    if(isInViewport(box4) ){
        
        message4.style.backgroundColor =    "black" ;
        message4.style.opacity =    "0.9" ;
    }
        else{
            message4.style.backgroundColor = "white";
            message4.style.opacity =    "0.5" ;
        }
}, {
    passive: true
});

var scroll = new SmoothScroll('.theul a[href*="#"]',);