import React from 'react';

const Imagen = ({ src, alt, width, height }) => (
  <img src={src} alt={alt} style={{ width, height }} />
);

export default Imagen;
