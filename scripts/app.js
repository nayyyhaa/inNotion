/*front page parallax*/
let star = document.querySelector('#star');
let moon = document.querySelector('#moon');
let behind = document.querySelector('#behind');
let front = document.querySelector('#front');
let homeText = document.querySelector('#home-text');
let homeText2 = document.querySelector('#home-text2');

/*nav bar*/
let hamburgerBars = document.querySelector('.fa');
let navItems = document.querySelector(".nav-items");
let links = navItems.querySelectorAll("a");

/*parallax*/
document.addEventListener('scroll', function(){
    let value = window.scrollY;
    star.style.left = value + 'px';
    moon.style.marginLeft = value*0.5 + 'px';
    behind.style.top = value*0.5 + 'px';
    front.style.top = value*0 + 'px';
    homeText.style.marginTop= value*1.5 + 'px';
})

/*Hamburger*/
hamburgerBars.addEventListener("click", () => {
    navItems.classList.toggle("show");
    if(hamburgerBars.className == "fa fa-bars")
        hamburgerBars.className = "fa fa-times";
    else
        hamburgerBars.className = "fa fa-bars";
})
links.forEach(link => {
    link.addEventListener("click", () =>{
        navItems.classList.toggle("show");
        if(hamburgerBars.className == "fa fa-bars")
        hamburgerBars.className = "fa fa-times";
    else
        hamburgerBars.className = "fa fa-bars";
    })
})