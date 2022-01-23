/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable func-names */
import style from '../../pages/Auth/Register/Register.module.css';

const InputText = function (props) {
  return (
    <div>
      <label className={style.formLabel}>{props.description}</label>
      <input className={style.formInput} {...props.usernameProps} type="text" required />
      <br />
      <p>{props.usernameError}</p>
    </div>
  );
};

export default InputText;
