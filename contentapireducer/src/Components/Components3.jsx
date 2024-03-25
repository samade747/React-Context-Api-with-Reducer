import { useContext } from "react";
import { MyContext } from "../App";

export default function Component3() {
 const { state, dispatch } = useContext(MyContext)
 const { dataForComponent3 } = state

return(
    <> 
    <h1>{dataForComponent3}</h1>
    <button onClick={() => dispatch({
        type: "component3",
        payload: "data changed for component 3",
    })}>Click and change the data</button>    
    </>
)  
}

