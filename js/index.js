// Header section start
// Navbar dropdown click
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
const accordionClick1=document.querySelector(".accordion-click-1");
const accordionClick2 =document.querySelector(".accordion-click-2")
const dropdownMenu = document.querySelector("#dropdown-1");
const dropdownMenu2 = document.querySelector("#dropdown-2");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
accordionClick1.addEventListener("click",()=>{
    dropdownMenu.classList.toggle('accord-active');
})
accordionClick2.addEventListener('click',()=>{
    dropdownMenu2.classList.toggle('accord-active')
})

// navbar sticky 
const navbar = document.querySelector("#navbar");
// const intro = document.querySelector("#intro");
// const firstSectionY = intro.getBoundingClientRect();

window.addEventListener('scroll',(e)=>{
    if (window.scrollY>navbar.scrollTop) {
        navbar.classList.add("sticky");    
    }
    else{
        navbar.classList.remove("sticky");
    }
});
// Header ends

// PARALLAX COUNTER 

function parallaxCounter(){
    const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{
    counter.innerText = "0";

    const updateCounter = () =>{
        let target = +counter.getAttribute("data-count");
        let main = +counter.innerText;
        let prCoordinant= document.querySelector("#parallax-counter");

        let increment = target/100;
        if (main < target) {
            counter.innerText = `${Math.ceil(main + increment)}`;
            setTimeout(updateCounter,10);
        }
        else{
            counter.innerText = target;
        }
    }
    updateCounter();
});
};
parallaxCounter();
// PARALLAX COUNTER

// PreLoader
window.addEventListener("load",()=>{
    document.querySelector("#preloader").classList.add("loader-hide");
});
