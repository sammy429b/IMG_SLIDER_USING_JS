let nextButton = document.querySelector('#nextbtn')
let prevButton = document.querySelector('#prevbtn')
let list = ["./images/1.jpg","/images/2.webp","./images/3.jpg","./images/6.jpg","./images/8.webp"]

let i = 0
nextButton.addEventListener("click",function () {
  i++
  if(i>4){
    i = 0;
  }
  document.getElementById("img").setAttributeNS(null,"src",list[i])
})

prevButton.addEventListener("click",function () {
  i--
  if(i<0){
    i = 4;
  }
  document.getElementById("img").setAttributeNS(null,"src",list[i])
  
})