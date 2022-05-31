import axios from "axios";
import React, { useEffect, useState } from "react";
import PokeCard from "../PokeCard/PokeCard";


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
      <div >
       <ul>{pokeList.map((el: Pokemon)=>{
           return(
             <li key={el.name}>
               <PokeCard
                  pokeName={el.name}
                  pokemonList={pokemonList}
                />

               {/* {!isFetching && elementData.height}  */}
               {/* tutaj trzeba było dać renderowanie warunkowe, żeby uniknąć sytuacji że dane się nie pobrały a ja chcę z nich cos wyciągnąć */}
             </li>
           ) 
       })}</ul>
      </div>
    );
  }
  
  export default Content;