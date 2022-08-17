let toggle = document.querySelector('.mask');
let icon = document.querySelectorAll('.icon-wrap');
let body = document.querySelector('body');
let header = document.querySelector('.header__inner');
let menuTitle = document.querySelectorAll('.menu__item');
let first = document.querySelector('.first');
let main = document.querySelector('.main');
let second = document.querySelector('.second');
let text = document.querySelectorAll('.inner__text');
let titles = document.querySelectorAll('.inner__title');

toggle.addEventListener('click', ()=>{
    console.log('toggle')
    icon.forEach((item)=>{
        item.classList.toggle('active');
    })
    header.classList.toggle('dark');
    menuTitle.forEach(item =>{
        item.classList.toggle('dark')
    })
    
    body.classList.toggle('dark');
    first.classList.toggle('dark');
    main.classList.toggle('dark');
    second.classList.toggle('dark');
    text.forEach(item =>{
        item.classList.toggle('dark');
    });
    titles.forEach(item =>{
        item.classList.toggle('dark');
    });

})

changeThemeLocalTime();

function changeThemeLocalTime(){
    const date = new Date();
    const hour = date.getHours();
    if (hour < 6 || hour > 21) {
        icon[0].classList.remove('active');
        icon[1].classList.add('active');
        body.classList.add('dark');
        header.classList.toggle('dark');
        menuTitle.forEach(item =>{
            item.classList.toggle('dark')
            
        });
        first.classList.toggle('dark');
        main.classList.toggle('dark');
        second.classList.toggle('dark');
        text.forEach(item =>{
            item.classList.toggle('dark');
        });
        titles.forEach(item =>{
            item.classList.toggle('dark');
        });
    
    } 
  }

