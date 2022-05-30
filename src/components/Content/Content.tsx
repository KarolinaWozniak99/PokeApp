import React from "react";

export interface PokeProps{
    pokeList: Array<Pokemon>;
}

export interface Pokemon{
  name: string;
  url: string;
}


const Content: React.FC<PokeProps>=({pokeList})=>{
    return (
      <div>
        
       <ul>{pokeList.map((el: Pokemon)=>{
           return(
             <li key={el.name}>
               {el.name}
             </li>
           ) 
       })}</ul>
      </div>
    );
  }
  
  export default Content;