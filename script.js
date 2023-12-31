// -------------------------------------animation opening page-------------------------------------

let parent_Animation_loading_page = document.querySelector(
  ".parent_Animation_loading_page"
);
let Animation_loading_page = document.querySelector(".Animation_loading_page");
let Animation_loading_page2 = document.querySelector(
  ".Animation_loading_page2"
);

function AnimationOpeningPage() {
  setTimeout(() => {
    Animation_loading_page.classList.add("Animation_loading_page_add");
    Animation_loading_page2.classList.add("Animation_loading_page2_add");
  }, 1000);
  setTimeout(() => {
    parent_Animation_loading_page.classList.add("dpnone");
  }, 4000);
}
document.addEventListener("DOMContentLoaded", AnimationOpeningPage);

// -------------------------------------burger menu-------------------------------------
function toggleburger() {
  let header = document.querySelector("header");
  let burger = document.querySelector(".burger");
  let barUp = document.querySelector(".bar_up");
  let barDown = document.querySelector(".bar_down");
  let barMid = document.querySelector(".bar_mid");
  burger.addEventListener("click", () => {
    barMid.classList.toggle("hidden");
    barUp.classList.toggle("barAnimationTop");
    barDown.classList.toggle("barAnimationBot");
    header.classList.toggle("animationHeader");
  });
}
toggleburger();

// -------------------------------------Nav bar-------------------------------------

const navLinks = document.querySelectorAll(".nav-links li");

function Sectionvisiblescroll() {
  let sections = document.querySelectorAll("section");

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("nav_selected");
      });
      navLinks[index].classList.add("nav_selected");
    }
  });
}

window.addEventListener("scroll", Sectionvisiblescroll);

// -------------------------------------logo anim-------------------------------------

let logo_svgAll = document.querySelectorAll(".logo_svg");

let logoSvgbasic = document.querySelector(".logoSvgbasic");
let logoSvg3 = document.querySelector(".logo_svg3");

let logosvgposition = true;

function logoAnimClick() {
  if (logosvgposition == true) {
    logoSvgbasic.classList.remove("logoSvgbasic");
    logoSvgbasic.classList.add("logo_svg2");

    logoSvg3.classList.remove("logo_svg3");
    logoSvg3.classList.add("logoSvgbasic");
    logosvgposition = false;
  } else {
    logoSvgbasic.classList.remove("logo_svg2");
    logoSvgbasic.classList.add("logoSvgbasic");

    logoSvg3.classList.remove("logoSvgbasic");
    logoSvg3.classList.add("logo_svg3");
    logosvgposition = true;
  }
}

logo_svgAll.forEach((logo_svg) => {
  logo_svg.addEventListener("click", logoAnimClick);
});

// -------------------------------------logo anim svg-------------------------------------

let logoSvgAll = document.querySelectorAll(".logo_svg");
let path2_logoAll = document.querySelectorAll(".path2_logo");

function logoAnim() {
  setTimeout(() => {
    path2_logoAll.forEach((path2_logo) => {
      path2_logo.classList.add("path2_logo_anim");
    });
  }, 2000);
  setTimeout(() => {
    logoSvgAll.forEach((logoSvg) => {
      logoSvg.classList.remove("logo_svg");
      logoSvg.classList.add("logo_svg_anim");
    });
  }, 4000);
  setTimeout(() => {
    path2_logoAll.forEach((path2_logo) => {
      path2_logo.classList.remove("path2_logo_anim");
    });
  }, 6000);
  setTimeout(() => {
    logoSvgAll.forEach((logoSvg) => {
      logoSvg.classList.remove("logo_svg_anim");
      logoSvg.classList.add("logo_svg");
    });
  }, 8000);
}
document.addEventListener("DOMContentLoaded", logoAnim);
document.addEventListener("DOMContentLoaded", () => {
  setInterval(logoAnim, 8000);
});

// -------------------------------------dark mode-------------------------------------

let divdarkMode = document.querySelector(".divbtdarkmode");

