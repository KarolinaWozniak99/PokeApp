import React from "react";
import { useForm } from "react-hook-form";

const Form: React.FC=()=>{

    const {register, handleSubmit}= useForm();

    const submitHandler=()=>{
        
    }

    return(
        <form>
            <input type="text"/>
            <button type="submit">Click</button>
        </form> 
    )
}

export default Form;