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
// =========================
// PART 2 - PREMIUM EFFECTS
// =========================


// Page Loading Animation

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        },800);

    }

});


// Booking Button Alert

const bookingBtn = document.querySelector(".booking-btn");

if(bookingBtn){

    bookingBtn.addEventListener("click",()=>{

        alert(
            "Welcome to our Barber Shop! Contact us to reserve your premium grooming session."
        );

    });

}


// Image Hover Zoom Effect

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.filter="brightness(1.15)";

    });


    img.addEventListener("mouseleave",()=>{

        img.style.filter="brightness(1)";

    });

});


// Dynamic Year In Footer

const year = document.querySelector("#year");

if(year){

    year.textContent = new Date().getFullYear();

}


// Back To Top Button

const topBtn = document.querySelector(".top-btn");


window.addEventListener("scroll",()=>{

    if(topBtn){

        if(window.scrollY > 400){

            topBtn.style.display="block";

        }
        else{

            topBtn.style.display="none";

        }

    }

});


if(topBtn){

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

        }
