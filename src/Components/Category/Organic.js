import React from 'react';
import { Redirect } from 'react-router-dom';
import Type from '../Type/Type';
import './Category.css';
import PropTypes from 'prop-types';

const Organic = ({organic}) => {
    const filterMakeupTypes = organic.map((item) => item['product_type']);
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

    const productsOnDisplay = productTypes.map((item) => {
      const url = assignUrl(item)
      return <Type
      title={item}
      key={item}
      img={url}
      category={'organic'}
      />;
    });

    if (productsOnDisplay.length) {
      return (
        <section className='category'>
          <h2 className='categoryTitle'>Organic</h2>
          <div className='descriptionContainer'>
            <h3 className='definitionHeading'>What is Organic?</h3>
              <p className='categoryDefinition'>
              Products that are are made with organic ingredients.
              </p>
            <h3 className='descriptionHeading'>Why choose Organic?</h3>
              <p className='categoryDescription'>
              Organic makeup tends to be made with less or no toxic chemicals and are generally better for the environment.
              </p>
          </div>
          <div className='productContainer'>
            {productsOnDisplay}
          </div>
          <div className='sourcesContainer'>
            <h3 className='sourcesTitle'>Sources</h3>
              <div className='linkContainer'>
                <a href='https://bewellcompany.com/blogs/healthy-skincare/7-reasons-why-organic-skin-care-products-are-better-for-you' target='_blank' rel='noreferrer'>be well company</a>
                <a href='https://www.onegreenplanet.org/lifestyle/benefits-of-organic-and-natural-skincare/' target='_blank' rel='noreferrer'>One Green Planet</a>
                <a href='https://www.nongmoproject.org/gmo-facts/' target='_blank' rel='noreferrer'>Non-GMO</a>
                <a href='https://www.usda.gov/topics/organic' target='_blank' rel='noreferrer'>USDA Organic</a>
              </div>
          </div>
        </section>
      )
    } else if (!productsOnDisplay.length) {
      return <Redirect to='/error' />
    }
};

export default Organic;

Organic.propTypes = {
  organic: PropTypes.array,
};