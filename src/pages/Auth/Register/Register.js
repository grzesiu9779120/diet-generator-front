/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
import { useState, useEffect } from 'react';
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
  const [compatible, setCompatible] = useState(false);

  const [usernameProps, setUserName] = useInput('');
  const [emailProps, setEmail] = useInput('');
  const [passwordProps, setPassword] = useInput('');
  const [repeatedPasswordProps, setRepeatedPassword] = useInput('');
  const [weightProps, setWeight] = useInput('');
  const [heightProps, setHeight] = useInput('');
  const [ageProps, setAge] = useInput('');

  const [physicalActivity, setPhysicalActivity] = useState('');
  const [gender, setGender] = useState('');

  const [usernameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repeatedPasswordError, setRepeatedPasswordError] = useState('');
  const [weightError, setWeightError] = useState('');
  const [heightError, setHeightError] = useState('');
  const [ageError, setAgeError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post('accounts:signUp', {
        email: emailProps.value,
        password: passwordProps.value,
        returnSecureToken: true
      });
      setAuth({
        email: res.data.email,
        token: res.data.idToken,
        userId: res.data.localId
      });
      history.push('/');
    } catch (ex) {
      console.log(ex);
    }
    setLoading(false);
    history.push('/');
  };

  const validation = () => {
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if (usernameProps.value === '') {
      setNameError('Name field cannot be empty');
    } else setNameError('');

    if (emailProps.value === '') {
      setEmailError('Email field cannot be empty');
    } else if (!emailRegex.test(emailProps.value)) {
      setEmailError('Email is not valid');
    } else setEmailError('');

    if (passwordProps.value === '') {
      setPasswordError('Password field cannot be empty');
    } else if (!passwordRegex.test(passwordProps.value)) {
      setPasswordError(
        'Password is too weak. The password should consist of a minimum of eight characters, one number, one uppercase letter, one lowercase letter'
      );
    } else {
      setPasswordError('');
    }

    if (repeatedPasswordProps.value === '' || repeatedPasswordProps.value !== passwordProps.value) {
      setRepeatedPasswordError('The passwords do not match');
    } else {
      setRepeatedPasswordError('');
    }

    if (weightProps.value === '' || (weightProps.value < 10 && weightProps.value > 300)) {
      setWeightError('Incorrect weight');
    } else {
      setWeightError('');
    }

    if (heightProps.value === '' || (heightProps.value < 50 && heightProps.value > 250)) {
      setHeightError('Incorrect height');
    } else {
      setHeightError('');
    }

    if (
      ageProps.value === '' ||
      ageProps.value < 5 ||
      ageProps.value > 100 ||
      isNaN(parseInt(ageProps.value, 10))
    ) {
      setAgeError('Incorrect age');
    } else {
      setAgeError('');
    }
  };

  useEffect(() => {
    validation();
    const errorArray = [
      usernameError,
      emailError,
      passwordError,
      repeatedPasswordError,
      weightError,
      heightError,
      ageError
    ];
    errorArray.every((e) => e === '') ? setCompatible(true) : setCompatible(false);
  }, [
    usernameProps,
    emailProps,
    passwordProps,
    repeatedPasswordProps,
    weightProps,
    heightProps,
    ageProps
  ]);

  /*
  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    history.push('/');
  };

  */
  if (auth) {
    history.push('/');
  }

  return (
    <div>
      <h2>Register</h2>

      <div className="form-group">
        <form onSubmit={submit}>
          <InputText description="Username" inputProps={usernameProps} inputError={usernameError} />
          <InputText
            description="Email"
            inputProps={emailProps}
            inputError={emailError}
            typeInput="email"
          />
          <InputText
            description="Password"
            inputProps={passwordProps}
            inputError={passwordError}
            typeInput="password"
          />
          <InputText
            description="Repeat password"
            inputProps={repeatedPasswordProps}
            inputError={repeatedPasswordError}
            typeInput="password"
          />
          <InputText
            description="Weight (kg)"
            inputProps={weightProps}
            inputError={weightError}
            size="small"
          />
          <InputText
            description="Height (cm)"
            inputProps={heightProps}
            inputError={heightError}
            size="small"
          />
          <InputText description="Age" inputProps={ageProps} inputError={ageError} size="small" />
          <label className={style.formLabel}>Physical activity during the day</label>
          <select
            className={style.formSelect}
            value={physicalActivity}
            onChange={(e) => setPhysicalActivity(e.target.value)}
            required>
            <option value="Almost none">Almost none</option>
            <option value="Lightly Active">Light activity</option>
            <option value="Moderately Active">Moderate activity</option>
            <option value="High Activity">High activity</option>
            <option value="Very high Activity">High activity</option>
          </select>
          <br />

          <label className={style.formLabel}>Gender</label>
          <select
            className={style.formSelect}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <div className="text-right">
            <LoadingButton
              loading={loading}
              disabled={!compatible}
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
