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
import mealsObject from '../../helpers/meals';
import Meal from './Meal';

const GenerateMeals = function () {
  const [generateDiet, setGenerateDiet] = useState(false);

  const showDiet = () => {
    setGenerateDiet(true);
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
      {showDiet ? (
        <div className={style.conteinerMeals}>
          <Meal
            name={mealsObject.meals[0].name}
            img={mealsObject.meals[0].img}
            calories={mealsObject.meals[0].calories}
            ingredients={['rice', 'chicken', 'butter']}
            quantity={['50', '10', '25']}
          />
          <Meal
            name={mealsObject.meals[1].name}
            img={mealsObject.meals[1].img}
            calories="350"
            ingredients={['fish', 'carrot', 'courgette']}
            quantity={['300', '65', '50']}
          />
          <Meal
            name={mealsObject.meals[2].name}
            img={mealsObject.meals[2].img}
            calories="621"
            ingredients={['chicken', 'bread', 'cheese', 'tomato', 'bbq sause']}
            quantity={['125', '105', '70', '85', '10']}
          />
          <Meal
            name={mealsObject.meals[3].name}
            img={mealsObject.meals[3].img}
            calories="373"
            ingredients={['porridge', 'apple', 'cinnamon']}
            quantity={['100', '25', '5']}
          />
          <Meal
            name={mealsObject.meals[4].name}
            img={mealsObject.meals[4].img}
            calories="651"
            ingredients={['pasta', 'lentils', 'onion', 'carrot']}
            quantity={['90', '200', '25', '20']}
          />
        </div>
      ) : null}
    </div>
  );
};

export default GenerateMeals;
