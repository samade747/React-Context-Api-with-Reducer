import { useContext } from "react";
import { MyContext } from "../App";

export default function Component1() {
 const { state, dispatch } = useContext(MyContext)
 const { dataForComponent1 } = state

return(
    <> 
    <h1>{dataForComponent1}</h1>
    <button onClick={() => dispatch({
        type: "component1",
        payload: "data changed for component 1"
    })}>Click and change the data       </button>    



    </>

)


    

}