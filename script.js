// --------------------------------------burger menu ------------------------------
function toggleburger(){
    let header=document.querySelector('header')
    let burger=document.querySelector('.burger')
    let barUp=document.querySelector('.bar_up')
    let barDown=document.querySelector('.bar_down')
    let barMid=document.querySelector('.bar_mid')
    burger.addEventListener('click', ()=>{
        barMid.classList.toggle('hidden');
        barUp.classList.toggle('barAnimationTop');
        barDown.classList.toggle('barAnimationBot');
        header.classList.toggle('animationHeader');

    })
}
toggleburger();

// -------------------------------------- Nav bar ------------------------------

const navLinks = document.querySelectorAll('.nav-links li');
const nav_txt = document.querySelectorAll('.nav-links li a');
console.log(nav_txt);
console.log(navLinks);

function Sectionvisiblescroll(){

    let sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
    // Obtenez la position de chaque section par rapport au haut de la page
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // Vérifiez si la section est visible à l'écran
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      // Ajoutez une classe "active" à l'élément de la barre de navigation correspondant à la section visible
        
        nav_txt.forEach((nav_txt) => {
            nav_txt.classList.remove('nav_selected_txt');
        });
        nav_txt[index].classList.add('nav_selected_txt');

        navLinks.forEach((navLink) => {
            navLink.classList.remove('nav_selected');
        });
        navLinks[index].classList.add('nav_selected');
    }
});

}
window.addEventListener('scroll', Sectionvisiblescroll);

// -------------------------------------- logo anim ------------------------------

let logoSvgAll = document.querySelectorAll(".logo_svg");
let path2All = document.querySelectorAll(".path2");



function logoAnim(){

    setTimeout(() => {
        path2All.forEach(path2 => {
            path2.classList.add('path2_anim');
        });
    }, 2000);
    setTimeout(() => {
        logoSvgAll.forEach(logoSvg => {
            logoSvg.classList.remove('logo_svg');
            logoSvg.classList.add('logo_svg_anim');
        });
    }, 4000);
    setTimeout(() => {
        path2All.forEach(path2 => {
            path2.classList.remove('path2_anim');
        });
    }, 6000);
    setTimeout(() => {
        logoSvgAll.forEach(logoSvg => {
            logoSvg.classList.remove('logo_svg_anim');
            logoSvg.classList.add('logo_svg');
        });
    }, 8000);

}
document.addEventListener('DOMContentLoaded', logoAnim);
document.addEventListener('DOMContentLoaded', () => {
    setInterval(logoAnim, 8000);
});

let logo_svgAll = document.querySelectorAll(".logo_svg");

let logoSvgbasic = document.querySelector(".logoSvgbasic");
let logoSvg3 = document.querySelector(".logo_svg3");

let logosvgposition = true;

function logoAnimClick(){

    if (logosvgposition == true){
        logoSvgbasic.classList.remove('logoSvgbasic');
        logoSvgbasic.classList.add('logo_svg2');

        logoSvg3.classList.remove('logo_svg3');
        logoSvg3.classList.add('logoSvgbasic');
        logosvgposition = false;
    }
    else{
        logoSvgbasic.classList.remove('logo_svg2');
        logoSvgbasic.classList.add('logoSvgbasic');

        logoSvg3.classList.remove('logoSvgbasic');
        logoSvg3.classList.add('logo_svg3');
        logosvgposition = true;
    }

}

logo_svgAll.forEach(logo_svg => {
    logo_svg.addEventListener('click', logoAnimClick);
});


// -------------------------------------- dark mode ------------------------------

let divdarkMode = document.querySelector(".divbtdarkmode");

function darkMode(){
    let varColor = document.querySelector(":root");
    let valuevarcolor = getComputedStyle(varColor);

    if (valuevarcolor.getPropertyValue('--dark-mode-off') == '#ffffff'){
        varColor.style.setProperty('--dark-mode-off', '#000000');
        varColor.style.setProperty('--dark-mode-on', '#ffffff');
    }
    else{
        varColor.style.setProperty('--dark-mode-off', '#ffffff');
        varColor.style.setProperty('--dark-mode-on', '#000000');
    }
}
divdarkMode.addEventListener('click', darkMode);
