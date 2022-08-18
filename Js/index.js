const prevBtn = document.querySelector("#btnPrev");
const nextBtn = document.querySelector("#btnNext");

const firstContent = document.querySelector("#firstContent");
const secondContent = document.querySelector("#secondContent");
const thirdContent = document.querySelector("#thirdContent");

let firstDiv = document.querySelector("#firstDiv");
let secondDiv = document.querySelector("#secondDiv");
let thirdDiv = document.querySelector("#thirdDiv");

let block = "block";
let none = "none";
firstContent.style.display = block;

//when nextBtn is clicked
nextBtn.addEventListener("click", function () {
  if (firstContent.style.display == block) {
    firstContent.style.display = none;
    secondContent.style.display = block;
    thirdContent.style.display = none;
  } else if (secondContent.style.display == block) {
    firstContent.style.display = none;
    secondContent.style.display = none;
    thirdContent.style.display = block;
  } else if (thirdContent.style.display == block) {
    firstContent.style.display = block;
    secondContent.style.display = none;
    thirdContent.style.display = none;
  }
});

//when prevBtn is clicked
prevBtn.addEventListener("click", function () {
  if (firstContent.style.display == block) {
    firstContent.style.display = none;
    secondContent.style.display = block;
    thirdContent.style.display = none;
  } else if (secondContent.style.display == block) {
    firstContent.style.display = none;
    secondContent.style.display = none;
    thirdContent.style.display = block;
  } else if (thirdContent.style.display == block) {
    firstContent.style.display = block;
    secondContent.style.display = none;
    thirdContent.style.display = none;
  }
});
