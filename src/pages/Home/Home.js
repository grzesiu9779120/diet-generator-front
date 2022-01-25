/* eslint-disable func-names */

import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import LoadingIcon from '../../UI/LoadingIcon';
import style from './Home.module.css';

const Home = function () {
  const history = useHistory();
  useWebsiteTitle('Home');

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={style.conteiner}>
      {loading ? <LoadingIcon /> : null}
      <h1>Welcome to the automatic diet generator</h1>
      <div className={style.description}>
        At Diet4U, we have set ourselves the goal of relieving our users of the tedious process of
        manually creating a diet. Feel the freedom to choose your meals and achieve your dietary
        goals more easily.
      </div>

      <div className={style.createDiet}>
        Let yourself be taken care of and create your first diet with us
        <button
          type="button"
          className={style.createDietLink}
          onClick={() => {
            history.push('/');
          }}>
          Generate your plan
        </button>
      </div>

      <div className={style.createAccount}>
        or
        <button
          type="button"
          className={style.createAccountLink}
          onClick={() => {
            history.push('/register');
          }}>
          Sign up with email
        </button>
      </div>
    </div>
  );
};

export default Home;
