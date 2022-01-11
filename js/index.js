// Navbar dropdown click
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle('active');

})

// Accordion FAQ section start

// document.querySelectorAll(".accordion-question").forEach(a => {
//     a.addEventListener("click", () => {
//         if (a.classList.contains("accordion-question")) {
//             a.nextElementSibling.classList.toggle("active");
//         }   
//     })
// })

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



// Form comment javscript 

// const form = document.getElementById("form");
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const textarea = document.getElementById("textarea");

// let comments = [];
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
// })
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
    console.log(comments);

    // Localstorage saving
    localStorage.setItem("MyComments",JSON.stringify(comments));

    // 
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

