import React from 'react';

const Formulario = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit} className="p-3 border rounded">
    {children}
  </form>
);

export default Formulario;
