import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = ({handleClick}) => {
  return (
    <nav>
        <Link to='/'>
          <p onClick={() => handleClick()}>Home</p>
        </Link>
      <div className='categoryNavList'>
        <Link to='/crueltyFree'>
          <p onClick={() => handleClick()}>CrueltyFree</p>
        </Link>
        <Link to='/fairTrade'>
          <p onClick={() => handleClick()}>Fair Trade</p>
        </Link>
        <Link to='/organic'>
          <p onClick={() => handleClick()}>Organic</p>
        </Link>
        <Link to='/vegan'>
          <p onClick={() => handleClick()}>Vegan</p>
        </Link>
        <Link to='/zeroWaste'>
          <p onClick={() => handleClick()}>Zero Waste</p>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

Nav.propTypes = {
handleClick: PropTypes.func
};