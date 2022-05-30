import React from "react";

export interface HeaderProps{
    text: string;
}

const Header: React.FC<HeaderProps>=({text})=>{
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default Header;