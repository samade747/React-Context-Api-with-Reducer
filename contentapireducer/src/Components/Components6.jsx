import { useContext } from "react";
import { MyContext } from "../App";

export default function Component6() {
 const { state, dispatch } = useContext(MyContext)
 const { dataForComponent6 } = state

return(
    <> 
    <h1>{dataForComponent6}</h1>
    <button onClick={() => dispatch({
        type: "component6",
        payload: "data changed for component 6",
    })}>Click and change the data</button>    
    </>
)  
}

