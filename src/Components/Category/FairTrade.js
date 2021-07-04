import React from 'react';
import { Redirect } from 'react-router-dom';
import Type from '../Type/Type';
import './Category.css';
import PropTypes from 'prop-types';

const FairTrade = ({fairTrade}) => {
    const filterMakeupTypes = fairTrade.map((item) => item['product_type']);
    const productTypes = filterMakeupTypes.filter(
      (item, index) => filterMakeupTypes.indexOf(item) === index
    );

    const assignUrl = (item) => {
      if(item === 'mascara') {
        return 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      } else if(item === 'blush') {
        return ' https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-1.2.1&ixid=MXwxM[…]by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1295&q=80';
      } else if(item === 'bronzer') {
        return 'https://images.unsplash.com/photo-1611781409837-a7c20eb1a298?ixid=MXwxMjA3fDB8MHxwaG90[…]ufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
      } else if(item === 'eyebrow') {
        return 'https://images.unsplash.com/photo-1597225244660-1cd128c64284?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80https://images.unsplash.com/photo-1597225335960-8a9970732de1?ixid=MXwxMjA3fDB8MHxzZWFy[…]58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60';
      } else if(item === 'eyeliner') {
        return 'https://images.unsplash.com/photo-1557509195-5836dbfbe832?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80';
      } else if(item === 'eyeshadow') {
        return 'https://images.unsplash.com/photo-1503236823255-94609f598e71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
      } else if(item === 'foundation') {
        return 'https://images.unsplash.com/photo-1598121496623-eda7f691e4f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80';
      } else if(item === 'lip_liner') {
        return 'https://images.unsplash.com/photo-1600869515878-e1e14dedc152?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
      } else if(item === 'lipstick') {
        return 'https://images.unsplash.com/photo-1584013544071-caee786e105b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80';
      } else if(item === 'primer_concealer') {
        return 'https://images.unsplash.com/photo-1620531940052-d0d9aff03c32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80';
      }
    };

    const productTypesOnDisplay = productTypes.map((item) => {
      const url = assignUrl(item)
      return <Type
      title={item}
      key={item}
      img={url}
      category={'fairTrade'}
      />;
    });

    if (productTypesOnDisplay.length) {
      return (
        <section className='category'>
          <h2 className='categoryTitle'>Fair Trade</h2>
          <div className='descriptionContainer'>
            <h3 className='definitionHeading'>What is Fair Trade?</h3>
              <p className='categoryDefinition'>
              Products that are Fair Trade certified, equating to better working conditions for the people who made these products.
              </p>
            <h3 className='descriptionHeading'>Why choose Fair Trade?</h3>
              <p className='categoryDescription'>
              Fair Trade is "people first", considering the ethical and moral implications of who is making the products we consume. 
              </p>
          </div>
          <div className='productContainer'>
            {productTypesOnDisplay}
          </div>
          <div className='sourcesContainer'>
            <h3 className='sourcesTitle'>Sources</h3>
              <div className='linkContainer'>
                <a href='https://www.refinery29.com/en-us/best-fair-trade-beauty-products' target='_blank' rel='noreferrer'>Refinery29</a>
                <a href='https://www.redbookmag.com/beauty/makeup-skincare/advice/a4115/fair-trade-beauty-products/' target='_blank' rel='noreferrer'>redbook</a>
              </div>
          </div>
        </section>
      )
    } else if (!productTypesOnDisplay.length) {
      return <Redirect to='/error' />
    }
};

export default FairTrade;

FairTrade.propTypes = {
  fairTrade: PropTypes.array,
};