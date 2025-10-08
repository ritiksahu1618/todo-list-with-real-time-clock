 import { createBrowserRouter, RouterProvider } from "react-router-dom";

 import Home from "./home";
 import Dashboard from "./Dashboard"   
 import About from "./about";
 import Contact from "./contact";
 import Navbar from "./navbar";
import Params from "./params";
// import "./Rorouter.css"
import Report from "./reports";
import Mock from "./mock";




    const router = createBrowserRouter([
      {
        path:"/",
        element : <Navbar/>,
        children : [
          {
        path:"/",
        element : <Home/>
          

      },  

      {
        path:"About",
        element : <About/>,
      },

      {
          path:"Dashboard",
          element:<Dashboard/>,
          children:[
            {path:"Reports",element:<Report/>},{path:"Mock",element:<Mock/>},
          ]
      },

       {
        path:"Contact",
        element : <Contact/>
      },   
      {
        path:":id",
        element:<Params/>
      },
        ]
      
      },{
        path:"*",
        element:<Error/>
      }
    ])
       
         
   function Routerapp(){
        
    
    return <RouterProvider router ={router}/>;
}

export default Routerapp;