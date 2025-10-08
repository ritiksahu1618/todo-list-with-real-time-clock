import { useEffect, useState } from "react";



function Clock (){
   
     const [time,setTime]=useState(new Date());

     useEffect(()=>{
        
        const timer = setInterval(() => {
           
            setTime( new Date())

        },1000 );P
            
        return () => clearInterval(timer);
        
     },[]);

    return(
        <div>


         
         <h1 className="heading">radha krishna ,hare kishna </h1>
          

        </div>
    );
}

export default Clock;