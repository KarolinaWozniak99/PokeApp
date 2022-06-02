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
import { Grid } from '@mui/material';

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
        <Grid container spacing={10} justifyContent="center">
          <Grid item xs={12}>
            <Navigation/>
          </Grid>
          <Routes>
            <Route path="/" element={
              <Grid item xs={12}>
                <Grid container xs={12}>
                  <Grid item xs={12}>
                    <Header text={"Choose your pokemon!"}/>
                  </Grid>
                  <Grid item xs={12}>
                    <Form pokeList={pokeList}/>
                  </Grid>
                  
                </Grid>
              </Grid>
            }
            />

            <Route path="/pokes" element={
              <Grid item xs={10} justifyContent="center">
                <Content pokeList={pokeList}/> 
              </Grid>
            }
            />

            <Route path="/about" element={
              <Grid item xs={12}>
                <AboutPoke/>
              </Grid>
            }
            />
          </Routes>
          <Grid item xs={12}>
            <Footer/>
          </Grid>
        </Grid>
      </BrowserRouter>
    </div>
  );
}

export default App;
