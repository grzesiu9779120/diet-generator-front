/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
import { useState } from 'react';
import style from './Meal.module.css';

const Meal = function (props) {
  return (
    <div className={style.conteinerMeal}>
      <p className={style.headerMeal}>{props.name}</p>
      <div className={style.lineBreakMeal} />
      <img className={style.imgMeal} src={props.img} alt="" />
      <div className={style.conteinerIngredients}>
        <ul style={{ fontWeight: 'bold' }}>
          Ingredients
          {props.ingredients.map((e) => {
            return <li style={{ fontWeight: 'normal' }}>{e}</li>;
          })}
        </ul>
      </div>
      <div className={style.conteinerIngredients}>
        <ul style={{ fontWeight: 'bold' }}>
          Amount (g)
          {props.quantity.map((e) => {
            return <li style={{ fontWeight: 'normal' }}>{e}</li>;
          })}
        </ul>
      </div>
      <div className={style.conteinerCalories} style={{ fontWeight: 'bold', marginTop: '5px' }}>
        Calories
        <span
          style={{
            display: 'block',
            textAlign: 'center',
            fontWeight: 'normal',
            marginTop: '25px'
          }}>
          {props.calories}
        </span>
      </div>
      <div className={style.conteinerRefresh}>
        <button type="button" className={style.refreshIcon} />
      </div>
    </div>
  );
};

export default Meal;
