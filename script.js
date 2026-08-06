let cityinput = document.getElementById("city")
let name = document.getElementById("name")
let state = document.getElementById("state")
let country = document.getElementById("country")
let temp = document.getElementById("temp")
let condition = document.getElementById("condition")
let icon = document.getElementById("icon")
let btn = document.getElementById("btn")
let humidity = document.getElementById("humidity")
let feelslike = document.getElementById("feelslike")
let wind = document.getElementById("wind")
let sunrise = document.getElementById("sunrise")
let sunset = document.getElementById("sunset")

// async function weather(city) {
//     try{
//         let data = await fetch(`https://api.weatherapi.com/v1/current.json?key=761d800540634701b9780631260408&q=${city}&aqi=yes`)
//     let response =  await data.json()
//     return response
//     }
//     catch(e){
//      console.log(e.message)
//     }

    
// }
async function getforecast(city) {
    try{
        let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=761d800540634701b9780631260408&q=${city}&days=7&aqi=yes`)
        let response = await data.json()
        console.log(response)
        return response; 
    }
    catch(e){
        console.log(e.message)
    }
}
async function showweather() {
    try{
     let  city = cityinput.value
        // let data = await weather(city)
        let data = await getforecast(city)
        name.textContent =`${data.location.name}`
        state.textContent = `${data.location.region}`
        country.textContent =`${data.location.country}`    
        temp.textContent = `${data.current.temp_c}`
        condition.textContent = `${data.current.condition.text}`
        icon.src = `https:${data.current.condition.icon}`
        wind.textContent =`${data.current.wind_kph}`
        humidity.textContent =`${data.current.humidity}`
        feelslike.textContent =`${data.current.feelslike_c}`
    }
    catch(e){
     console.log(e)
    }

}
// state.textContent = `${element.day.maxtemp_c}`
async function forecast() {
    try{
        const city = cityinput.value
        let data = await getforecast(city)
        sunrise.textContent = `${data.forecast.forecastday[0].astro.sunrise}`
        sunset.textContent = `${data.forecast.forecastday[0].astro.sunset}`
         let container = document.getElementById('container') 
         container.innerhtml =" "
        data.forecast.forecastday.forEach(element => {
            const card = document.createElement("div")
            card.innerHTML = `<p>Date: ${element.date}</p>
        <img src="${element.day.condition.icon}" alt="">
        <p>Max Temperature: ${element.day.maxtemp_c} </p>
        <p>Lowest Temperature: ${element.day.mintemp_c} </p>
        <p>${element.day.condition.text}</p>`    
            container.appendChild(card) 
        });
        
    }
    catch(e){
      console.log(e.message)
    }    
}
btn.addEventListener("click",()=>{
       showweather()
       forecast(city)
})