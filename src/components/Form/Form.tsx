import React from "react";
import { useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


export interface Props{
    pokeList: Array<Pokemon>;
}

export interface Pokemon{
  name: string;
  url: string;
}

export interface PokemonCliked{
    image: string;
}

const Form: React.FC<Props>=({pokeList})=>{

    const[pokemonName, setPokemonName] = useState('')
    const[pokemon, setPokemon] = useState<PokemonCliked>({image:''});
    const pokemonList:string[] = pokeList.map((el)=>el.name);
    const[image, setImage] = useState('');
    const[clicked, setClicked] = useState(false)


    function getRandomPoke(pokemonList: string[]): void{
        const randmoNumber: number = Math.floor(Math.random() * (19 - 0)) + 0;
        setPokemonName(pokemonList[randmoNumber]);
        setClicked(true);
    }

    useEffect(()=>{
        if(clicked){
            axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((response)=>{
                setImage(response.data.sprites.other.dream_world.front_default);
            });
        }
    })

    return(
            <Grid container spacing={4} xs={12}>
                <Grid item xs={12}>
                    <Typography variant="h2" sx={{fontSize: 30}}>Click button to get random pokemon</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={()=>getRandomPoke(pokemonList)} variant="outlined">Click</Button>
                </Grid>
                <Grid item xs={12}>
                    <h1>{pokemonName.toUpperCase()}</h1>
                </Grid>
                <Grid item xs={12}>
                    <img src={image} width="150px"/>
                </Grid>
            </Grid>
    )
}

export default Form;