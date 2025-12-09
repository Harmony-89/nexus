var nextbutton = document.querySelector(".nxt-btn");
var video = document.querySelector(".hero-video");

var movieList = [
  " https://res.cloudinary.com/dvxuedo6s/video/upload/v1765261543/hero-1_azxulh.mp4",
  " https://res.cloudinary.com/dvxuedo6s/video/upload/v1765261533/hero-2_ylfpgl.mp4",
  " https://res.cloudinary.com/dvxuedo6s/video/upload/v1765261520/hero-3_oht0nw.mp4",
  " https://res.cloudinary.com/dvxuedo6s/video/upload/v1765261544/hero-4_q3qj2x.mp4",
];

let index = 0;

nextbutton.addEventListener("click", function () {
  index += 1;
  video.src = movieList[index];

  if (index > 2) {
    index = -1;
  }
});

//navigation of the pop up menu
var shower = document.querySelector(".hum");

shower.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("active");
});
