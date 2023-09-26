import { useContext } from "react";
import { context } from "../context/login-context";

export default  ()=>{
    return useContext(context)
}