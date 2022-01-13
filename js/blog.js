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