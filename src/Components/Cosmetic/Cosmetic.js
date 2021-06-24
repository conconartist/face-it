import React from 'react';
import './Cosmetic.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Cosmetic = ({name, brand, img, productType, id, category}) => {

  return (
    <Link to={`/${category}/${productType}/${id}`}>
      <article className='cosmeticCard'>
        <img src={img} alt={name} className='cosmeticCardImage' id={id}></img>
        <p className='cosmeticDetail'>
          <strong>{brand}</strong>
        </p>
        <p className='cosmeticDetail'>{name}</p>
      </article>
    </Link>
  );
}

export default Cosmetic;

Cosmetic.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  img: PropTypes.string,
  productType: PropTypes.string,
  id: PropTypes.number,
  category: PropTypes.string
};