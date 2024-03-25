import { useContext } from "react";
import { MyContext } from "../App";

export default function Component4() {
 const { state, dispatch } = useContext(MyContext)
 const { dataForComponent4 } = state

return(
    <> 
    <h1>{dataForComponent4}</h1>
    <button onClick={() => dispatch({
        type: "component4",
        payload: "data changed for component 4",
    })}>Click and change the data</button>    
    </>
)  
}

