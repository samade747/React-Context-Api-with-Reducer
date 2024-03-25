import { useContext } from "react";
import { MyContext } from "../App";

export default function Component5() {
 const { state, dispatch } = useContext(MyContext)
 const { dataForComponent5 } = state

return(
    <> 
    <h1>{dataForComponent5}</h1>
    <button onClick={() => dispatch({
        type: "component5",
        payload: "data changed for component 5",
    })}>Click and change the data</button>    
    </>
)  
}

