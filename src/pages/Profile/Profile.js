/* eslint-disable func-names */
import { useHistory } from 'react-router-dom';
import style from './Profile.module.css';
import profilePicture from '../../assets/images/1.png';
import caloricDemandCalculator from '../../helpers/caloricDemandCalculator';

const user = {
  username: 'nowak',
  email: 'nowak@gmail.com',
  physicalDetails: {
    weight: 75,
    height: 172,
    age: 32,
    physicalActivity: 'Almost none',
    gender: 'Male'
  }
};

const Profile = function () {
  const history = useHistory();
  return (
    <div className={style.conteiner}>
      <h1> Your profile </h1>
      <div className={style.lineBreak} />
      <img className={style.profileImg} src={profilePicture} alt="" />
      <p>
        <span>Username: {user.username} </span>
        <span>Email: {user.email} </span>
        <span>Weight: {user.physicalDetails.weight} </span>
        <span>Height: {user.physicalDetails.height} </span>
        <span>Age: {user.physicalDetails.age} </span>
        <span>Physical activity: {user.physicalDetails.physicalActivity} </span>
        <span>Gender: {user.physicalDetails.gender} </span>
      </p>
      <div className={style.lineBreak} />
      <div className={style.caloricDemandConteiner}>
        Your current caloric requirement{' '}
        <div className={style.caloric}>{caloricDemandCalculator(user.physicalDetails)} kcal</div>
      </div>
      <div className={style.lineBreak} />
      <p style={{ fontWeight: '700' }}>
        Adapt your diet to yourself, excluding products you don&apos;t like.
      </p>
      <div className={style.lineBreak} />
      <button
        className={style.buttonProfile}
        type="button"
        onClick={() => {
          history.push('/exclusions');
        }}>
        Exclusions
      </button>
    </div>
  );
};

export default Profile;
