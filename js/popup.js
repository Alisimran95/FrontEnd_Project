let images = document.querySelectorAll(".gallery .col-slider a");
let popup = document.querySelector(".popup");
let biggestImg = document.querySelector(".popup .inner img");
let closeIcon = document.querySelector(".close-icon");
let prevBtn = document.querySelector(".arrows .prev");
let nextBtn = document.querySelector(".arrows .next");

images.forEach((image) => {
  image.addEventListener("click", function (e) {
    e.preventDefault();
    doOpen();
    changableImage(this);
    this.classList.add("showSlide");

  });
});
nextBtn.addEventListener("click", function () {
  let showSlide = document.querySelector(".showSlide");
  nextElemSib(showSlide);
});

prevBtn.addEventListener("click", function () {
  let showSlide = document.querySelector(".showSlide");
  prevElemSib(showSlide);
});

function doOpen() {
  popup.style.display = "flex";
}

function doClose() {
  popup.style.display = "none";
}

closeIcon.addEventListener("click", function () {
  doClose();
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && popup.style.display === "flex") {
    doClose();
  }
});

function changableImage(item) {
  let imgSrc = item.getAttribute("href");
  biggestImg.setAttribute("src", imgSrc);
}

function nextElemSib(item) {
  if (item.parentElement.nextElementSibling !== null) {
    item.parentElement.nextElementSibling.children[0].classList.add("showSlide");
    changableImage(item.parentElement.nextElementSibling.children[0]);
  } else {
    item.parentElement.parentElement.children[0].children[0].classList.add("showSlide");
    changableImage(item.parentElement.parentElement.children[0].children[0]);
  }
  item.classList.remove("showSlide");
}

function prevElemSib(item) {
  let length = item.parentElement.parentElement.children.length;

  if (item.parentElement.previousElementSibling !== null) {
    item.parentElement.previousElementSibling.children[0].classList.add("showSlide");
    changableImage(item.parentElement.previousElementSibling.children[0]);
  } else {
    item.parentElement.parentElement.children[length - 1].children[0].classList.add("showSlide");
    changableImage(item.parentElement.parentElement.children[length - 1].children[0]);
  }
  item.classList.remove("showSlide");
}

popup.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    doClose();
  }
});


































// const allImages = document.querySelectorAll(".image-container")
// const imageView = document.querySelector(".image-view");
// const imageBox = document.querySelector(".image-box");
// const prveBtn =document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");
// const imageView = document.querySelector(".image-view");

// let currentIndex = 0;

// imageView.addEventListener('click',()=>{
//     this.style.display = "none";
//     imageBox.style.display="none";
// })

// allImages.forEach(function(btn,index){
//     btn.addEventListener("click",()=>{
//         imageBox.style.display="block";
//         currentIndex = index+1;
//         currentImageDisplay(currentIndex);
//     })
// })

// // function currentImageDisplay(position){
// //     imageBox.style.background =`url(../images/sliderimgs/${currentIndex}.jpeg) center/cover no-repeat`;
// // }
// // prveBtn.addEventListener("click",function(){
// //     currentIndex--;
// //     if (currentIndex == 0) {
// //         currentIndex =allImages.length;
// //     }
// //     currentImageDisplay(currentIndex);
// // })