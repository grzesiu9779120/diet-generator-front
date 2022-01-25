/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
import React, { useState } from 'react';
import style from './Exclusions.module.css';
import Ingridient from './Ingridient';

const Exclusions = function () {
  const ingredientsArray = [
    'Chicken',
    'Milk',
    'Chesse',
    'Chicken',
    'Milk',
    'Chesse',
    'Milk',
    'Chesse',
    'Chicken',
    'Milk',
    'Chesse',
    'Milk',
    'Chesse',
    'Chicken',
    'Milk',
    'Chesse',
    'Milk',
    'Chesse',
    'Chicken',
    'Milk',
    'Milk',
    'Chesse',
    'Chicken',
    'Milk',
    'Chesse',
    'Milk',
    'Chesse',
    'Chicken',
    'Milk',
    'Milk',
    'Chesse',
    'Chicken',
    'Milk',
    'Chesse',
    'Milk',
    'Chesse',
    'Chicken',
    'Milk'
  ];
  const [excludedIngredients, setExcludedIngredients] = useState('');

  const addIngridient = (value) => {
    excludedIngredients.includes(value)
      ? setExcludedIngredients(excludedIngredients.replace(` ${value}`, ''))
      : setExcludedIngredients(`${excludedIngredients} ${value}`);
  };

  return (
    <div className={style.conteinerExclusion}>
      <p className={style.headerExclusion}>
        Tick which products you don&apos;t like and you won&apos;t see them again in your diet.
      </p>
      <div className={style.lineBreakExclusion} />
      <div className={style.ingridientConteiner}>
        {ingredientsArray.map((e) => {
          return <Ingridient name={e} />;
        })}
      </div>
    </div>
  );
};

export default Exclusions;