function darkMode() {
  let varColor = document.querySelector(":root");
  let valuevarcolor = getComputedStyle(varColor);

  if (valuevarcolor.getPropertyValue("--dark-mode-off") == "#ffffff") {
    varColor.style.setProperty("--dark-mode-off", "#000000");
    varColor.style.setProperty("--dark-mode-on", "#ffffff");
  } else {
    varColor.style.setProperty("--dark-mode-off", "#ffffff");
    varColor.style.setProperty("--dark-mode-on", "#000000");
  }
}
divdarkMode.addEventListener("click", darkMode);

// -------------------------------------dark mode svg-------------------------------------

let darkmode_svg_sun_topleft = document.querySelector(
  ".darkmode_svg_sun_topleft"
);
let darkmode_svg_sun_topright = document.querySelector(
  ".darkmode_svg_sun_topright"
);
let darkmode_svg_sun_botleft = document.querySelector(
  ".darkmode_svg_sun_botleft"
);
let darkmode_svg_sun_botright = document.querySelector(
  ".darkmode_svg_sun_botright"
);
let darkmode_svg_sun_top = document.querySelector(".darkmode_svg_sun_top");
let darkmode_svg_sun_left = document.querySelector(".darkmode_svg_sun_left");
let darkmode_svg_sun_right = document.querySelector(".darkmode_svg_sun_right");
let darkmode_svg_sun_bot = document.querySelector(".darkmode_svg_sun_bot");

let darkmode_svg_spark = document.querySelector(".darkmode_svg_spark");

let darkmode_svg_spark_count = 1;

let darkmode_svg_timer = 1000;

function darkModeAnimSvg_sun() {
  darkmode_svg_sun_topleft.classList.toggle("darkmode_svg_sun_topleft_anim");
  darkmode_svg_sun_topright.classList.toggle("darkmode_svg_sun_topright_anim");
  darkmode_svg_sun_botleft.classList.toggle("darkmode_svg_sun_botleft_anim");
  darkmode_svg_sun_botright.classList.toggle("darkmode_svg_sun_botright_anim");
  darkmode_svg_sun_top.classList.toggle("darkmode_svg_sun_top_anim");
  darkmode_svg_sun_left.classList.toggle("darkmode_svg_sun_left_anim");
  darkmode_svg_sun_right.classList.toggle("darkmode_svg_sun_right_anim");
  darkmode_svg_sun_bot.classList.toggle("darkmode_svg_sun_bot_anim");
}

