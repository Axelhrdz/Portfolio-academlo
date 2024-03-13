// Adding funcitonality to the hamburger navabr button
var navbarLinks = document.getElementById('navLinks')
var hamburger = document.getElementById('ham-button')

hamburger.onclick = function(){
    navbarLinks.classList.toggle('show-nav')
}
// Adding funcitonality to the hamburger navabr button

//Scroll reveal
ScrollReveal().reveal('.header', {delay: 300});
ScrollReveal().reveal('.aboutMe', {delay: 300});
ScrollReveal().reveal('.experience', {delay: 300});
ScrollReveal().reveal('.stack', {delay: 300});



