import axios from "axios";
import React, { useEffect, useState } from "react";
import PokeCard from "../PokeCard/PokeCard";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

export interface PokeProps{
    pokeList: Array<Pokemon>;
}

export interface Pokemon{
  name: string;
  url: string;
}

const Content: React.FC<PokeProps>=({pokeList})=>{
  
    const pokemonList:string[] = pokeList.map((el)=>el.name);
   
    return (
      <Grid container xs={12} spacing={10}>
        <Grid item xs={12}>
          <Typography variant="h2" sx={{fontSize: 40}}>Click on the name of Pokemon to see details</Typography>
        </Grid>
        <Grid item xs={12}>
          <PokeCard pokemonList={pokemonList}/>
        </Grid>

      </Grid>
    );
  }
  
  export default Content;