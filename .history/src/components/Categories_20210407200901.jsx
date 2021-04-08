import React from 'react';

const Categories = ({ items }) => {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((name) => (
          <li key={${name}_$}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
