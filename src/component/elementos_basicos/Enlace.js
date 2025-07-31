import React from 'react';

const Enlace = ({ destino, texto }) => (
  <a href={destino} target="_blank" rel="noopener noreferrer">{texto}</a>
);

export default Enlace;
