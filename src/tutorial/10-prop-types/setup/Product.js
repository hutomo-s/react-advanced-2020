import React from 'react';

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

export default Product;
