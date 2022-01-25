/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
import { useState } from 'react';
import style from './GenerateMeals.module.css';
import meals from '../../assets/data/meals.json';
import Meal from './Meal';

const GenerateMeals = function () {
  const [generateDiet, setGenerateDiet] = useState(false);

  const [numberMeals, setNumberMeals] = useState([]);

  const showDiet = () => {
    setGenerateDiet(true);
    console.log(meals.meals[0]);
  };

  return (
    <div className={style.conteinerGenerate}>
      <p className={style.headerGenerate}>Generate your diet</p>
      <div className={style.lineBreakGenerate} />
      <button
        className={style.button}
        type="button"
        onClick={() => {
          showDiet();
        }}>
        Generate
      </button>
      <div className={style.lineBreakGenerate} />
      <div className={style.conteinerMeals}>
        <Meal
          name="Chicen with rise"
          img="https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26231113/5783153.jpg"
          calories="450"
          ingredients={['avocado', 'smalec', 'wątroba', 'chujemuje']}
          quantity={['50', '10', '25', '1000']}
        />
      </div>
    </div>
  );
};

export default GenerateMeals;
