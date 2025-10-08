import { useState } from "react";


function Adduser() {

 const[name,setName]=useState("")
  const[age,setAge]=useState("")
   const[email,setEmail]=useState("")
 
   async function addData (){
     let url = "http://localhost:3000/users"
     let response = await fetch(url,{
        method : 'post',
        body : JSON.stringify({name,email,age})
     });
     response = await response.json();
     
   }
       return(
    
   <div>

       <h1>hii this is add user page </h1>  

    <input type="text" placeholder="enter a name"
     onChange={(event)=>setName(event.target.value)}
    />
    <br></br>
     <br></br>
    <input type="text" placeholder="enter a age"
     onChange={(event)=>setAge(event.target.value)}
    />
     <br></br>
      <br></br>
    <input type="text" placeholder="enter a email"
     onChange={(event)=>setEmail(event.target.value)}
    />
    <br></br>
     <br></br>

    <button onClick={addData}>addUser</button>
    </div>
  )
  
}
export default Adduser;