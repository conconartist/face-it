import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeButton from '../HomeButton/HomeButton';

const Nav = ({handleClick}) => {
  return (
    <nav>
        <Link to='/'>
          <article className='navLogo' onClick={() => handleClick()}><HomeButton /></article>
        </Link>
      <div className='categoryNavList'>
        <Link to='/crueltyFree'>
          <p className='navText' onClick={() => handleClick()}>CrueltyFree</p>
        </Link>
        <Link to='/fairTrade'>
          <p className='navText' onClick={() => handleClick()}>Fair Trade</p>
        </Link>
        <Link to='/organic'>
          <p className='navText' onClick={() => handleClick()}>Organic</p>
        </Link>
        <Link to='/vegan'>
          <p className='navText' onClick={() => handleClick()}>Vegan</p>
        </Link>
        <Link to='/zeroWaste'>
          <p className='navText' onClick={() => handleClick()}>Zero Waste</p>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

Nav.propTypes = {
handleClick: PropTypes.func
};