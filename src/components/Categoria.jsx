import React from 'react';
import '../assets/styles/components/Categoria.scss';

const Categoria = ({ children }) => (
  <div>
    <h3 className='categories__title'>Mi lista</h3>
    {children}
  </div>
);

export default Categoria;
