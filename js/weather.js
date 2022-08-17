fetch('https://api.openweathermap.org/data/2.5/weather?lat=46.9329791&lon=31.86791311&appid=d4148411f9ca3a8012954b323cabc4e2')
    .then(res=>{return res.json()})
    .then(data=>{
    
    document.querySelector('.weather__city').textContent=data.name;
    document.querySelector('.weather__temp').innerHTML = Math.floor((data.main.temp-273))+'&deg;';
    document.querySelector('.weather__disclaimer').textContent=data.weather[0].main;
    document.querySelector('.weather__img').innerHTML=`<img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
    


})
