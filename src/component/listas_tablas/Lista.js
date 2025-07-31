import React from 'react';

const Lista = ({ items = [] }) => (
  <ul className="list-group">
    {items.map((item, idx) => (
      <li key={idx} className="list-group-item">{item}</li>
    ))}
  </ul>
);

export default Lista;
