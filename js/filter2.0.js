let design= document.querySelector('#design');
let logo = document.querySelector('#logo');
let photography = document.querySelector('#photography');
let poster = document.querySelector('#poster');
let resources = document.querySelector('#resources');
let retro = document.querySelector('#retro');
let all = document.querySelector('#all');
let videos = document.querySelector('#videos');
let cardsBox = document.querySelector('.cards__wrapper')
let filters = document.querySelectorAll('.filter__item');
let cardField = document.querySelector('.cards')
let browse = document.querySelector('.third__link-all');

window.addEventListener('DOMContentLoaded', ()=>{
    fetch('../js/catalogs/portfolio.json')
    .then(res=>{return res.json()})
    .then(projects=>{
        let  tmp = JSON.parse(JSON.stringify(projects))// массив из карточек 
        //загрузка последних данных
        tmp.reverse();//порядок с конца элементов
        
        
          if(window.screen.width<648 )  { //немного для адаптива чтобы было 1 элемент
            let oneElem = tmp.slice(0,1)
            let out = generateCArds(oneElem)
            cardsBox.innerHTML=out.join('')
          }  
        else{
            let unloadEl = tmp.slice(0,6)    //для обычных экранов
        let check = generateCArds(unloadEl)
        cardsBox.innerHTML=check.join('')
        }     
        browse.addEventListener('click',()=>{
                    logo.classList.remove('active')
                    photography.classList.remove('active')
                    poster.classList.remove('active')
                    resources.classList.remove('active')
                    retro.classList.remove('active')
                    all.classList.remove('active')
                    videos.classList.remove('active')
                    design.classList.remove('active')
            if(cardsBox.childElementCount!==tmp.length){
                let more = generateCArds(tmp)
                cardsBox.innerHTML=more.join('')
            }
            else{
                return
            }
            
        })
          //блок фиотрации по категориям ниже 

        filters.forEach(filter=>{
            filter.addEventListener('click', event=>{
                
                if(event.target==design ){
                    logo.classList.remove('active')
                    photography.classList.remove('active')
                    poster.classList.remove('active')
                    resources.classList.remove('active')
                    retro.classList.remove('active')
                    all.classList.remove('active');
                    videos.classList.remove('active');
                    design.classList.toggle('active')
                    browse.classList.remove('hide')
                    let filterItems=[]
                    for(el of tmp){
                    if(el.params.category =='design'){
                        filterItems.push(el)
                    }
                    } 

                    let check = generateCArds(filterItems)
                    cardsBox.innerHTML=check.join('')
                }
                
                else if(event.target==logo){
                    photography.classList.remove('active')
                    poster.classList.remove('active')
                    resources.classList.remove('active')
                    retro.classList.remove('active')
                    all.classList.remove('active');
                    videos.classList.remove('active');
                    design.classList.remove('active')
                    logo.classList.toggle('active');
                    browse.classList.remove('hide')
                    let filterItems=[]
                    for(el of tmp){
                    if(el.params.category =='logo'){
                        filterItems.push(el)
                    }
                    } 

                    let check = generateCArds(filterItems)
                    cardsBox.innerHTML=check.join('')
                }
                else if(event.target== photography){
                    logo.classList.remove('active')
                    poster.classList.remove('active')
                    resources.classList.remove('active')
                    retro.classList.remove('active')
                    all.classList.remove('active');
                    videos.classList.remove('active');
                    design.classList.remove('active')
                    photography.classList.toggle('active');
                    browse.classList.remove('hide')
                    let filterItems=[]
                    for(el of tmp){
                    if(el.params.category =='photography'){
                        filterItems.push(el)
                    }
                    } 

                    let check = generateCArds(filterItems)
                    cardsBox.innerHTML=check.join('')
                }
                else if(event.target== poster){
                    logo.classList.remove('active')
                    photography.classList.remove('active')
                    resources.classList.remove('active')
                    retro.classList.remove('active')
                    all.classList.remove('active');
                    videos.classList.remove('active');
                    design.classList.remove('active')
                    poster.classList.toggle('active');
                    browse.classList.remove('hide')
                    let filterItems=[]
                    for(el of tmp){
                    if(el.params.category =='poster'){
                        filterItems.push(el)
                    }
                    } 

                    let check = generateCArds(filterItems)
                    cardsBox.innerHTML=check.join('')
                }
                else if(event.target== resources){
                    logo.classList.remove('active')
                    photography.classList.remove('active')
                    poster.classList.remove('active')
                    retro.classList.remove('active')
                    all.classList.remove('active');
                    videos.classList.remove('active');
                    design.classList.remove('active')
                    resources.classList.toggle('active');
                    browse.classList.remove('hide')
                    let filterItems=[]
                    for(el of tmp){
                    if(el.params.category =='resources'){
                        filterItems.push(el)
                    }
                    } 

                    let check = generateCArds(filterItems)
                    cardsBox.innerHTML=check.join('')
                }
                else if(event.target== retro){
                    logo.classList.remove('active')
                    photography.classList.remove('active')
                    poster.classList.remove('active')
                    resources.classList.remove('active')
                    all.classList.remove('active');
                    videos.classList.remove('active');
                    design.classList.remove('active')
                    retro.classList.toggle('active');
                    browse.classList.remove('hide')
                    let filterItems=[]
                    for(el of tmp){
                    if(el.params.category =='retro'){
                        filterItems.push(el)
                    }
                    } 

                    let check = generateCArds(filterItems)
                    cardsBox.innerHTML=check.join('')
                }
                else if(event.target== videos){
                    logo.classList.remove('active')
                    photography.classList.remove('active')
                    poster.classList.remove('active')
                    resources.classList.remove('active')
                    all.classList.remove('active');
                    retro.classList.remove('active');
                    design.classList.remove('active')
                    videos.classList.toggle('active');
                    browse.classList.remove('hide')
                    let filterItems=[]
                    for(el of tmp){
                    if(el.params.category =='videos'){
                        filterItems.push(el)
                    }
                    } 

                    let check = generateCArds(filterItems)
                    cardsBox.innerHTML=check.join('')
                }
                else if(event.target== all){
                    logo.classList.remove('active')
                    photography.classList.remove('active')
                    poster.classList.remove('active')
                    resources.classList.remove('active')
                    videos.classList.remove('active');
                    retro.classList.remove('active');
                    design.classList.remove('active')
                    all.classList.toggle('active');
                    browse.classList.add('hide')
                    let filterItems=[]
                    tmp.forEach(item=>{
                        filterItems.push(item)
                    })
                    let check = generateCArds(filterItems)
                    cardsBox.innerHTML=check.join('')
                }
                else{
                  
                    return
                }
            })
   
        })
    })

})
//функиция вывода элементов
function generateCArds(filtered){ 
    const elemArr = []; //будет содержать штмл-элементы(количество)
    filtered.forEach(element=>{
       elemArr.push(
        `<div class="cards__item-wrap first">
        <div class="cards__item">
        <img src="${element.image}" alt="">
        <div class="card__item-hidden hidden">
            <h6 class="hidden__name">Project 1</h6>
            <p class="hidden__date">20.03.2005</p>
            <p class="hidden__stack">HTML, CSS, JS</p>
            <p class="hidden__cost">120$</p>
        </div>
    </div>
    <div class="cards__desc">
        <div class="cards__img"><img src="../img/icons/gallery_portfolio.png" alt=""></div>
        <div class="cards__text">${element.desc}</div>
    </div>
    </div>
    `
       ) 
    
    })
    return elemArr;
}















