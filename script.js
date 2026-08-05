let city = document.getElementById("city")
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

async function weather(city) {
    try{
        let data = await fetch(`https://api.weatherapi.com/v1/current.json?key=761d800540634701b9780631260408&q=${city}&aqi=yes`)
    let response =  await data.json()
    console.log(response)
    return response
    }
    catch(e){
     console.log(e.message)
    }

    
}

async function showweather() {
    try{
       city = city.value
        let data = await weather(city) 
        name.textContent +=`${data.location.name}`
        state.textContent +=`${data.location.region}`
        country.textContent +=`${data.location.country}`    
        temp.textContent += `${data.current.temp_c}`
        condition.textContent += `${data.current.condition.text}`
        icon.src = `https:${data.current.condition.icon}`
        wind.textContent +=`${data.current.wind_kph}`
        humidity.textContent +=`${data.current.humidity}`
        feelslike.textContent +=`${data.current.feelslike_c}`
    }
    catch(e){
     console.log(e)
    }

}
btn.addEventListener("click",()=>{
       showweather()
})