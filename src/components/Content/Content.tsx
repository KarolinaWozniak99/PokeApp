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

export interface PokemonCliked{
  height: number;
  image: string;
}

const Content: React.FC<PokeProps>=({pokeList})=>{

  // i tutaj trzeba było dać pusty obiekt w useState no i oczywiście otypować to interfejsem
  const [elementData, setElementData] = useState<PokemonCliked>({height: 0, image:''});
  const [clicked, setClicked] = useState(false);
  const [elementClicked, setElementClicked] = useState('');
  const [isFetching, setIsFetching] = useState(true);
  const [image, setImage] = useState('');

  const clickHandler = (e: any)=>{
    console.log(e.target.textContent);
    setElementClicked(e.target.textContent)
    setIsFetching(false);
  }

  useEffect(()=>{
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${elementClicked}`)
      .then((response)=>{
        setElementData(response.data);
        setImage(response.data.sprites.other.dream_world.front_default);
      });
  },[elementClicked]);
  console.log(elementData);

    return (
      <div >
       <ul onClick={clickHandler}>{pokeList.map((el: Pokemon)=>{
           return(
             <li key={el.name}>
               {el.name}
               {/* <PokeCard
                  pokeName={el.name}
                  pokeHeight={elementData.height}
                  pokeImage={image}
                /> */}
               {/* {!isFetching && elementData.height}  */}
               {/* tutaj trzeba było dać renderowanie warunkowe, żeby uniknąć sytuacji że dane się nie pobrały a ja chcę z nich cos wyciągnąć */}
             </li>
           ) 
       })}</ul>
      </div>
    );
  }
  
  export default Content;