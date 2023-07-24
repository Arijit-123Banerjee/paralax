let text = document.querySelector('.text');
let leaf = document.querySelector('.leaf');
let hill1 = document.querySelector('.hill1');
let hill4 = document.querySelector('.hill4');
let hill5 = document.querySelector('.hill5');
let hill3 = document.querySelector('.hill3');
let hill2 = document.querySelector('.hill2');
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2 + 'px';
    leaf.style.marginLeft = value * 0.8 + 'px';
    hill1.style.marginTop = value * 0.2 + 'px';
    hill4.style.marginLeft = value * -0.2 + 'px';
    hill3.style.marginLeft = value * 0.2 + 'px';


})
ScrollReveal().reveal('.text', { duration: 900 }, { reset: true });
ScrollReveal().reveal('.title', { duration: 900 }, { origin: 'bottom' }, { delay: 900 }, { reset: true });
// ScrollReveal().reveal('.tourImgs', { duration: 300 }, { origin: 'bottom' }, { delay: 900 }, { reset: true });
ScrollReveal().reveal('.tour', { duration: 900 }, { origin: 'bottom' }, { delay: 500 }, { reset: true });
ScrollReveal().reveal('.btn', { duration: 4000 }, { origin: 'bottom' }, { delay: 9000 }, { reset: true });
