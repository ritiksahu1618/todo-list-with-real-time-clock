import {  NavLink, Outlet } from "react-router-dom";


function Navbar(){
    return (
        <div>
       
        <ul>
            <li>
        <NavLink to="/" className={({isactive})=>{
            isactive ? "active": "";
        }} 
        > Home </NavLink>
            </li>
        
            <li>

        <NavLink to="/About"> About</NavLink> 
            </li>

            <li>

      <NavLink to="/Dashboard">Dashboard</NavLink>
            </li>
        <li>
            <NavLink to="/Contact"> Contact </NavLink>
        </li>
        </ul>
                <Outlet/>

        </div>
    )
}

export default Navbar;