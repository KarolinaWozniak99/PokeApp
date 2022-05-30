import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import axios from 'axios';
import Form from './components/Form/Form';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from './components/Navigation/Navigations';
import AboutPoke from './components/AboutPoke/AboutPoke';
import Footer from './components/Footer/Footer';


const App: React.FC=()=>{

  const [pokeList, setPokeList] = useState([]);

    useEffect(()=>{
      axios
        .get('https://pokeapi.co/api/v2/pokemon')
        .then((response)=>{
          console.log(response.data.results);
          setPokeList(response.data.results);
        });
    },[])


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <Navigation/>
              <Header text={"Choose your pokemon!"}/>
              <Form/>
              <Footer/>
            </div>
          }
          />

          <Route path="/pokes" element={
            <div>
              <Navigation/>
              <Content pokeList={pokeList}/> 
            </div>
          }
          />

          <Route path="/about" element={
            <div>
              <Navigation/>
              <AboutPoke/>

            </div>
          }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
