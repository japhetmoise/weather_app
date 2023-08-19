function getCity(){
let city=document.getElementById('city').value
return city
}
function getUrl(){
    if(getCity()==0)
    return 'https://api.weatherapi.com/v1/current.json?key=2f47514e4f4040fda3985655231808&q=all'
    else  
    return `https://api.weatherapi.com/v1/current.json?key=2f47514e4f4040fda3985655231808&q=${getCity()}`
}
async function getCityData(){
    const response=await fetch(getUrl())
    const data=await response.json();    
    return data
}
 
async function displayCityData(){
    const city_data= await getCityData()
    const city_data_array=Object.keys(city_data.location)
    let paragraph=""
   //return data about city description  
   for(let data of city_data_array){    
   const nm=city_data.location.name;   
   const country=city_data.location.country;  
   const localtime=city_data.location.localtime;   
   const lat=city_data.location.lat;   
   const lon=city_data.location.lon;   
   const region=city_data.location.region;  
   const tz_id=city_data.location.tz_id
  paragraph=`
   <b> city name:</b> ${nm}<br>
   <b> country name:</b> ${country}<br>
   <b> local time:</b> ${localtime}<br>
   <b> lattitude name:</b> ${lat}<br>
   <b> Longitude:</b> ${lon}<br>
   <b> region</b> ${region}<br>    
   <b> Time Zone</b> ${tz_id}<br>   ` 
    document.getElementById('left').innerHTML=paragraph     
   }
   let divs=""
   const city_data_current=Object.keys(city_data.current)
   for(let data of city_data_current){
   const last=city_data.current.last_updated    
    const tempc=city_data.current.temp_c
    const tempf=city_data.current.temp_f    
    const day_status=city_data.current.is_day    
    function day(){
        if(day_status==0)
         return "Night"        
        else 
             return "Day"
      }
    const w_mph=city_data.current.wind_mph    
    const w_kph=city_data.current.wind_kph  
    const w_deg=city_data.current.wind_degree
    const wind_dir=city_data.current.wind_dir
    const pressure_mb=city_data.current.pressure_mb
    const precip_in=city_data.current.pressure_in
    const precip_mm=city_data.current.precip_mm
    const humidity=city_data.current.humidity
    const cloud=city_data.current.cloud
    const city_contition=Object.keys(city_data.current.condition)
    for(let condition_data of city_contition){
        var icon=city_data.current.condition.icon
        var text=city_data.current.condition.text

    }
    divs=`    
    <div><div> Last update</div>   ${last}  </div>
    <div><div> Temperature in Celcius</div>   ${tempc}  </div>
    <div><div>  Temperature in fahrenheit</div>   ${tempf}  </div>
    <div><div> Day status</div>   ${day()}  </div>
    <div><div> Wind speed in mile</div>   ${w_mph}  </div>
    <div><div>  Wind speed in kilometer</div>   ${w_kph}  </div>
    <div><div> Wind Degree</div>   ${w_deg}  </div>
    <div><div> Wind Direction</div>   ${wind_dir}  </div>
    <div><div> Wind pressure</div>   ${pressure_mb}  </div>
    <div><div> Maximum Precipitation</div>   ${precip_in}  </div>
    <div><div> Minimum Precipitation</div>   ${precip_mm}  </div>
    <div><div> Humidity</div>   ${humidity}  </div>
    <div><div> Cloud</div>   ${cloud}  </div>
        
    `   }
    document.getElementById('current_data').innerHTML=divs 
    document.getElementById('icon').src=icon
    document.getElementById('text').innerHTML=text

   console.log(divs)
}