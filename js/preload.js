let preload = document.querySelector('.preload');

document.body.onload = function(){
    document.body.style.overflow = 'hidden';
    setTimeout(()=>{
        
        if( !preload.classList.contains('done')){
            preload.classList.add('done');
            document.body.style.overflow = 'scroll';
        }
    }, 5000)
}

