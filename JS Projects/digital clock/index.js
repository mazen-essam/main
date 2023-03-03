// function displaytime() {
//    //    let hours = document.getElementById("hours");
//    //    let mins = document.getElementById("min");
//    //    let sec = document.getElementById("seconds");

//    var clock = new Date();
//    var cloc_h = clock.getHours();
//    var cloc_m = clock.getMinutes();
//    var cloc_s = clock.getSeconds();
//    var timing = document.getElementById("time");
//    console.log(hours);
//    //    if (hours < 12) {
//    //       timing.innerHTML = `AM`;
//    //    } else {
//    //       timing.innerHTML = `PM`;
//    //    }
//    //    if (hours >= 12) {
//    //       hours -= 12;
//    //    }
//    document.getElementById("hours").innerHtml = `${cloc_h}`;
//    document.getElementById("min").innerHtml = cloc_m;
//    document.getElementById("seconds").innerHtml = cloc_s;
// }
// // setInterval(Time, 10);

function displayTime() {
   var dateTime = new Date();
   var hrs = dateTime.getHours();
   var min = dateTime.getMinutes();
   var sec = dateTime.getSeconds();
   var session = document.getElementById("session");

   if (hrs >= 12) {
      session.innerHTML = "PM";
   } else {
      session.innerHTML = "AM";
   }

   if (hrs > 12) {
      hrs = hrs - 12;
   }

   document.getElementById("hours").innerHTML = hrs;
   document.getElementById("minutes").innerHTML = min;
   document.getElementById("seconds").innerHTML = sec;
}
setInterval(displayTime, 10);
