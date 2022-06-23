var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 300,
   
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

    makeClone();

    function makeClone() {
        for(var i = 0; i<slideCount; i++) {
            var cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');  
            slides.appendChild(cloneSlide);  
        }
        for( var i = slideCount-1; i>=0; i--){
            var cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');  
            slides.prepend(cloneSlide);  
        }
        updateWidth();
        setInitialPos();
        setTimeout(function(){ 
            slides.classList.add('animated');
        },100);
    }


function updateWidth() {
    var currentSlides = document.querySelectorAll('.slides li');
    var newSlideCount = currentSlides.length;

    var newWidth = (slideWidth)*newSlideCount +'px';
    slides.style.width = newWidth; 
}
function setInitialPos() {
    var initialTranslateValue = -(slideWidth)*slideCount;
    slides.style.transform = 'translateX('+ initialTranslateValue+'px)';
}



function moveSlide(num){
    slides.style.left = -num * (slideWidth) + 'px';
    currentIdx = num;
    console.log(currentIdx, slideCount);

    if(currentIdx == slideCount || currentIdx == -slideCount){

        setTimeout(function(){
            slides.classList.remove('animated');
            slides.style.left = '0px';
            currentIdx = 0;    
        },500);
        setTimeout(function(){
            slides.classList.add('animated');
        },600);
    }
}


    var timer = undefined;

    function autoSlide() {
        if(timer == undefined){
            timer = setInterval(function(){
                moveSlide(currentIdx + 1);
            }, 5000);
        }
    }
    autoSlide();