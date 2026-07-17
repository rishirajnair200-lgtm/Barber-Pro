// =========================
// LUXURY BARBER SHOP SCRIPT
// PART 1 - NAVIGATION & EFFECTS
// =========================


// Mobile Menu Toggle

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}


// Smooth Scrolling

document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }

    });

});


// Navbar Scroll Effect

window.addEventListener("scroll",()=>{

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }

});


// Reveal Animation On Scroll

const revealElements = document.querySelectorAll(
    ".service-card, .gallery-grid img, .about-content"
);


const revealOnScroll = () => {

    revealElements.forEach(element => {

        const position = element.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){

            element.classList.add("show");

        }

    });

};


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();
