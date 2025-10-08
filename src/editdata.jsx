import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Editdata(){
    const[name,setName]=useState("")
      const[age,setAge]=useState("")
       const[email,setEmail]=useState("")
    
   const {id} = useParams();
    let navigate = useNavigate();
 
  useEffect(()=>{
    getdata()
  },[])

   const url = "http://localhost:3000/users/"+id;
    async function getdata() {
      
       let response =  await fetch(url);
       response = await response.json()
       
       setName(response.name)
        setAge(response.age)
         setEmail(response.email)
       
    }
  async function updatedata() {
      let response = fetch(url,{
        method:"put",
        body:JSON.stringify({name,age,email})
      })
      if(response){
        alert("updated")
      }
      navigate("/");
       
  }
  
    return (
        <div style={{textAlign:"center"}}>
      <h1>edit and updatedata</h1>
    <input type="text" placeholder="enter a name"
     value={name}
     onChange={(event)=>setName(event.target.value)}
    />
    <br></br>
     <br></br>
    <input type="text" placeholder="enter a age"
      value={age}
       onChange={(event)=>setAge(event.target.value)}
    />
     <br></br>
      <br></br>
    <input type="text" placeholder="enter a email"
      value={email}
       onChange={(event)=>setEmail(event.target.value)}
    />
    <br></br>
     <br></br>

    <button onClick={()=>updatedata()}>updatedata</button>
    </div>
        
    )
}

export default Editdata;