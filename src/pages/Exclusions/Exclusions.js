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
  const igridientsArray = ['Chicken', 'Milk', 'Chesse', 'Chicken', 'Milk', 'Chesse'];
  const [excludedIngredients, setExcludedIngredients] = useState('');

  const addIngridient = (value) => {
    excludedIngredients.includes(value)
      ? setExcludedIngredients(excludedIngredients.replace(` ${value}`, ''))
      : setExcludedIngredients(`${excludedIngredients} ${value}`);
  };

  return (
    <div className={style.conteiner}>
      <p>Tick which products you don&apos;t like and you won&apos;t see them again in your diet.</p>
      <div className={style.lineBreakExclusion} />
      {igridientsArray.map((e) => {
        return <Ingridient name={e} />;
      })}
    </div>
  );
};

export default Exclusions;
