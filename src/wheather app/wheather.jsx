// import { useState } from "react"

import { useState } from "react";

function Wheather (){
    const[city,setCity] = useState("");
    const [wheather,setWheather]=useState(null);

  async function handlewheather  (){
    
      let apikey = "d426bcf164ae4426864da675ea9063b5";
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

        const response = await fetch(url)
        const data = await response.json()
        setWheather(data);


  }

 return (
  
    <div>
    <h1>Wheather App</h1>


     <input type="text"
     placeholder="enter a city"
      value={city}
     onChange={(event)=>setCity(event.target.value)}
     
     />
     <button onClick={handlewheather}>search</button>
          {
            wheather&&wheather.main && (
   
         <div>
            <h2>wheather  :   {wheather.name}c</h2>
            <p>temperature:  {wheather.main.temp}</p>
            <p>decription :  {wheather.weather[0].description}</p>
            <p>humidity   :  {wheather.main.humidity}%</p>
     </div>
            ) 
            
            }
           
    </div>
 )
}

export default Wheather;