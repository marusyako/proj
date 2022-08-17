let leftArrow = document.querySelector('.slider__arrowL');
let rightArrow = document.querySelector('.slider__arrowR');
let slides = document.querySelectorAll('.slider__slide'); 




let index = 0;


rightArrow.addEventListener('click', lookNext);
leftArrow.addEventListener('click', lookPrev);



function activeSlide(n){
    for(item of slides){
        item.classList.remove('active');
    }

    
    slides[n].classList.add('active');

}

function lookNext(){
    
    if( index == slides.length-1 ){
        activeSlide(index);
        rightArrow.style.opacity ='0.5';
     }
    else { 
        leftArrow.style.opacity = '1';
        rightArrow.style.opacity ='1';
        index++;
        activeSlide(index);
    }

    
}

function lookPrev(){
    if( index == 0){
        leftArrow.style.opacity ='0.5';
        activeSlide(index);
        
     }
     else { 
        rightArrow.style.opacity ='1';
        leftArrow.style.opacity ='1';
         index--;
         activeSlide(index);
         
     }
}

