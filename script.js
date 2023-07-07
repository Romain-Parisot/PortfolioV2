// -------------------------------------animation opening page-------------------------------------

let parent_Animation_loading_page=document.querySelector('.parent_Animation_loading_page')
let Animation_loading_page=document.querySelector('.Animation_loading_page')
let Animation_loading_page2=document.querySelector('.Animation_loading_page2')

function AnimationOpeningPage(){
    setTimeout(() => {
        Animation_loading_page.classList.add('Animation_loading_page_add')
        Animation_loading_page2.classList.add('Animation_loading_page2_add')
    }, 1000);
    setTimeout(() => {
        parent_Animation_loading_page.classList.add('dpnone')
    }, 4000);
}
document.addEventListener('DOMContentLoaded', AnimationOpeningPage);


// -------------------------------------burger menu-------------------------------------
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

// -------------------------------------Nav bar-------------------------------------

const navLinks = document.querySelectorAll('.nav-links li');
const nav_txt = document.querySelectorAll('.nav-links li a');

function Sectionvisiblescroll(){

    let sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
    // Obtenez la position de chaque section par rapport au haut de la page
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // Vérifiez si la section est visible à l'écran
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        // Ajoutez une classe "active" à l'élément de la barre de navigation correspondant à la section visible

        navLinks.forEach((navLink) => {
            navLink.classList.remove('nav_selected');
        });
        navLinks[index].classList.add('nav_selected');
    }
});

}
window.addEventListener('scroll', Sectionvisiblescroll);

// -------------------------------------logo anim-------------------------------------

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

// -------------------------------------logo anim svg-------------------------------------

let logoSvgAll = document.querySelectorAll(".logo_svg");
let path2_logoAll = document.querySelectorAll(".path2_logo");



