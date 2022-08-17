let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu__nav');


burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    if(document.body.style.overflow != 'hidden'){
        document.body.style.overflow = 'hidden';
    }
    else{
        document.body.style.overflow='scroll';
    }
})





