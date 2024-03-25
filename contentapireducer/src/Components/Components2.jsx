import { useContext } from "react";
import { MyContext } from "../App";

export default function Component2() {
 const { state, dispatch } = useContext(MyContext)
 const { dataForComponent2 } = state

return(
    <> 
    <h1>{dataForComponent2}</h1>
    <button onClick={() => dispatch({
        type: "component2",
        payload: "data changed for component 2",
    })}>Click and change the data</button>    
    </>
)  
}

