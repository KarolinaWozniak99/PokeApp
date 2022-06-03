import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

const AboutPoke: React.FC = () =>{
    return(
        <div>
            <Typography variant="h2" sx={{fontSize: 40}}>More pokemons?</Typography>
             <p>If you want read something about Pokemons, visit <a href="https://bulbapedia.bulbagarden.net/wiki/Event_Pok%C3%A9mon">Bulbapedia</a> </p>
        </div>
    )
}

export default AboutPoke;