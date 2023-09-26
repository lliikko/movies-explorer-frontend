import { useEffect } from 'react';
import Form from '../Form/Form';
import useValidation from '../../validation/useValidation';

const Login = ({ handleLoginSubmit }) => {
  const { values, handleChange, formReset, errors, isValid } =
    useValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLoginSubmit(values);
  };

  useEffect(() => {
    formReset();
  }, [formReset]);

  return (
    <Form
     onSubmit={handleSubmit}
      name="signin"
      title="Рады видеть!"
      buttonText="Войти"
      text="Ещё не зарегистрированы?"
      link="Регистрация"
      path="/signup"
      isValid={isValid}
    >
      <fieldset className="auth-form__set-auth">
        <label className="auth-form__field">
          <span className="auth-form__input-title">E-mail</span>
          <input
            type="email"
            placeholder="E-mail"
            className={`auth-form__input ${
              errors.email ? `auth-form__input_error` : ''
            }`}
            name="email"
            value={values.email || ''}
            onChange={handleChange}
            required
          />
          <span className={`auth-form__error ${
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
            name="password"
            value={values.password || ''}
            onChange={handleChange}
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

export default Login;
