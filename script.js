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
let icontop=document.getElementById("icon-top")

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
// async function showweather(city) {
//     try{
//     //  let  city = cityinput.value
//         // let data = await weather(city)
//         let data = await getforecast(city)
//         name.textContent =`${data.location.name}`
//         state.textContent = `${data.location.region}`
//         country.textContent =`${data.location.country}`    
//         temp.textContent = `${data.current.temp_c}`
//         condition.textContent = `${data.current.condition.text}`
//         icon.src = `https:${data.current.condition.icon}`
//         icontop.src = `https:${data.current.condition.icon}`
//         wind.textContent =`${data.current.wind_kph}`
//         humidity.textContent =`${data.current.humidity}`
//         feelslike.textContent =`${data.current.feelslike_c}`
//     }
//     catch(e){
//      console.log(e)
//     }

// }
// state.textContent = `${element.day.maxtemp_c}`
async function forecast(city) {
    try{
        // const city = cityinput.value
        let data = await getforecast(city)
         name.textContent =`${data.location.name}`
        state.textContent = `${data.location.region}`
        country.textContent =`${data.location.country}`    
        temp.textContent = `${data.current.temp_c}`
        condition.textContent = `${data.current.condition.text}`
        icon.src = `https:${data.current.condition.icon}`
        icontop.src = `https:${data.current.condition.icon}`
        wind.textContent =`${data.current.wind_kph}`
        humidity.textContent =`${data.current.humidity}`
        feelslike.textContent +=`${data.current.feelslike_c}`
        sunrise.textContent = `${data.forecast.forecastday[0].astro.sunrise}`
        sunset.textContent = `${data.forecast.forecastday[0].astro.sunset}`
         let container = document.getElementById('container') 
         container.innerHTML =" "
        data.forecast.forecastday.forEach(element => {
            const card = document.createElement("div")
             card.classList.add("forecastdiv")
             let date = new Date(element.date)
             let day = date.toLocaleDateString("en-US",{
                weekday:"short"
             })
            card.innerHTML = `<p class="font">Day: ${day}</p>
            <p class="font">Date: ${element.date}</p>
        <img src="https:${element.day.condition.icon}" alt="">
        <p class="font">Max Temperature: ${element.day.maxtemp_c} </p>
        <p class="font">Lowest Temperature: ${element.day.mintemp_c} </p>
        <p class="font">${element.day.condition.text}</p>`    
            container.appendChild(card) 
        });
        
    }
    catch(e){
      console.log(e.message)
    }    
}
btn.addEventListener("click",()=>{
    const city =cityinput.value
    //    showweather(city)
       forecast(city)
})
document.addEventListener("DOMContentLoaded",()=>{
    // showweather("varanasi")
    forecast("varanasi")
}
)