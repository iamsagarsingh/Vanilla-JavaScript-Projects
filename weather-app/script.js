
const search = document.getElementById('search')
const btn = document.getElementsByClassName('btn')[0]
const icon = document.querySelector('.weather-img img')
const heading = document.querySelector('.heading h2')
const weatherTemp = document.querySelector('.weather-temp h1 span')
console.log(search.value);
function getData(){
    fetch(`
    http://api.weatherapi.com/v1/forecast.json?key=8a040031a29d4cc9b01124542221205&q=${search.value}&days=7`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        
        
            icon.setAttribute('src',data.current.condition.icon)
            heading.innerHTML = data.location.name + ", " + data.location.region + ", " + data.location.country
            weatherTemp.innerHTML = data.current.temp_c
        
    })
}

btn.addEventListener('click',e=>{
    e.preventDefault()
    getData()
})
getData()