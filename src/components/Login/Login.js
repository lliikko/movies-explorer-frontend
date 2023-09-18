import Form from '../Form/Form';

const Login = ({ inputError, errorSpan }) => {
  return (
    <Form
      name="signin"
      title="Рады видеть!"
      buttonText="Войти"
      text="Ещё не зарегистрированы?"
      link="Регистрация"
      path="/signup"
    >
      <fieldset className="login__auth">
        <label className="login__field">
          <span className="login__input-title">E-mail</span>
          <input
            type="email"
            placeholder="E-mail"
            className={`login__input ${
              inputError ? `login__input_error` : ''
            }`}
            id="input-email"
            name="email"
            required
          />
          <span
            className={`login__error ${
              errorSpan ? `login__error_active` : ''
            } input-email-error`}
          >
            Что-то пошло не так...
          </span>
        </label>
        <label className="login__field">
          <span className="login__input-title">Пароль</span>
          <input
            type="password"
            placeholder="Пароль"
            className={`login__input ${
              inputError ? `login__input_error` : ''
            }`}
            id="input-password"
            name="password"
            required
          />
          <span
            className={`login__error ${
              errorSpan ? `login__error_active` : ''
            } input-password-error`}
          >
            Что-то пошло не так...
          </span>
        </label>
      </fieldset>
    </Form>
  );
};

export default Login;
