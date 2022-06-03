import React from "react";
import { Typography } from "@mui/material";

export interface HeaderProps{
    text: string;
}

const Header: React.FC<HeaderProps>=({text})=>{
  return (
      <Typography variant="h1" sx={{fontSize: 50}}>{text}</Typography>
  );
};

export default Header;