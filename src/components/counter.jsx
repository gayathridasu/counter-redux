import {useDispatch} from "react-redux"
import { incre,decre } from "../redux/action"
import { useSelector } from "react-redux"

function Counter(){

    var sel = useSelector((s)=>{
        return s
    })
    
    console.log(sel);
    
    
    var dispatch = useDispatch()

    var inc=()=>{
         dispatch(incre())
    }

    var dec=()=>{
        dispatch(decre())
   }

    return(
        <>
        <h1>Counter</h1>
        <h1>{sel.count}</h1>
        <button onClick={inc}>increment</button>
        <button onClick={dec}>decrement</button>
        </>
    )
}
export default Counter;