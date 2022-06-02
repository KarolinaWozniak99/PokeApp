import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

const Footer: React.FC = () =>{
    return(
     <footer style={{position: "fixed", bottom:0, left:20}}>
        <Typography variant="caption" align="center">Made by Karolina Woźniak</Typography>
    </footer>
    )
}

export default Footer;