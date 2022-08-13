 // ─── SHOW MENU WHEN CLICK BUTTON ────────────────────────────────────────────────
const navbtn = document.getElementById('nav_toggle');
navbtn.addEventListener('click',toggling);  
const toggle = document.getElementById('menu');
function toggling(){
    toggle.classList.toggle("show_menu");  // TOGGLEING CLASS 
  }

// ────────────────────────────────────────────────────────────────────────────────
// ─── WHEN SCROLL AT A POINT APPLING SHADOW IN HEADER ────────────────────────────
window.addEventListener('scroll',scrolling);
function scrolling(){
   const headerShadow = document.getElementById('header');
  if(window.scrollY > 0){
      headerShadow.classList.add('scroll_header');
  }else{
    headerShadow.classList.remove('scroll_header');
  }
}

// ──────────────────────────────────────────────────────────────────  ──────────
//   :::::: T O P   S C R O L L I N G : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────
// ============ SHOW SCROLL TOP BAR ========== 
function scrolltop() {
  const scrollTop = document.getElementById('scroll-top');
  //  WHEN THE SCROLL IS HIGHER THAN 500 VIEWPORT HEIGHT , ADD THE SHOW-SCROLL CLASS ( ͡° ͜ʖ ͡°). 
  if (this.scrollY >= 360) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top');
}
window.addEventListener("scroll", scrolltop);
// ──────────────────────────────────────────────


/*
        -- ──────────────────────────────────────────────────────────── I ──────────
        --   :::::: C E R A S U L   J S : :  :   :    :     :        :          :
        -- ──────────────────────────────────────────────────────────────────────
        */

var baseIndex = 1;
var timer;
var slidesContainer;

// ─── ALL  FUNCTION SEE BALOW DOWN ────────────────────────────────

window.addEventListener("load", () => {          // ! IMPORTANT FANCTION
  hideActive(baseIndex);
  setTimeout(() => {
    controlar(1);
  }, 4000);

  // WHEN MOUSE GOING ON IMAGE AND LAEVE ON IMAGE 
  const showslides = document.querySelectorAll(".rooms_container")[0];
  const img_tap = document.querySelectorAll(".img_tap")[0];

  showslides, img_tap.addEventListener('mouseenter', pause);
  showslides, img_tap.addEventListener('mouseleave', resume);
})

function controlar(value) {
  clearInterval(timer);
  if (value < 0) { hideActive(baseIndex -= 1) }
  else { hideActive(baseIndex += 1) };

  // ─── FOR AUTO IMAGE NEXT ───────────────────────────────────────────
  if (value < 0) { timer = setTimeout(() => { controlar(value + 1) }, 4000); }
  else { timer = setTimeout(() => { controlar(value) }, 4000) }
}

function hideActive(baseVal) {
  const figure = document.querySelectorAll(".rooms_contant");
  const gallery = document.querySelectorAll("#gallery_img");

  // VALIDATE THE BASEVAL 
  if (baseVal == 0) { baseIndex = figure.length }
  else if (baseVal > figure.length) { baseIndex = 1 };

  figure.forEach((element, index) => {            // TODO HIDE & REMOVE CLASS IN BOTH NODELIST & EVENT ON GALLERY
    element.style.display = "none";
    gallery[index].className = gallery[index].className.replace("active_img", "");
    

    // ADDING SEC IN GALLERY IMAGE
    gallery[index]["src"] = figure[index].children[0]['src'];
    // ADDING TITLE "alt" IN IMAGE
    element.children[1].innerText = element.children[0]["alt"]

    // ADD EVENT ON GALLERY
    gallery[index].onclick = () => {
      hideActive(baseIndex = index + 1);
    }
  });

  // SHOW ONE IMAGE AT A TIME
  figure[baseIndex - 1].style.display = "block";
  gallery[baseIndex - 1].className = "active_img";
}

// ─── WHEN MOUSE ON ING AND LAEVE ─────────────────────────────────
pause = () => {
  clearInterval(timer);
}

resume = () => {
  clearInterval(timer);
  timer = setInterval(function () { hideActive(baseIndex) }, 4000);
}

// ────────────────────────────────────────────────────────────────────────────────────── II ──────────
//   :::::: S R C O O L   R E V E A L   A N I M A T I O N : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────

const revealContant = ['.home_contant','.home_img','.about_contant','.about_img','.services','.rooms','.book_contant','.book_img','.contact_contant','.contact_button','.footer_contant'
];

window.addEventListener("scroll",reveal);

function reveal(){
  const contant = document.querySelectorAll(revealContant);
  contant.forEach((element,index) =>{
    var windowHeight = window.innerHeight;
    var contantHeight = element.getBoundingClientRect().top;
    var distanceHeight = 200;

    if (contantHeight < windowHeight - distanceHeight){
      element.classList.add("showReveal");
    }else{
      element.classList.remove("showReveal");
    }
  })
}

