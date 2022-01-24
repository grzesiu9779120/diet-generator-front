/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { useState } from 'react';
import style from './Ingridient.module.css';

const Ingridient = function (props) {
  const [isActive, setActive] = useState(false);

  const changeStyle = () => {
    setActive(!isActive);
  };
  return (
    <button
      className={isActive ? style.clickedButton : style.noClickedButton}
      type="button"
      onClick={() => changeStyle()}>
      {props.name}
    </button>
  );
};

export default Ingridient;
