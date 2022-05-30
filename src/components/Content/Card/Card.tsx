import React from "react";

export interface CardProps{
    pokeCard: any;
}


const Content: React.FC<CardProps>=({pokeCard})=>{
    return (
      <div>
        {pokeCard}
      </div>
    );
  }
  
  export default Content;