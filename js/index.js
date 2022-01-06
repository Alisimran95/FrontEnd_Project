// Navbar dropdown click
const menuIcon = document.querySelector(".menu-icon");
const navLinks =document.querySelector(".nav-links");

menuIcon.addEventListener("click",()=>{
    navLinks.classList.toggle('active');

})

// accordion for navbar

// const accordionClick = document.querySelectorAll('.accordion-click');
// const dropdown = document.querySelector(".dropdown");

// accordionClick.forEach(a=>{
//     a.addEventListener('click',(e)=>{
//         console.log(dropdown);
//         if (dropdown.style.display === "block") {
//             dropdown.style.display ="none";
//         }
//         else{
//             dropdown.style.display ="block"
//         }
//     })
// })