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

// FORM COMMENT SECTION 
let comments =[];

const addComment =(e)=>{
    e.preventDefault();

    // Date for show
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    let comment ={
        date:dateTime,
        username:document.getElementById("username").value,
        email:document.getElementById("email").value,
        post:document.getElementById("textarea").value
    }

    comments.push(comment);
    // console.log(comments);

    // Localstorage saving
    localStorage.setItem("MyComments",JSON.stringify(comments));

    // add html
    if (comments.length > 0) {
        let result = comments.map(c=>{
           return `
           <div class="comments-item">
           <div class="user-image"><img src="./assets/images/comment-avatar.png"
                   alt="comment avatar"></div>
           <div class="comment-body">
               <h5 class="username">${c.username}</h5>
               <div class="comment">
                   <div class="comment-date">
                       <span>${c.date}</span>
                   </div>
                   <a class="reply-btn" href="#">
                       <i class="fas fa-reply"></i>
                       <span id="reply">Reply</span>
                   </a>
               </div>
               <div class="comment-about">
                   <p>${c.post}</p>
               </div>
           </div>
       </div>
            `
        })  
        document.querySelector(".comments-title").nextElementSibling.innerHTML = result.join('');
        document.querySelector("#quantity").innerHTML++;
    }
    else{
     alert("comment")
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("blog-submit").addEventListener('click',addComment);
})
// FORM COMMENT SECTION

// PreLoader
window.addEventListener("load",()=>{
    document.querySelector("#preloader").classList.add("loader-hide");
});
