let box = document.querySelector('.news')
let allPosts = document.querySelector('.news__more-link')
allPosts.addEventListener('click', showMore);
let article;

function showMore(){
    fetch('../js/catalogs/articles.json')
        .then(res => {return res.json()})
        .then(posts =>{
            let articles = [];
             
            posts.forEach(item =>{
                article = document.createElement('div');
                article.innerHTML=`<div class="news__img"><img src="${item.image}" alt=""></div>
                <div class="news__content">
                    <div class="news__title">${item.title}</div>
                    <div class="news__data">
                        <div class="news__time">${item.time}</div>
                        <div class="news__res">${item.resp}</div>
                    </div>
                    <div class="news__text">${item.desc}
                        <a href="#" class="news__more">(more...)</a>
                    </div>
                </div>`
                article.className='news__items';
                box.append(article);
                articles.push(article);
            });
        articles.push(article);
            
        window.addEventListener('scroll', ()=>{
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
            function offset(item){
                const rect = item.getBoundingClientRect(),
                scrollTop = document.documentElement.scrollTop;
                return {top: rect.top + scrollTop}
            }
        })
        
    })
    allPosts.classList.add('none')
}

