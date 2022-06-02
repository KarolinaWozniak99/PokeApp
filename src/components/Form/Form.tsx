import React from "react";
import { useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";

const Form: React.FC=()=>{

    const {register, handleSubmit}= useForm();

    const submitHandler=()=>{
        
    }

    return(
        <form>
            {/* <input type="text"/> */}
            <Grid container spacing={4} xs={12}>
                <Grid item xs={12}>
                    <Typography variant="h2" sx={{fontSize: 30}}>Click button to get random pokemon</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="outlined">Click</Button>
                </Grid>
            </Grid>
        </form> 
    )
}

export default Form;