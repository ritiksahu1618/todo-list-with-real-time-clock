import { NavLink, Outlet, useNavigate } from "react-router";

function Movie(){

  const dash = useNavigate();

const handledash = () =>{
   dash("/")
}
    return (
        <div>
          <ul>
            <li>
              <NavLink to="Reports">Reports</NavLink>
            </li>
            <li>
               <NavLink to="Mock">Mock</NavLink>
            </li>
          </ul>
      <h1>dashboard</h1>
      
       <button onClick={handledash}> move  to home </button>
       <Outlet/>
        </div>
    )
}

export default Movie;