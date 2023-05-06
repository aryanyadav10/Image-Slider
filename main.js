const nextEl = document.querySelector(".next");
const imageEl = document.querySelector(".image-container");
const imgsEl = document.querySelectorAll("img");
const prevEl = document.querySelector(".prev");

let currImg = 1;
let timeout;
nextEl.addEventListener("click",(event)=> {
    currImg++;
    clearTimeout(timeout);
    updateImg();
});
prevEl.addEventListener("click",(event)=> {
    currImg--;
    clearTimeout(timeout);
    updateImg();
});
updateImg();
function updateImg() {
    if(currImg > imgsEl.length) {
        currImg = 1;
    }
    else if(currImg < 1){
        currImg = imgsEl.length;
    }
    imageEl.style.transform = `translateX(-${(currImg-1) * 500}px)`;
    timeout = setTimeout(()=> {
       currImg++;
       updateImg();
    },3000)
}