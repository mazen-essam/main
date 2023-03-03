let input = document.getElementById("input");
let num0 = document.getElementById("num0");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let num6 = document.getElementById("num6");
let num7 = document.getElementById("num7");
let num8 = document.getElementById("num8");
let num9 = document.getElementById("num9");
let num_plus = document.getElementById("num_plus");
let num_diff = document.getElementById("num_diff");
let num_div = document.getElementById("num_div");
let num_equal = document.getElementById("num_equal");
let num_clear = document.getElementById("num_clear");
let arr = [];
let counter = 0;
let display = "";
let all_nums = document.getElementsByClassName("col-lg-2");
num_diff.addEventListener("click", function () {
   // input.value.toString().slice(0, -1);
   input.value += "-";
});

num_div.addEventListener("click", function () {
   input.value += "/";
});

num_equal.addEventListener("click", function () {
   input.value = eval(input.value);
});
num0.addEventListener("click", function () {
   input.value += "0";
});
num1.addEventListener("click", function () {
   input.value += "1";
});
num2.addEventListener("click", function () {
   input.value += "2";
});
num3.addEventListener("click", function () {
   input.value += "3";
});
num4.addEventListener("click", function () {
   input.value += "4";
});
num5.addEventListener("click", function () {
   input.value += "5";
});
num6.addEventListener("click", function () {
   input.value += "6";
});
num7.addEventListener("click", function () {
   input.value += "7";
});
num8.addEventListener("click", function () {
   input.value += "8";
});
num9.addEventListener("click", function () {
   input.value += "9";
});
num_clear.addEventListener("click", function () {
   input.value = "";
   // arr.splice(0);
});
num_plus.addEventListener("click", function () {
   input.value += "+";
});
