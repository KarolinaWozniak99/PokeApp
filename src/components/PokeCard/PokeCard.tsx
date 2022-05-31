import internal from "stream";
import axios from "axios";
import React, { useEffect, useState } from "react";

export interface CardProps{
    pokeName: string;
    pokemonList: string[];
}

export interface PokemonCliked{
  height: number;
  image: string;
}

const PokeCard: React.FC<CardProps>=({pokeName, pokemonList})=>{

  // i tutaj trzeba było dać pusty obiekt w useState no i oczywiście otypować to interfejsem
  const [elementData, setElementData] = useState<PokemonCliked>({height: 0, image:''});
  const [clicked, setClicked] = useState(false);
  const [elementClicked, setElementClicked] = useState('');
  const [isFetching, setIsFetching] = useState(true);
  const [image, setImage] = useState('');
  const [height, setHeight] = useState(0);

  const clickHandler = (e: any)=>{
    if(pokemonList.indexOf(e.target.textContent)!==-1){
      console.log(e.target.textContent);
      setElementClicked(e.target.textContent)
      setIsFetching(false);
      setClicked(!clicked);
    }
  }

  useEffect(()=>{
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${elementClicked}`)
      .then((response)=>{
        setElementData(response.data);
        setImage(response.data.sprites.other.dream_world.front_default);
        setHeight(response.data.height)
      });
  },[elementClicked]);
  console.log(elementData);

  
    return (
      <div onClick={clickHandler}>
        <div>
          {pokeName} 
        </div>
        {elementData && clicked &&(
          <div>
            <div>
              {height}
            </div>
              <div>
              <img src={image} width="80px"/>  
            </div>
          </div>
          
          )}

      </div>
    );
  }
  
  export default PokeCard;