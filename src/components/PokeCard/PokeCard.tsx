import internal from "stream";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Card, CardHeader, CardContent, CardMedia } from "@mui/material";

export interface CardProps{
    pokemonList: string[];
}

export interface PokemonCliked{
  name: string;
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


const PokeCard: React.FC<CardProps>=({pokemonList})=>{

  // i tutaj trzeba było dać pusty obiekt w useState no i oczywiście otypować to interfejsem
  const [elementData, setElementData] = useState<PokemonCliked>({weight: 0,height: 0, image:'',abilities:[], name:''});
  const [clicked, setClicked] = useState(false);
  const [elementClicked, setElementClicked] = useState('');
  const [isFetching, setIsFetching] = useState(true);
  const [image, setImage] = useState('');
  const [abilities, setAbilities] = useState([]);

  const clickHandler = (e: any)=>{
    if(pokemonList.indexOf(e.target.textContent)!==-1){
      setElementClicked(e.target.textContent)
      setIsFetching(false);
      setClicked(true);
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

  console.log(elementData);

  
    return (
      <div onClick={clickHandler}>
        <Grid container spacing={2} xs={12}>
          <Grid item xs={2}>
            <Grid container spacing={1}>
              {pokemonList.map((el)=>{
                return(
                  <Grid item xs={12}>
                    <Button variant="contained" fullWidth={true} color="secondary">{el}</Button>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
          {elementData && clicked &&(
           <Grid item xs={10}>
              <Grid container xs={12} justifyContent="center">
              <Card sx={{padding:"20px", minWidth: 200}}>
                <CardHeader
                  title={(elementData.name).toUpperCase()}
                />
                <CardContent>
                  <Typography variant="caption" fontSize={18} display="block">Heigth: {elementData.height}</Typography>
                  <Typography variant="caption" fontSize={18} display="block">Weigth: {elementData.weight}</Typography>
                  <Typography variant="caption" fontSize={18} display="block">Ability: {abilities}</Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  image={image}
                  alt="Pokemon image"
                  height="350"
                />
              </Card>
              </Grid>
           </Grid>
            )}
          </Grid>

      </div>
    );
  }
  
  export default PokeCard;