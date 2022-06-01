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
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Typography variant="h2" sx={{fontSize: 40}}>Click on name of the Pokemon to see details</Typography>
        </Grid>
        <Grid item xs={12}>

          {pokeList.map((el: Pokemon)=>{
              return(
                  <PokeCard
                      key={el.name}
                      pokeName={el.name}
                      pokemonList={pokemonList}
                    />
              )})}
          
        </Grid>

      </Grid>
    );
  }
  
  export default Content;