import React from "react";
import internal from "stream";

export interface CardProps{
    pokeName: string;
    pokeImage: string;
    pokeHeight: number;
}


const PokeCard: React.FC<CardProps>=({pokeName,pokeHeight, pokeImage})=>{
    return (
      <div>
        <div>

          {pokeName}
        </div>
        <div>

        {pokeHeight}
        </div>
      </div>
    );
  }
  
  export default PokeCard;