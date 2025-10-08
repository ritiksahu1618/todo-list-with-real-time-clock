import { useEffect, useState } from "react";
import { useNavigate } from "react-router";






function Userlist() {
 
 
  const [users,setUsers]=useState([]);

  const navigate = useNavigate()

  useEffect (()=>{

   getData();

  },[]) 

   let url = "http://localhost:3000/users";
  async function getData (){

  
    let response = await fetch(url);
    response =  await response.json()
      
    console.log(response);
    setUsers(response)
    
  }
    
    async function deleteData(id) {
      let response = await fetch(url+"/"+id,{
        method:"delete"
      })
      response = await response.json()
      if(response){
        // alert("user deleted ")
        getData();
      }
    }
    
    async function editData(id) {
      navigate("/Editdata/"+id)
    }
 
       return(
    
   <div>
   <h2> get Api method </h2>
   

   {
    users && users.map((user,index)=>(
      <ul key={index} style={{display:"flex",justifyContent:"space-around"}}>
        <li>{user.name}</li>
        <li>{user.age}</li>
        <li>{user.email}</li>
         <li><button onClick={()=>deleteData(user.id)}>delete</button></li>
            <li><button onClick={()=>editData(user.id)}>edit</button></li>
      </ul>
    ))
   }
    </div>
  )
  
}
export default Userlist;




































import {  createBrowserRouter, NavLink, Outlet, RouterProvider } from "react-router-dom";
import Userlist from "./userlist";
import Adduser from "./adduser";
import Editdata from "./editdata";


export function Layout (){
  return(
    <div>
       <ul>
        <li>
          <NavLink to="/">Userlist</NavLink>
        </li>
        <li>
          <NavLink to="/adduser">Adduser</NavLink>
        </li>
      </ul>
      <Outlet/>
    </div>
  )
}



// function App() {
 
//      const router = createBrowserRouter ([
//       {
//         path:"/",
//         element : <Layout/>,
//         children:[
//           {
//         path : "/",
//         element : <Userlist/>
//       },
//       {
//          path:"Adduser",
//          element:<Adduser/>
//       },{
//         path:"/Editdata/:id",
//         element:<Editdata/>
//       }
//         ]
//       },
      

//      ])
 
 
//        return(
    
//    <div>
   
//     <RouterProvider  router={router} />
  

//     </div>
//   )
  
// }
// export default App;