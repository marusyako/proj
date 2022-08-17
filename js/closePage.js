




function exitPage() {
    let timer;
    window.onload = reset;
    window.onmousemove = reset;
    window.onmousedown = reset;
    window.onclick = reset;
    window.onscroll = reset;
    window.onkeypress = reset;

    let modal = document.querySelector('.modal');
    let btnY = document.querySelector('.modal__Y');
    let btnN = document.querySelector('.modal__N');

    


    function exit() {
        
            modal.classList.add('active');
           let timer2 = setTimeout(()=>{
            window.close();
           }, 5000);
            btnY.addEventListener('click', ()=>{
                modal.classList.remove('active');
                clearTimeout(timer2);
            });
            btnN.addEventListener('click', ()=>{
                window.close()
            });
        
    }




    function reset() {
        clearTimeout(timer);
        timer = setTimeout(exit, 60000);
    }
}
exitPage();