function darkModeAnimSvg_spark() {
  randomSideAnimation = getRandomIntInclusive(1, 2);

  if (darkmode_svg_spark_count == 1) {
    if (randomSideAnimation == 1) {
      darkmode_svg_spark.classList.remove("darkmode_svg_spark_anim");
      darkmode_svg_spark.classList.remove("darkmode_svg_spark_anim2");
      darkmode_svg_spark.classList.remove("darkmode_svg_spark0");

      darkmode_svg_spark.classList.add("darkmode_svg_spark_anim2");
      darkmode_svg_spark_count = 2;

      randomSideAnimation = 2;
    } else if (randomSideAnimation == 2) {
      darkmode_svg_spark.classList.remove("darkmode_svg_spark_anim");
      darkmode_svg_spark.classList.remove("darkmode_svg_spark_anim2");
      darkmode_svg_spark.classList.remove("darkmode_svg_spark0");

      darkmode_svg_spark.classList.add("darkmode_svg_spark_anim");
      darkmode_svg_spark_count = 2;

      randomSideAnimation = 1;
    }
  } else if (darkmode_svg_spark_count == 2) {
    darkmode_svg_spark.classList.remove("darkmode_svg_spark_anim");
    darkmode_svg_spark.classList.remove("darkmode_svg_spark_anim2");
    darkmode_svg_spark.classList.remove("darkmode_svg_spark0");

    darkmode_svg_spark.classList.add("darkmode_svg_spark0");
    darkmode_svg_spark_count = 1;
  }

  darkmode_svg_timer = getRandomIntInclusive(1500, 3000);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("DOMContentLoaded", darkModeAnimSvg_sun);
document.addEventListener("DOMContentLoaded", () => {
  setInterval(darkModeAnimSvg_sun, 2000);
});

document.addEventListener("DOMContentLoaded", darkModeAnimSvg_spark);
document.addEventListener("DOMContentLoaded", () => {
  setInterval(darkModeAnimSvg_spark, darkmode_svg_timer);
});

// -------------------------------------bar parcour anim-------------------------------------

let parcour_svg = document.getElementById("parcour_svg");
let progressBar = document.getElementById("parcour_bar_svg");
let scrollPercentagev2 = 0;

let parcour_elmt = document.querySelector(".parcour_elmt");
let parcour_elmt1 = document.querySelector(".parcour_elmt1");
let parcour_elmt2 = document.querySelector(".parcour_elmt2");
let parcour_elmt3 = document.querySelector(".parcour_elmt3");
let parcour_elmt4 = document.querySelector(".parcour_elmt4");

let bullet_point_parcour1 = document.querySelector(".bullet_point_parcour1");
let bullet_point_parcour2 = document.querySelector(".bullet_point_parcour2");
let bullet_point_parcour3 = document.querySelector(".bullet_point_parcour3");
let bullet_point_parcour4 = document.querySelector(".bullet_point_parcour4");

function updateProgressBar() {
  let scrollPercentage =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  if (scrollPercentage >= 50 && scrollPercentage <= 90) {
    scrollPercentagev2 = (10 / 3) * (scrollPercentage - 50);
    if (scrollPercentagev2 > 25 / 2) {
      bullet_point_parcour1.classList.add("bullet_point_parcour_animation");
      parcour_elmt1.classList.remove("parcour_elmt_left");
    }
    if (scrollPercentagev2 > 75 / 2) {
      bullet_point_parcour2.classList.add("bullet_point_parcour_animation");
      parcour_elmt2.classList.remove("parcour_elmt_right");
    }
    if (scrollPercentagev2 > 25 / 2 + 50) {
      bullet_point_parcour3.classList.add("bullet_point_parcour_animation");
      parcour_elmt3.classList.remove("parcour_elmt_left");
    }
    if (scrollPercentagev2 > 75 / 2 + 50) {
      bullet_point_parcour4.classList.add("bullet_point_parcour_animation");
      parcour_elmt4.classList.remove("parcour_elmt_right");
    }

    if (scrollPercentagev2 < 25 / 2) {
      bullet_point_parcour1.classList.remove("bullet_point_parcour_animation");
      parcour_elmt1.classList.add("parcour_elmt_left");
    }
    if (scrollPercentagev2 < 75 / 2) {
      bullet_point_parcour2.classList.remove("bullet_point_parcour_animation");
      parcour_elmt2.classList.add("parcour_elmt_right");
    }
    if (scrollPercentagev2 < 25 / 2 + 50) {
      bullet_point_parcour3.classList.remove("bullet_point_parcour_animation");
      parcour_elmt3.classList.add("parcour_elmt_left");
    }
    if (scrollPercentagev2 < 75 / 2 + 50) {
      bullet_point_parcour4.classList.remove("bullet_point_parcour_animation");
      parcour_elmt4.classList.add("parcour_elmt_right");
    }
  } else if (scrollPercentage < 40) {
    scrollPercentagev2 = 0;
  } else if (scrollPercentage > 80) {
    scrollPercentagev2 = 100;
  }
  progressBar.style.height = `${scrollPercentagev2}%`;
  console.log("v1 : " + scrollPercentage);
  console.log("v2 : " + scrollPercentagev2);
}

document.addEventListener("scroll", updateProgressBar);

// -------------------------------------bullet point anim-------------------------------------

let path_bullet_point_sideB = document.querySelectorAll(
  ".path_bullet_point_sideB"
);
let path_bullet_point_sideA = document.querySelectorAll(
  ".path_bullet_point_sideA"
);

function BulletPointAnimSideB() {
  path_bullet_point_sideB.forEach((path_sideB) => {
    path_sideB.classList.toggle("path_bullet_point_sideB_anim");
  });
}
document.addEventListener("DOMContentLoaded", BulletPointAnimSideB);
document.addEventListener("DOMContentLoaded", () => {
  setInterval(BulletPointAnimSideB, 4000);
});

function BulletPointAnimSideA() {
  path_bullet_point_sideA.forEach((path_sideA) => {
    path_sideA.classList.toggle("path_bullet_point_sideA_anim");
  });
}
document.addEventListener("DOMContentLoaded", BulletPointAnimSideA);
document.addEventListener("DOMContentLoaded", () => {
  setInterval(BulletPointAnimSideA, 4000);
});

// -------------------------------------personnality anim svg-------------------------------------

// hand
let path_bar_mid_support = document.querySelector(".path_bar_mid_support");
let path_bar_left_support = document.querySelector(".path_bar_left_support");
let path_bar_right_support = document.querySelector(".path_bar_right_support");

// target
let path_arrow_target = document.querySelector(".path_arrow_target");

// mountain
let path_bird_right_dare = document.querySelector(".path_bird_right_dare");
let path_bird_left_dare = document.querySelector(".path_bird_left_dare");
let path_stick_flag_dare = document.querySelector(".path_stick_flag_dare");
let path_flag_dare = document.querySelector(".path_flag_dare");

// sport
let path_body_sport = document.querySelector(".path_body_sport");
let path_weight_big_sport = document.querySelector(".path_weight_big_sport");
let path_weight_small_sport = document.querySelector(
  ".path_weight_small_sport"
);
let path_head_sport = document.querySelector(".path_head_sport");

function AnimPersonnalitySvg() {
  let rootsizesvg = document.querySelector(":root");
  // hand
  path_bar_mid_support.classList.toggle("path_bar_mid_support");
  path_bar_left_support.classList.toggle("path_bar_left_support");
  path_bar_right_support.classList.toggle("path_bar_right_support");

  // target
  path_arrow_target.classList.toggle("path_arrow_target");

  // mountain
  rootsizesvg.style.setProperty(
    "--mountain_svg_bird_right_position_x",
    `${getRandomIntInclusive(-3, 3)}%`
  );
  rootsizesvg.style.setProperty(
    "--mountain_svg_bird_right_position_y",
    `${getRandomIntInclusive(-3, 5)}%`
  );
  rootsizesvg.style.setProperty(
    "--mountain_svg_bird_right_scale",
    `${getRandomIntInclusive(100, 130)}%`
  );

  rootsizesvg.style.setProperty(
    "--mountain_svg_bird_left_position_x",
    `${getRandomIntInclusive(-3, 3)}%`
  );
  rootsizesvg.style.setProperty(
    "--mountain_svg_bird_left_position_y",
    `${getRandomIntInclusive(-3, 5)}%`
  );
  rootsizesvg.style.setProperty(
    "--mountain_svg_bird_left_scale",
    `${getRandomIntInclusive(90, 120)}%`
  );

  path_stick_flag_dare.classList.toggle("path_stick_flag_dare_anim");
  path_flag_dare.classList.toggle("path_flag_dare_anim");

  // computer
  rootsizesvg.style.setProperty(
    "--computer_svg_width_random1",
    `${getRandomIntInclusive(50, 100)}%`
  );
  rootsizesvg.style.setProperty(
    "--computer_svg_width_random2",
    `${getRandomIntInclusive(50, 100)}%`
  );
  rootsizesvg.style.setProperty(
    "--computer_svg_width_random3",
    `${getRandomIntInclusive(50, 100)}%`
  );
  rootsizesvg.style.setProperty(
    "--computer_svg_width_random4",
    `${getRandomIntInclusive(50, 100)}%`
  );
  rootsizesvg.style.setProperty(
    "--computer_svg_mouse_position_x",
    `${getRandomIntInclusive(-2, 2)}%`
  );
  rootsizesvg.style.setProperty(
    "--computer_svg_mouse_position_y",
    `${getRandomIntInclusive(-2, 2)}%`
  );

  //sport
  path_body_sport.classList.toggle("path_body_sport_anim");
  path_head_sport.classList.toggle("path_head_sport_anim");
  path_weight_big_sport.classList.toggle("path_weight_big_sport_anim");
  path_weight_big_sport.classList.toggle("path_weight_big_sport");
  path_weight_small_sport.classList.toggle("path_weight_small_sport");
  path_weight_small_sport.classList.toggle("path_weight_small_sport_anim");
}

document.addEventListener("DOMContentLoaded", AnimPersonnalitySvg);
document.addEventListener("DOMContentLoaded", () => {
  setInterval(AnimPersonnalitySvg, 2000);
});

// -------------------------------------click project-------------------------------------

let divprojects = document.querySelectorAll(".divproject");
let project = document.querySelector(".project");

let divproject1 = document.querySelector(".divproject1");
let divproject4 = document.querySelector(".divproject4");
let divproject11 = document.querySelector(".divproject11");
let divproject13 = document.querySelector(".divproject13");

let DefaultViewProjectChild = document.querySelector(
  ".DefaultViewProjectChild"
);

let description_divproject = document.querySelectorAll(
  ".description_divproject"
);

let slider_container = document.querySelectorAll(".slider_container");
let linkytb_container = document.querySelectorAll(".linkytb_container");
let descriptionsliderdesactivateall = document.querySelectorAll(
  ".descriptionsliderdesactivate"
);
let slider = document.querySelectorAll(".slider");

// let iframe = document.querySelectorAll("iframe")

function Stopvideo(element) {
  let iframe = element.querySelectorAll("iframe");
  let video = element.querySelectorAll("video");
  iframe.forEach((ifr) => {
    if (ifr) {
      let iframeSrc = ifr.src;
      ifr.src = iframeSrc;
    }
  });
  video.forEach((vid) => {
    if (vid) {
      vid.pause();
    }
  });
}

function ClickResetGallery() {
  divprojects.forEach((divproject) => {
    divproject.classList.add("opacity_null");
  });
  DefaultViewProjectChild.classList.add("opacity_null");

  setTimeout(() => {
    project.classList.add("project");
    project.classList.remove("project_selected");

    DefaultViewProjectChild.classList.add("dpnone");

    divprojects.forEach((divproject) => {
      divproject.classList.remove("divprojectSelected");
    });

    divproject1.classList.add("divproject1");
    divproject4.classList.add("divproject4");
    divproject11.classList.add("divproject11");
    divproject13.classList.add("divproject13");

    slider_container.forEach((slidercontainer) => {
      slidercontainer.classList.remove("dpnone");
      slidercontainer.classList.add("slider_container");
      slidercontainer.classList.remove("slider_container_desactivate");
    });

    descriptionsliderdesactivateall.forEach(
      (descriptionsliderdesactivateall) => {
        descriptionsliderdesactivateall.classList.add("dpnone");
      }
    );

    slider.forEach((slider_self) => {
      slider_self.classList.add("slider");
      slider_self.classList.remove("slider_desactivate");
    });

    linkytb_container.forEach((ytbcontainer) => {
      ytbcontainer.classList.add("dpnone");
      Stopvideo(ytbcontainer);
    });

    description_divproject.forEach((descproject) => {
      descproject.classList.remove("dpnone");
    });

    divprojects.forEach((divproject) => {
      divproject.classList.remove("opacity_null");
    });
  }, 500);
}
DefaultViewProjectChild.addEventListener("click", ClickResetGallery);

function ClickProject(SelectedDiv) {
  slider_container.forEach((slidercontainer) => {
    slidercontainer.classList.remove("dpnone");
    slidercontainer.classList.add("slider_container");
    slidercontainer.classList.remove("slider_container_desactivate");
  });

  descriptionsliderdesactivateall.forEach((descriptionsliderdesactivateall) => {
    descriptionsliderdesactivateall.classList.add("dpnone");
  });

  slider.forEach((slider_self) => {
    // ici je copie le add et remove pour qu'ils puissent commencer l'animation du slider en même temps, si je ass que celui manquant tout les autres serons encore avec le même moment de départ mais pas celui qui vient d'être rajouter.
    slider_self.classList.remove("slider");
    slider_self.classList.add("slider");

    slider_self.classList.add("slider_desactivate");
    slider_self.classList.remove("slider_desactivate");
  });

  linkytb_container.forEach((ytbcontainer) => {
    ytbcontainer.classList.add("dpnone");
    Stopvideo(ytbcontainer);
  });

  if (SelectedDiv.classList.contains("divprojectSelected")) {
    DefaultViewProjectChild.classList.add("opacity_null");

    divprojects.forEach((divproject) => {
      divproject.classList.add("opacity_null");
    });

    setTimeout(() => {
      project.classList.add("project");
      project.classList.remove("project_selected");

      DefaultViewProjectChild.classList.add("dpnone");

      SelectedDiv.classList.remove("divprojectSelected");
      divproject1.classList.add("divproject1");
      divproject4.classList.add("divproject4");
      divproject11.classList.add("divproject11");
      divproject13.classList.add("divproject13");

      description_divproject.forEach((descproject) => {
        descproject.classList.remove("dpnone");
      });

      divprojects.forEach((divproject) => {
        divproject.classList.remove("opacity_null");
      });
    }, 500);
  } else {
    DefaultViewProjectChild.classList.remove("dpnone");
    DefaultViewProjectChild.classList.remove("opacity_null");

    divprojects.forEach((divproject) => {
      divproject.classList.add("opacity_null");
    });

    setTimeout(() => {
      let iframeSelected = SelectedDiv.querySelector("iframe");
      console.log(iframeSelected);
      listYoutubeVideoId = [
        "Mousdik",
        "",
        "",
        "WikiFilm",
        "",
        "",
        "",
        "",
        "RCunvxP3ED0",
        "0JSebRjxqmg",
        "ViolonFrance",
        "",
        "Plessis-Robinsson",
        "",
        "MeteoArduino",
        "",
        "BjPaKBPly_o",
        "",
        "",
      ];
      for (let i = 1; i < 20; i++) {
        // console.log("divproject" + i);
        // console.log("https://www.youtube.com/embed/" + listYoutubeVideoId[i-1]);
        if (SelectedDiv.classList.contains("divproject" + i)) {
          iframeSelected.src =
            "https://www.youtube.com/embed/" + listYoutubeVideoId[i - 1];
        }
      }

      // animation pendant que les projets sont en opacité 0

      project.classList.remove("project");
      project.classList.add("project_selected");

      divprojects.forEach((divproject) => {
        divproject.classList.remove("divproject1");
        divproject.classList.remove("divproject4");
        divproject.classList.remove("divproject11");
        divproject.classList.remove("divproject13");
        divproject.classList.remove("divprojectSelected");
      });

      description_divproject.forEach((descproject) => {
        if (descproject.parentElement.parentElement !== SelectedDiv) {
          descproject.classList.add("dpnone");
        }
      });

      let slider_container_unique =
        SelectedDiv.querySelector(".slider_container");
      let linkytb_container_unique =
        SelectedDiv.querySelector(".linkytb_container");
      let slider_unique = slider_container_unique.querySelector(".slider");
      let descriptionsliderdesactivate = SelectedDiv.querySelector(
        ".descriptionsliderdesactivate"
      );

      slider_container_unique.classList.remove("slider_container");
      slider_container_unique.classList.add("slider_container_desactivate");

      slider_unique.classList.remove("slider");
      slider_unique.classList.add("slider_desactivate");

      descriptionsliderdesactivate.classList.remove("dpnone");

      linkytb_container_unique.classList.remove("dpnone");

      SelectedDiv.classList.add("divprojectSelected");

      project.scrollIntoView({ behavior: "smooth" });

      divprojects.forEach((divproject) => {
        divproject.classList.remove("opacity_null");
      });
    }, 500);
  }
}

divprojects.forEach((div) => {
  div.addEventListener("click", function () {
    ClickProject(div);
  });
});

// -------------------------------------Slider desac-------------------------------------

let imgslider = document.querySelectorAll(".slider img");

function SliderMouseenter(SelectedImg) {
  if (SelectedImg.parentElement.classList.contains("slider_desactivate")) {
    imgslider.forEach((imgsli) => {
      imgsli.classList.remove("img_hover_slider_container_desactivate");
    });
    SelectedImg.classList.add("img_hover_slider_container_desactivate");
    let slider_container_desactivate_selected =
      SelectedImg.parentElement.parentElement;
  }
}

function SliderMouseover(slidercont) {
  if (slidercont.classList.contains("slider_container_desactivate")) {
    imgslider.forEach((imgslid) => {
      imgslid.classList.remove("img_hover_slider_container_desactivate");
    });
  }
}

slider_container.forEach((slidercont) => {
  slidercont.addEventListener("mouseleave", function () {
    SliderMouseover(slidercont);
  });
});

imgslider.forEach((img) => {
  img.addEventListener("mouseenter", function () {
    SliderMouseenter(img);
  });
});

// -------------------------------------Star anim-------------------------------------
let oldrandomstar = 0;
function StarAnim() {
  let rootsizesvg = document.querySelector(":root");
  let randomStar = getRandomIntInclusive(1, 5);

  while (randomStar == oldrandomstar) {
    randomStar = getRandomIntInclusive(1, 5);
  }

  if (randomStar == 1) {
    rootsizesvg.style.setProperty("--rotate_svg_star", `72deg`);
  } else if (randomStar == 2) {
    rootsizesvg.style.setProperty("--rotate_svg_star", `144deg`);
  } else if (randomStar == 3) {
    rootsizesvg.style.setProperty("--rotate_svg_star", `216deg`);
  } else if (randomStar == 4) {
    rootsizesvg.style.setProperty("--rotate_svg_star", `288deg`);
  } else if (randomStar == 5) {
    rootsizesvg.style.setProperty("--rotate_svg_star", `360deg`);
  }

  oldrandomstar = randomStar;
}
document.addEventListener("DOMContentLoaded", StarAnim);
document.addEventListener("DOMContentLoaded", () => {
  setInterval(StarAnim, 3000);
});

// -------------------------------------Arrow anim-------------------------------------

let pauseArrowAnim = false;

function ArrowAnim() {
  let rootpositionsvg = document.querySelector(":root");
  let arrow_bt_project = document.querySelector(".arrow_bt_project");

  if (pauseArrowAnim === true) {
    rootpositionsvg.style.setProperty("--arrow_svg_position_x_elmt1", "300px");
    rootpositionsvg.style.setProperty("--arrow_svg_position_x_elmt2", "300px");
    rootpositionsvg.style.setProperty("--arrow_svg_position_x_elmt3", "300px");
    rootpositionsvg.style.setProperty("--arrow_svg_position_x_elmt4", "300px");
    arrow_bt_project.style.transform = "translateX(130px)";
  } else {
    arrow_bt_project.style.transform = "translateX(0px)";
    if (
      rootpositionsvg.style.getPropertyValue("--arrow_svg_position_x_elmt1") ==
      "10px"
    ) {
      rootpositionsvg.style.setProperty(
        "--arrow_svg_position_x_elmt1",
        "300px"
      );
      setTimeout(() => {
        rootpositionsvg.style.setProperty(
          "--arrow_svg_position_x_elmt2",
          "300px"
        );
      }, 1000);
      setTimeout(() => {
        rootpositionsvg.style.setProperty(
          "--arrow_svg_position_x_elmt3",
          "300px"
        );
      }, 2000);
      setTimeout(() => {
        rootpositionsvg.style.setProperty(
          "--arrow_svg_position_x_elmt4",
          "300px"
        );
      }, 3000);
    } else {
      rootpositionsvg.style.setProperty("--arrow_svg_position_x_elmt1", "10px");
      rootpositionsvg.style.setProperty("--arrow_svg_position_x_elmt2", "10px");
      rootpositionsvg.style.setProperty("--arrow_svg_position_x_elmt3", "10px");
      rootpositionsvg.style.setProperty("--arrow_svg_position_x_elmt4", "10px");
    }
  }
}

let buttonproject = document.querySelector(".bttoproject");

buttonproject.addEventListener("mouseenter", () => {
  pauseArrowAnim = true;
  ArrowAnim();
});

buttonproject.addEventListener("mouseleave", () => {
  pauseArrowAnim = false;
  ArrowAnim();
});

document.addEventListener("DOMContentLoaded", ArrowAnim);
document.addEventListener("DOMContentLoaded", () => {
  setInterval(ArrowAnim, 4000);
});

// -------------------------------------Scroll anim-------------------------------------

function scrollToParcour() {
  let parcourSection = document.getElementById("parcour");
  parcourSection.scrollIntoView({ behavior: "smooth" });
}

function scrollToProjets() {
  let projetSection = document.getElementsByClassName("project")[0];
  projetSection.scrollIntoView({ behavior: "smooth" });
}

function scrollToHome() {
  let homeSection = document.getElementById("home");
  homeSection.scrollIntoView({ behavior: "smooth" });
}

function scrollToContact() {
  let contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
}