function logoAnim(){

    setTimeout(() => {
        path2_logoAll.forEach(path2_logo => {
            path2_logo.classList.add('path2_logo_anim');
        });
    }, 2000);
    setTimeout(() => {
        logoSvgAll.forEach(logoSvg => {
            logoSvg.classList.remove('logo_svg');
            logoSvg.classList.add('logo_svg_anim');
        });
    }, 4000);
    setTimeout(() => {
        path2_logoAll.forEach(path2_logo => {
            path2_logo.classList.remove('path2_logo_anim');
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

// -------------------------------------dark mode-------------------------------------

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


// -------------------------------------dark mode svg-------------------------------------

let darkmode_svg_sun_topleft = document.querySelector(".darkmode_svg_sun_topleft");
let darkmode_svg_sun_topright = document.querySelector(".darkmode_svg_sun_topright");
let darkmode_svg_sun_botleft = document.querySelector(".darkmode_svg_sun_botleft");
let darkmode_svg_sun_botright = document.querySelector(".darkmode_svg_sun_botright");
let darkmode_svg_sun_top = document.querySelector(".darkmode_svg_sun_top");
let darkmode_svg_sun_left = document.querySelector(".darkmode_svg_sun_left");
let darkmode_svg_sun_right = document.querySelector(".darkmode_svg_sun_right");
let darkmode_svg_sun_bot = document.querySelector(".darkmode_svg_sun_bot");

let darkmode_svg_spark = document.querySelector(".darkmode_svg_spark");

let darkmode_svg_spark_count = 1;

let darkmode_svg_timer = 1000;

function darkModeAnimSvg_sun(){
    darkmode_svg_sun_topleft.classList.toggle('darkmode_svg_sun_topleft_anim');
    darkmode_svg_sun_topright.classList.toggle('darkmode_svg_sun_topright_anim');
    darkmode_svg_sun_botleft.classList.toggle('darkmode_svg_sun_botleft_anim');
    darkmode_svg_sun_botright.classList.toggle('darkmode_svg_sun_botright_anim');
    darkmode_svg_sun_top.classList.toggle('darkmode_svg_sun_top_anim');
    darkmode_svg_sun_left.classList.toggle('darkmode_svg_sun_left_anim');
    darkmode_svg_sun_right.classList.toggle('darkmode_svg_sun_right_anim');
    darkmode_svg_sun_bot.classList.toggle('darkmode_svg_sun_bot_anim');
}

function darkModeAnimSvg_spark(){

    randomSideAnimation = getRandomIntInclusive(1, 2);

    if (darkmode_svg_spark_count == 1){
        if(randomSideAnimation == 1){
        darkmode_svg_spark.classList.remove('darkmode_svg_spark_anim');
        darkmode_svg_spark.classList.remove('darkmode_svg_spark_anim2');
        darkmode_svg_spark.classList.remove('darkmode_svg_spark0');
        
        darkmode_svg_spark.classList.add('darkmode_svg_spark_anim2');
        darkmode_svg_spark_count = 2;

        randomSideAnimation = 2
        }
        else if(randomSideAnimation == 2){
            darkmode_svg_spark.classList.remove('darkmode_svg_spark_anim');
            darkmode_svg_spark.classList.remove('darkmode_svg_spark_anim2');
            darkmode_svg_spark.classList.remove('darkmode_svg_spark0');

            darkmode_svg_spark.classList.add('darkmode_svg_spark_anim');
            darkmode_svg_spark_count = 2;
            
            randomSideAnimation = 1
        }

    }
    else if (darkmode_svg_spark_count == 2){
        darkmode_svg_spark.classList.remove('darkmode_svg_spark_anim');
        darkmode_svg_spark.classList.remove('darkmode_svg_spark_anim2');
        darkmode_svg_spark.classList.remove('darkmode_svg_spark0');
        
        darkmode_svg_spark.classList.add('darkmode_svg_spark0');
        darkmode_svg_spark_count = 1;
    }


    darkmode_svg_timer = getRandomIntInclusive(1500, 3000);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

document.addEventListener('DOMContentLoaded', darkModeAnimSvg_sun);
document.addEventListener('DOMContentLoaded', () => {
    setInterval(darkModeAnimSvg_sun, 2000);
});

document.addEventListener('DOMContentLoaded', darkModeAnimSvg_spark);
document.addEventListener('DOMContentLoaded', () => {
    setInterval(darkModeAnimSvg_spark, darkmode_svg_timer);
});

// -------------------------------------bar parcour anim-------------------------------------

let parcour_svg = document.getElementById('parcour_svg');
let progressBar = document.getElementById('parcour_bar_svg');
let scrollPercentagev2 = 0;

let parcour_elmt = document.querySelector('.parcour_elmt');
let parcour_elmt1 = document.querySelector('.parcour_elmt1');
let parcour_elmt2 = document.querySelector('.parcour_elmt2');
let parcour_elmt3 = document.querySelector('.parcour_elmt3');
let parcour_elmt4 = document.querySelector('.parcour_elmt4');



let bullet_point_parcour1 = document.querySelector('.bullet_point_parcour1')
let bullet_point_parcour2 = document.querySelector('.bullet_point_parcour2')
let bullet_point_parcour3 = document.querySelector('.bullet_point_parcour3')
let bullet_point_parcour4 = document.querySelector('.bullet_point_parcour4')

function updateProgressBar() {

    let scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercentage >= 40 && scrollPercentage <= 80) {
        scrollPercentagev2 = 10/4 * (scrollPercentage - 40);
        if (scrollPercentagev2 > 25/2) {
            bullet_point_parcour1.classList.add("bullet_point_parcour_animation")
            parcour_elmt1.classList.remove("parcour_elmt_left")
        }
        if (scrollPercentagev2 > 75/2) {
            bullet_point_parcour2.classList.add("bullet_point_parcour_animation")
            parcour_elmt2.classList.remove("parcour_elmt_right")
        }
        if (scrollPercentagev2 > (25/2)+50) {
            bullet_point_parcour3.classList.add("bullet_point_parcour_animation")
            parcour_elmt3.classList.remove("parcour_elmt_left")
        }
        if (scrollPercentagev2 > (75/2)+50) {
            bullet_point_parcour4.classList.add("bullet_point_parcour_animation")
            parcour_elmt4.classList.remove("parcour_elmt_right")
        }

        if(scrollPercentagev2 < 25/2){
            bullet_point_parcour1.classList.remove("bullet_point_parcour_animation")
            parcour_elmt1.classList.add("parcour_elmt_left")
        }
        if(scrollPercentagev2 < 75/2){
            bullet_point_parcour2.classList.remove("bullet_point_parcour_animation")
            parcour_elmt2.classList.add("parcour_elmt_right")
        }
        if(scrollPercentagev2 < (25/2)+50){
            bullet_point_parcour3.classList.remove("bullet_point_parcour_animation")
            parcour_elmt3.classList.add("parcour_elmt_left")
        }
        if (scrollPercentagev2 < (75/2)+50) {
            bullet_point_parcour4.classList.remove("bullet_point_parcour_animation")
            parcour_elmt4.classList.add("parcour_elmt_right")
        }
      }
    else if(scrollPercentage < 40){
        scrollPercentagev2 = 0
    }
    else if(scrollPercentage > 80)
    {
        scrollPercentagev2 = 100
    }  
      progressBar.style.height = `${scrollPercentagev2}%`;
      console.log("v1 : " + scrollPercentage);
      console.log("v2 : " + scrollPercentagev2);
}


document.addEventListener('scroll', updateProgressBar);


// -------------------------------------personnality anim svg-------------------------------------

let path_bar_mid_support = document.querySelector(".path_bar_mid_support")
let path_bar_left_support = document.querySelector(".path_bar_left_support")
let path_bar_right_support = document.querySelector(".path_bar_right_support")

let path_arrow_target = document.querySelector(".path_arrow_target")

function AnimPersonnalitySvg(){
    path_bar_mid_support.classList.toggle("path_bar_mid_support")
    path_bar_left_support.classList.toggle("path_bar_left_support")
    path_bar_right_support.classList.toggle("path_bar_right_support")

    path_arrow_target.classList.toggle("path_arrow_target")

    let rootsizesvg = document.querySelector(":root");
    rootsizesvg.style.setProperty('--computer_svg_width_random1', `${getRandomIntInclusive(50, 100)}%`);
    rootsizesvg.style.setProperty('--computer_svg_width_random2', `${getRandomIntInclusive(50, 100)}%`);
    rootsizesvg.style.setProperty('--computer_svg_width_random3', `${getRandomIntInclusive(50, 100)}%`);
    rootsizesvg.style.setProperty('--computer_svg_width_random4', `${getRandomIntInclusive(50, 100)}%`);
    rootsizesvg.style.setProperty('--computer_svg_mouse_position_x', `${getRandomIntInclusive(-2, 2)}%`);
    rootsizesvg.style.setProperty('--computer_svg_mouse_position_y', `${getRandomIntInclusive(-2, 2)}%`);

}

document.addEventListener('DOMContentLoaded', AnimPersonnalitySvg);
document.addEventListener('DOMContentLoaded', () => {
    setInterval(AnimPersonnalitySvg, 2000);
});