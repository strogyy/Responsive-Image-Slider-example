let counter = 0;
const back = document.querySelector(".back");
const next = document.querySelector(".next");
const sliderContainer = document.querySelector(".slider-container");
let slideWidth = document.querySelector(".slide").clientWidth;
const slider = document.querySelector(".slider");
const max = document.querySelectorAll(".slide").length - 1;
const slideIcons = document.querySelectorAll(".slide-icon");

//slide icon class func

function activeClassRemove() {
  for (var e = 0; e < slideIcons.length; e++) {
    slideIcons[e].classList.remove("active");
  }
}
function activeClassAdd() {
  slideIcons[counter].classList.add("active");
}

//slide icon class func

//right arrow

window.addEventListener("resize", sliderFunc);
next.addEventListener("click", sliderFunc);

function sliderFunc() {
  slider.style.transition = "1s ease";
  activeClassRemove();
  counter = counter < max ? counter + 1 : 0;
  slider.style.left = `-${slideWidth * counter}px`;
  slideWidth = document.querySelector(".slide").clientWidth;
  activeClassAdd();
}

//right arrow

//left arrow

window.addEventListener("resize", backEvent);
back.addEventListener("click", backEvent);

function backEvent() {
  slider.style.transition = "1s ease";
  activeClassRemove();
  counter = 1 <= counter ? counter - 1 : (counter = max);
  slider.style.left = `-${slideWidth * counter}px`;
  slideWidth = document.querySelector(".slide").clientWidth;
  activeClassAdd();
}

//left arrow

//while resizeing

window.addEventListener("resize", () => {
  slider.style.transition = "none";
  clearInterval(timer);
});

//while resizeing

//mousevnt

let timer = setInterval(sliderFunc, 6000);

sliderContainer.addEventListener("mouseover", () => {
  clearInterval(timer);
});

sliderContainer.addEventListener("mouseout", () => {
  timer = setInterval(sliderFunc, 6000);
});

//mousevnt

//slide icon toggle

slideIcons[0].addEventListener("click", () => {
  slider.style.transition = "1s ease";
  activeClassRemove();
  counter = 0;
  slider.style.left = `-${slideWidth * counter}px`;
  activeClassAdd();
});
slideIcons[1].addEventListener("click", () => {
  slider.style.transition = "1s ease";
  activeClassRemove();
  counter = 1;
  slider.style.left = `-${slideWidth * counter}px`;
  activeClassAdd();
});

//slide icon toggle
