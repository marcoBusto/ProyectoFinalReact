import ItemListContainer from "../ItemListContainer/ItemListContainer"
import { useParams } from "react-router-dom";
const Camisetas = () =>{
    const {params} = useParams();
    console.log(params);
    return(
        <div>
            <h1>Camisetas</h1>
            <ItemListContainer categoria={params}/>
        </div>
    )
}
export default Camisetas