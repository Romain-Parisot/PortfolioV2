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