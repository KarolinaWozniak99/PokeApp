import React from "react";
import { Card, CardHeader, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

export interface PokemonCard{
    name: string;
    height: number;
    weight: number;
    image: string;
    ability: string;
}


const RandomCard: React.FC = () =>{
    return(
        <h1></h1>
        // <Card sx={{padding:"20px", minWidth: 200}}>
        //         <CardHeader
        //           title={(pokemonData.name).toUpperCase()}
        //         />
        //         <CardContent>
        //           <Typography variant="caption" fontSize={18} display="block">Heigth: {elementData.height}</Typography>
        //           <Typography variant="caption" fontSize={18} display="block">Weigth: {elementData.weight}</Typography>
        //           <Typography variant="caption" fontSize={18} display="block">Ability: {abilities}</Typography>
        //         </CardContent>
        //         <CardMedia
        //           component="img"
        //           image={image}
        //           alt="Pokemon image"
        //           height="350"
        //         />
        //       </Card>
    )
}

export default RandomCard;