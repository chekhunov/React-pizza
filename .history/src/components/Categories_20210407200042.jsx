import React from 'react';

const Categories = ({ items }) => {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        <li>Мясные</li>
        {items.map((num) => 'Номер' + num)}
      </ul>
    </div>
  );
};

export default Categories;
