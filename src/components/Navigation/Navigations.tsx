import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <h2>Home</h2>
                    </Link>
                </li>

                <li>
                    <Link to="/pokes">
                        <h2>Show pokemons</h2>
                    </Link>
                </li>

                <li>
                    <Link to="/about">
                        <h2>About pokemons</h2>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;