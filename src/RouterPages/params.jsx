import { useParams } from "react-router";

function Params (){

    const {id} = useParams();
    return (
        <div>
      <h1>{id}</h1>
        </div>
    )
}

export default Params;