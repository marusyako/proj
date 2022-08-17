let nameValue = document.getElementById('name');
let mailValue = document.getElementById('email');
let subjectValue = document.getElementById('subject');
let messageValue = document.getElementById('message');
let btn = document.getElementById('btn');
let inner = '';





nameValue.addEventListener('click', ()=>{
    
        nameValue.style.color = "rgba(66, 68, 90, 1)";
        nameValue.value = "Exp: Mariia";
        let t = setTimeout(()=>{
            nameValue.value = ''
        },1000);    
})

mailValue.addEventListener('click', ()=>{
    
    mailValue.style.color = "rgba(66, 68, 90, 1)";
    mailValue.value = "example@mail.com";
    let t = setTimeout(()=>{
        mailValue.value = ''
    },1000);    
})




nameValue.addEventListener('keyup', ()=>{
    if( 
        nameValue.value.search(/[A-Z][a-z]+/) === -1){
       nameValue.style.boxShadow = "2px 2px 19px 2px rgb(189, 14, 14)"; 
    }
    else{
        nameValue.style.boxShadow = "2px 2px 19px 2px rgb(25, 97, 25)";
    }

});

mailValue.addEventListener('keyup', ()=>{
    if( 
        mailValue.value.search(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/) === -1){
        mailValue.style.boxShadow = "2px 2px 19px 2px rgb(189, 14, 14)"; 
    }
    else{
        mailValue.style.boxShadow = "2px 2px 19px 2px rgb(25, 97, 25)";
    }

});

subjectValue.addEventListener('keyup', ()=>{
    if(subjectValue.value.search(/^[а-яА-Яa-zA-Z ]+$/) === -1 && subjectValue.value.search(/[0-9]/)){
        subjectValue.value = inner;
        subjectValue.style.boxShadow = "2px 2px 19px 2px rgb(189, 14, 14)"; 
    }
    else if(subjectValue.value == ''){
        subjectValue.style.boxShadow="2px 2px 10px 2px rgba(248, 248, 248, 0.5)"
    }
    else{

        subjectValue.style.boxShadow="2px 2px 10px 2px rgba(248, 248, 248, 0.5)"
    }
})
subjectValue.addEventListener('blur',()=>{
    if(subjectValue.value == ''){
        subjectValue.style.boxShadow="none";
    }
})






btn.addEventListener('click', (e)=>{
    e.preventDefault();

    localStorage.setItem('name', nameValue.value);
    localStorage.setItem('email', mailValue.value);
    localStorage.setItem('subject', subjectValue.value);
    localStorage.setItem('message', messageValue.value);
    

 if(subjectValue.value.toLowerCase().split(' ').join('') =='зробитизамовлення'){
        alert("We'll call you soon!");
        
    }

    nameValue.value = inner;
    mailValue.value = inner;
    subjectValue.value = inner;
    messageValue.value = inner;

   
})