var nextbutton = document.querySelector('.nxt-btn');
var video = document.querySelector('.hero-video');




var movieList = [' videos/hero-1.mp4',' videos/hero-2.mp4',' videos/hero-3.mp4',' videos/hero-4.mp4'];

let index = 0;

nextbutton.addEventListener('click',function(){
    
    index +=1;
    video.src = movieList[index];

    if(index >2){
        index = -1;
    }

})


    //navigation of the pop up menu
    var shower = document.querySelector('.hum');

    shower.addEventListener('click', function(){
        document.querySelector('body').classList.toggle('active');
    })