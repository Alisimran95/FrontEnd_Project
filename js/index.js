// Navbar dropdown click
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle('active');

})

// Accordion FAQ section start


document.querySelectorAll(".accordion-question").forEach(a => {
    a.addEventListener("click", () => {
        if (a.classList.contains("accordion-question")) {
            a.nextElementSibling.classList.toggle("active");
        }
    })
})

// Accordion Faq section ends

// Parallax counter 
// const counters  = document.querySelectorAll(".counter");
// const countSpeed = 1;

// counters.forEach(c=>{
//     const boostCount = ()=>{
//         const dataCount = +c.getAttribute("data-count");
//         const count =  + c.innerText;

//         const increment = dataCount / countSpeed;

//         if (count<dataCount) {
//             c.innerText = count + increment;
//             setTimeout(boostCount,10000);
//         }
//         else{
//             c.innerText = dataCount;
//         }
//     }
//     boostCount();
// })
