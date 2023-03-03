let hour = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");

function time() {
   let clock = new Date();
   let hour_arrow = clock.getHours() * 30;
   let min_arrow = clock.getMinutes() * 6;
   let sec_arrow = clock.getSeconds() * 6;
   hour.style.transform = `rotate(${hour_arrow}deg)`;
   min.style.transform = `rotate(${min_arrow}deg)`;
   sec.style.transform = `rotate(${sec_arrow}deg)`;
}
setInterval(time, 1000);
