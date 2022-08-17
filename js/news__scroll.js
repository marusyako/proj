let articles = document.querySelectorAll('.news__items');

window.addEventListener('scroll', scroll);


 function scroll(){
    articles.forEach(item =>{
        let articleHeight = item.offsetHeight;
        let positionTop = offset(item).top;
        let start = 4;


        let screenHeight = window.innerHeight - articleHeight/start;

        if((window.scrollY> positionTop- screenHeight) && window.scrollY< (positionTop + articleHeight)){
            item.classList.add('active');
        }
        else{
            item.classList.remove('active');
        }

    })
}

 function offset(item){
    const rect = item.getBoundingClientRect(),
    scrollTop = document.documentElement.scrollTop;
    return {top: rect.top + scrollTop}
}