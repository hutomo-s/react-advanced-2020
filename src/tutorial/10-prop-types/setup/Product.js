import React from 'react';

import PropTypes from 'prop-types';

import defaultImage from './../../../assets/default-image.jpeg'

const Product = ({image, name, price}) => {
  // use short circuit operator
  // will check image.url if image is defined
  const imageUrl = image && image.url

  return (
    <article className='product'>
      <img src={imageUrl || defaultImage} alt={name || 'Default Name'} />
      <h4>{name || 'Default Name'}</h4>
      <p>$ {price || '3.99'}</p>
    </article>
  );
};

// remember: propTypes syntax is camel case
// this code is to typechecking of props that being passed
// into the component
// this typecheck will be run on development
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}

export default Product;
