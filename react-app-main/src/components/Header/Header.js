import React from 'react';
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='app-header'>
      <Link to="/"><h1 className='app-logo'>MUSTc</h1></Link>
    </div>
  );
};

export default Header;
