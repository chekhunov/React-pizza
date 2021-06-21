import React from 'react';
import classNames from 'classnames';

const PizzaBlock = ({ name, imageUrl, price, types }) => {
  const availableTypes = ['тонкое', 'традиционное'];
  const availableSizes = [26, 30, 40];
  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(sizes[0]);

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {/* проходим по массиву и в каждый ли прокидываем тайп */}

          {availableTypes.map((type, index) => (
            <li
              key={type}
              onClick={() => onSelectType(index)}
              className={classNames({
                active: activeType === index, //если индекс соотвествует тогда доб класс актив и выбор пицы будет доступен
                disabled: !types.includes(index), //если тайпс не включает индекс тогда адд класс дизаблед
              })}
              // className={activeType === index ? 'active' : ''}
            >
              {type}
            </li>
          ))}
          {/* <li className="active">тонкое</li>
          <li onClick={() => alert(123)} className="disabled">
            традиционное
          </li> */}
        </ul>
        <ul>
          {/* проходим по массиву и в каждый ли прокидываем тайп */}

          {availableSizes.map((size, index) => (
            <li
              key={size}
              onClick={() => onSelectSize(index)}
              className={classNames({
                active: activeSize === index, //если индекс соотвествует тогда доб класс актив и выбор пицы будет доступен
                disabled: !types.includes(index), //если тайпс не включает индекс тогда адд класс дизаблед
              })}
              // className={activeType === index ? 'active' : ''}
            >
              {size}
            </li>
          ))}
          {/* <li className="active">тонкое</li>
          <li onClick={() => alert(123)} className="disabled">
            традиционное
          </li> */}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
