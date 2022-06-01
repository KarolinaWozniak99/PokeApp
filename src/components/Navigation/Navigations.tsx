import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography/Typography';
import { Grid } from "@mui/material";
import {AppBar, Toolbar} from '@mui/material';

const Navigation: React.FC = () =>{
    return(

        <AppBar>
            <Grid container xs={12} justifyContent="center">
                <Link to="/">
                    <Button variant="contained" color="primary" size="medium">
                            Home
                    </Button>
                </Link>

                <Link to="/pokes">
                    <Button variant="contained" color="primary" size="medium">
                            Show pokemons
                    </Button>
                </Link>

                <Link to="/about">
                    <Button variant="contained" color="primary" size="medium">
                            About pokemons
                    </Button>
                </Link>
            </Grid>
        </AppBar>
    )
}

export default Navigation;