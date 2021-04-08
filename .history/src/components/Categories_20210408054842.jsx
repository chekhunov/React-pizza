import React from 'react';

const Categories = ({ items }) => {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((name, index) => (
          <li onClick={() => alert(1)} key={`${name}_${index}`}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
