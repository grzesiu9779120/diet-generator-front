/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from './Register.module.css';
import useInput from '../../../hooks/useInput';

import LoadingButton from '../../../UI/LoadingButton/LoadingButton';
import InputText from '../../../components/Input/InputText';
import useAuth from '../../../hooks/useAuth';
import axios from '../../../axios-auth';

const Register = function () {
  const history = useHistory();
  const [auth, setAuth] = useAuth();
  const [loading, setLoading] = useState(false);

  const [usernameProps, setUserName] = useInput('');
  const [emailProps, setEmail] = useInput('');
  const [passwordProps, setPassword] = useInput('');
  const [repeatedPasswordProps, setRepeatedPassword] = useInput('');
  const [weightProps, setWeight] = useInput('');
  const [heightProps, setHeight] = useInput('');
  const [ageProps, setAge] = useInput('');

  const [physicalActivity, setPhysicalActivity] = useState('');
  const [gender, setGender] = useState('');
  const [compatible, setCompatible] = useState(false);

  const [usernameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repeatedPasswordError, setRepeatedPasswordError] = useState('');
  const [weightError, setWeightError] = useState('');
  const [heightError, setHeightError] = useState('');

  /*
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post('accounts:signUp', {
        email: form.email.value,
        password: form.password.value,
        returnSecureToken: true
      });
      setAuth({
        email: res.data.email,
        token: res.data.idToken,
        userId: res.data.localId
      });
      history.push('/');
    } catch (ex) {
      setErrorFirebase(ex.response.data.error.message);
    }
    setLoading(false);
  };
*/

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  if (auth) {
    history.push('/');
  }

  return (
    <div>
      <h2>Register</h2>

      <div className="form-group">
        <form onSubmit={submit}>
          <InputText description="Username" usernameProps usernameError />
          <InputText description="Email" emailProps emailError />
          <InputText description="Password" passwordProps passwordError />
          <InputText description="Repeat password" repeatedPasswordProps repeatedPasswordError />
          <InputText description="Weight" weightProps weightError />
          <InputText description="Height" heightProps heightError />
          <label className={style.formLabel}>Physical activity during the day</label>
          <select
            className={style.formSelect}
            value={physicalActivity}
            onChange={(e) => setPhysicalActivity(e.target.value)}
            required>
            <option value={1.2}>Almost none</option>
            <option value={1.35}>Light activity</option>
            <option value={1.55}>Moderate activity</option>
            <option value={1.725}>High activity</option>
            <option value={1.9}>Very active</option>
          </select>
          <br />
          <p>{heightError}</p>
          <label className={style.formLabel}>Gender</label>
          <input type="radio" checked={gender} onClick={() => setGender('male')} /> Male
          <input type="radio" checked={gender} onClick={() => setGender('female')} /> Female
          <br />
          <p>{heightError}</p>
          <div className="text-right">
            <LoadingButton
              loading={loading}
              // disabled={!valid}
              className={style.registerButton}>
              Sign up
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
