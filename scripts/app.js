let star = document.querySelector('#star');
let moon = document.querySelector('#moon');
let behind = document.querySelector('#behind');
let front = document.querySelector('#front');
let homeText = document.querySelector('#home-text');
let homeText2 = document.querySelector('#home-text2');

document.addEventListener('scroll', function(){
    let value = window.scrollY;
    star.style.left = value + 'px';
    moon.style.marginLeft = value*0.5 + 'px';
    behind.style.top = value*0.5 + 'px';
    front.style.top = value*0 + 'px';
    homeText.style.marginTop= value*1.5 + 'px';
})