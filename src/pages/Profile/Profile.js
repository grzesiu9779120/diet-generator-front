/* eslint-disable func-names */
import style from './Profile.module.css';

import profilePicture from '../../assets/images/1.png';

const Profile = function () {
  return (
    <div className={style.conteiner}>
      <h1> Your profile </h1>
      <img src={profilePicture} alt="" />
    </div>
  );
};

export default Profile;
