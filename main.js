const hourEL = document.getElementById("hour");
const minuteEL = document.getElementById("minute");
const secondEL = document.getElementById("second");

setInterval(() => {
  const currentTime = new Date();

  hourEL.textContent = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  minuteEL.textContent = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  secondEL.textContent = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);