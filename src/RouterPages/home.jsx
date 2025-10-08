import { useNavigate } from "react-router";

function Home(){
const nav = useNavigate();

const handleNav = () =>{
   nav("/Dashboard")
}
    return (
        <div>
     <h1>home</h1>
     <button onClick={handleNav}>move to dashboard</button>
        </div>
    )
}

export default Home;