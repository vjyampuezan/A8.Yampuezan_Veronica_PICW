import React from 'react';

const Titulo = ({ contenido, tipo = 1 }) => {
  const Tag = `h${tipo}`;
  return <Tag>{contenido}</Tag>;
};

export default Titulo;
