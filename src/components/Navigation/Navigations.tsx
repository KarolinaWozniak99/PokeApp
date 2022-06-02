import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography/Typography';
import { Grid } from "@mui/material";
import {AppBar, Toolbar} from '@mui/material';
import { Stack } from "@mui/material";

const Navigation: React.FC = () =>{
    return(
        <Stack justifyContent="center" direction="row" spacing={4} sx={{borderBottom: "2px solid black", padding:"10px"}}>
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
        </Stack>
    )
}

export default Navigation;