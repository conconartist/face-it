import React, {useEffect, useState} from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Details.css';
import Error from '../Error/Error';
import { Redirect } from "react-router-dom";
import LoadingMessage from '../Loading/Loading';

const Details = ({ makeup, id }) => {
  const [singleProduct, setSingleProduct] = useState(null);
  const [incorrectId, setIncorrectId] = useState(false);

  const findProduct = () => {
    if( makeup.length ) {
      const singleMakeup = makeup.find((item) => item.id === parseInt(id))
      if (singleMakeup) {
        setSingleProduct(singleMakeup)
      } else {
        setIncorrectId(true)
      }
      return singleMakeup;
    }
  }

  useEffect(() => {
    findProduct();
  })

return (
  <div className="productDetailsContainer">
    {incorrectId && <Redirect to="/error" /> && <Error />}
    {!singleProduct && !incorrectId && <LoadingMessage />}
    {singleProduct &&  <SingleProduct
      id={singleProduct.id}
      key={singleProduct.id}
      brand={singleProduct.brand}
      name={singleProduct.name}
      img={singleProduct["image_link"]}
      description={singleProduct.description}
      productType={singleProduct["product_type"]}
      website={singleProduct["product_link"]}
      />
    }
  </div>
)
}
export default Details;
