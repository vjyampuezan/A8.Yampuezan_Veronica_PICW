import React from 'react';

const Tabla = ({ encabezado = [], registros = [] }) => (
  <table className="table table-striped">
    <thead>
      <tr>{encabezado.map((col, i) => <th key={i}>{col}</th>)}</tr>
    </thead>
    <tbody>
      {registros.map((fila, i) => (
        <tr key={i}>{fila.map((dato, j) => <td key={j}>{dato}</td>)}</tr>
      ))}
    </tbody>
  </table>
);

export default Tabla;
