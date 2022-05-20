let counter = 0;
const back = document.querySelector(".back");
const next = document.querySelector(".next");
const sliderContainer = document.querySelector("#slider-container");
var sliderContainerWidth =
  document.querySelector("#slider-container").clientWidth;
const slider = document.querySelector("#slider");
const max = document.querySelectorAll(".slide").length - 1;
const slideIcons = document.querySelectorAll(".slide-icon");

function activeClassRemove() {
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });
}
function activeClassAdd() {
  slideIcons[counter].classList.add("active");
}

window.addEventListener("resize", sliderFunc);
next.addEventListener("click", sliderFunc);

function sliderFunc() {
  slider.style.transition = "1s ease";
  activeClassRemove();
  if (counter < max) {
    counter++;
    slider.style.left = "-" + sliderContainerWidth * counter + "px";
  } else {
    counter = 0;
    slider.style.left = "-" + sliderContainerWidth * counter + "px";
  }
  sliderContainerWidth =
    document.querySelector("#slider-container").clientWidth;

  activeClassAdd();
}

window.addEventListener("resize", backEvent);
back.addEventListener("click", backEvent);

function backEvent() {
  activeClassRemove();

  if (counter >= 1) {
    counter--;
    slider.style.left = "-" + sliderContainerWidth * counter + "px";
  } else {
    counter = max;
    slider.style.left = "-" + sliderContainerWidth * counter + "px";
  }
  sliderContainerWidth =
    document.querySelector("#slider-container").clientWidth;

  activeClassAdd();
}

//while resizeing
window.addEventListener("resize", () => {
  slider.style.transition = "none";
  clearInterval(timer);
});

//mousevnt

let timer = setInterval(sliderFunc, 6000);

sliderContainer.addEventListener("mouseover", () => {
  clearInterval(timer);
});

sliderContainer.addEventListener("mouseout", () => {
  timer = setInterval(sliderFunc, 6000);
});
//mousevnt

slideIcons[0].addEventListener("click", () => {
  activeClassRemove();
  counter = 0;
  slider.style.left = "-" + sliderContainerWidth * counter + "px";
  activeClassAdd();
});
slideIcons[1].addEventListener("click", () => {
  activeClassRemove();
  counter = 1;
  slider.style.left = "-" + sliderContainerWidth * counter + "px";
  activeClassAdd();
});
