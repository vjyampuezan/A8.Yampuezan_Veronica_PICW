import React from 'react';

const Boton = ({ etiqueta, onClick }) => (
  <button className="btn btn-success mt-2" type="button" onClick={onClick}>
    {etiqueta}
  </button>
);

export default Boton;
