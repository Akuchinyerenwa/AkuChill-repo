/* THIS IS FOR THE MAIN PAGE TIME */
const hourEL = document.getElementById("hour");
const minuteEL = document.getElementById("minute");
const secondEL = document.getElementById("second");

setInterval(() => {
  const currentTime = new Date();

  hourEL.textContent = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  minuteEL.textContent = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  secondEL.textContent = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);
/* --------------------------------- */

/* THIS IS FOR THE TEXT ANIMATION */
const textAnimationEL = document.getElementById("text-animation");
let textArray = ["Akuchinyerenwa", "A Web Developer", "A Freelancer", "An Instructor", "A Programmer"];
let arrIndex = 0;

setInterval(() => {
  textAnimationEL.textContent = `I am ${textArray[arrIndex]}`;
  arrIndex++;

  if (arrIndex >= textArray.length) {
    arrIndex = 0;
  }
}, 2500);
/* ------------------------------- */

/* THIS IS FOR THE SEARCH INPUT */
const searchInputEl = document.getElementById("search-input");
const searchInputBtn = document.getElementById("search-input-btn");

searchInputBtn.addEventListener("click", function () {
  if (!searchInputEl.value) {
    alert(`The input field is empty! \nPlease make sure you type something in the box.`);
  }else {
    alert(`Sorry third party search blocked!!!  \nSearch for ${searchInputEl.value} cannot be completed \nTry again later please.`);
  }

  searchInputEl.value = "";
})
/* ---------------------------- */