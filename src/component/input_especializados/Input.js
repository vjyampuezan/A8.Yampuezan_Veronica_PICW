import React from 'react';

const Input = ({ tipo, nombre, placeholder, valor, alCambiar, requerido = false }) => (
  <input
    type={tipo}
    name={nombre}
    className="form-control mb-2"
    placeholder={placeholder}
    value={valor}
    onChange={alCambiar}
    required={requerido}
  />
);

export default Input;
