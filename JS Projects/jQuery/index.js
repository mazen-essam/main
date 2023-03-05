// $("document").ready(function () {
//    $(".loading").fadeOut(15000);
// });

let img = $("#img").css("background-image");
console.log(img);

let imgs = $("img");
imgs.click(function () {
   let mainimg = $(this).attr("src");
   console.log(mainimg);
   $(".select").css("background-image", `url(${mainimg})`);
   $(".select").css("background-size", `cover`);
   $(".select").css("background-position", `center`);
});
