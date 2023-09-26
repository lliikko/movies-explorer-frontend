import { useEffect } from 'react';
import useValidation from '../../validation/useValidation';
import { NAME_REGEXP } from "../../utils/constans";
import Form from '../Form/Form';

const Register = ({  handleRegisterSubmit, errorMessage, errorActive }) => {
  const { values, handleChange, formReset, errors, isValid } =
    useValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegisterSubmit(values);
  };

  useEffect(() => {
    formReset();
  }, [formReset]);

  return (
    <Form
      onSubmit={handleSubmit}
      name="signup"
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      text="Уже зарегистрированы?"
      link="Войти"
      path="/signin"
      isValid={isValid}
      errorMessage={errorMessage}
      errorActive={errorActive}
    >
      <fieldset className="auth-form__set-auth">
        <label className="auth-form__field">
          <span className="auth-form__input-title">Имя</span>
          <input
            type="text"
            placeholder="Имя"
            className={`auth-form__input ${
              errors.name ? `auth-form__input_error` : ''
            }`}
            name="name"
            value={values.name || ''}
            onChange={handleChange}
            required
            minLength="2"
            maxLength="30"
            pattern={NAME_REGEXP}
          />
          <span
            className={`auth-form__error ${
              errors.name ? `auth-form__error_active` : 'auth-form__error_active'
            }`}
          >
            {errors.name}
          </span>
        </label>
        <label className="auth-form__field">
          <span className="auth-form__input-title">E-mail</span>
          <input
            type="email"
            placeholder="E-mail"
            className={`auth-form__input ${
              errors.email ? `auth-form__input_error` : ''
            }`}
            value={values.email || ''}
            onChange={handleChange}
            name="email"
            required
          />
          <span
            className={`auth-form__error ${
              errors.email ? `auth-form__error_active` : ''
            }`}
          >
            {errors.email}
          </span>
        </label>
        <label className="auth-form__field">
          <span className="auth-form__input-title">Пароль</span>
          <input
            type="password"
            placeholder="Пароль"
            className={`auth-form__input ${
              errors.password ? `auth-form__input_error` : ''
            }`}
            value={values.password || ''}
            onChange={handleChange}
            name="password"
            minLength={8}
            required
          />
          <span
            className={`auth-form__error ${
              errors.password ? `auth-form__error_active` : ''
            }`}
          >
            {errors.password}
          </span>
        </label>
      </fieldset>
    </Form>
  );
};

export default Register;
