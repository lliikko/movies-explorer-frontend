import Form from '../Form/Form';

const Register = ({ inputError, errorSpan }) => {
  return (
    <Form
      name="signup"
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      text="Уже зарегистрированы?"
      link="Войти"
      path="/signin"
    >
      <fieldset className="auth-form__set-auth">
        <label className="auth-form__field">
          <span className="auth-form__input-title">Имя</span>
          <input
            type="text"
            placeholder="Имя"
            className={`auth-form__input ${
              inputError ? `auth-form__input_error` : ''
            }`}
            id="input-name"
            name="name"
            required
            minLength="2"
            maxLength="30"
          />
          <span
            className={`auth-form__error ${
              errorSpan ? `auth-form__error_active` : ''
            } input-name-error`}
          >
            Что-то пошло не так...
          </span>
        </label>
        <label className="auth-form__field">
          <span className="auth-form__input-title">E-mail</span>
          <input
            type="email"
            placeholder="E-mail"
            className={`auth-form__input ${
              inputError ? `auth-form__input_error` : ''
            }`}
            id="input-email"
            name="email"
            required
          />
          <span
            className={`auth-form__error ${
              errorSpan ? `auth-form__error_active` : ''
            } input-email-error`}
          >
            Что-то пошло не так...
          </span>
        </label>
        <label className="auth-form__field">
          <span className="auth-form__input-title">Пароль</span>
          <input
            type="password"
            placeholder="Пароль"
            minLength="5"
            maxLength="30"
            className={`auth-form__input ${
              inputError ? `auth-form__input_error` : ''
            }`}
            id="input-password"
            name="password"
            required
          />
          <span
            className={`auth-form__error ${
              !errorSpan ? `auth-form__error_active` : ''
            } input-password-error`}
          >
            Что-то пошло не так...
          </span>
        </label>
      </fieldset>
    </Form>
  );
};

export default Register;
