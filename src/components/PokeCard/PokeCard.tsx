import internal from "stream";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

export interface CardProps{
    pokeName: string;
    pokemonList: string[];
}

export interface PokemonCliked{
  weight: number;
  height: number;
  image: string;
  abilities: string[];
  // ability: Ability;
  // clickAbilityNum: AbilityNumber;
  // clickAbility: Abilities;
}

// export interface Ability{
//   name: string;
//   url: string;
// }

// export interface AbilityNumber{
//   abilityNum: Ability;
// }

// export interface Abilities{
//   abilities: Array<AbilityNumber>
// }


const PokeCard: React.FC<CardProps>=({pokeName, pokemonList})=>{

  // i tutaj trzeba było dać pusty obiekt w useState no i oczywiście otypować to interfejsem
  const [elementData, setElementData] = useState<PokemonCliked>({weight: 0,height: 0, image:'',abilities:[]});
  const [clicked, setClicked] = useState(false);
  const [elementClicked, setElementClicked] = useState('');
  const [isFetching, setIsFetching] = useState(true);
  const [image, setImage] = useState('');
  const [abilities, setAbilities] = useState([]);

  const clickHandler = (e: any)=>{
    if(pokemonList.indexOf(e.target.textContent)!==-1){
      setElementClicked(e.target.textContent)
      setIsFetching(false);
      setClicked(!clicked);
    }
  }

  useEffect(()=>{
    if(elementClicked){
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${elementClicked}`)
        .then((response)=>{
          setElementData(response.data);
          setImage(response.data.sprites.other.dream_world.front_default);
          setAbilities(response.data.abilities[0].ability.name)
        });
    }
  },[elementClicked]);

  console.log(abilities);

  
    return (
      <div onClick={clickHandler}>
        <Grid container xs={10}>
          <Grid item xs={6}>
            <h3>{pokeName}</h3>
          </Grid>
          {elementData && clicked &&(
            <Grid item xs={4}>
              <Stack direction="row" spacing={2}>
                  <Grid item xs={6}>
                    <Typography sx={{fontSize:20}}>{pokeName} </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <img src={image} width="80px"/>  
                  </Grid>
                  <Grid item xs={6}>
                    Ability: {abilities}
                  </Grid>
                  <Grid item xs={6}>
                    Wight: {elementData.weight}
                  </Grid>
                  <Grid item xs={6}>
                    Height: {elementData.height}
                  </Grid>     
                
              </Stack>
            </Grid>
            )}
          </Grid>

      </div>
    );
  }
  
  export default PokeCard;