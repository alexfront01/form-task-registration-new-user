import styles from "./form-component.module.css";
import { useState, useRef } from "react";
import {
  EmailComponent,
  PasswordComponent,
  PasswordRepleyComponent,
} from "./form-field";

export const FormRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepley, setPasswordRepley] = useState("");
  const [errors, setErrors] = useState(null);
  const [registrationFinish, setRegistrationFinish] = useState(false);

  //   Реф для фокуса на кнопку "отправить"
  const submitButtonRef = useRef(null);

  //   Обработчик для Формы и проверка паролей
  const onSubmit = (event) => {
    event.preventDefault();

    let error = null;

    if (password !== passwordRepley) {
      error = "Пароли не совпадают";
      setErrors(error);
      return;
    }

    setRegistrationFinish(true);
    setEmail("");
    setPassword("");
    setPasswordRepley("");

    console.log(`Форма отправленна: ${email}, Пароль:${password}`);
  };

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        {registrationFinish && <h2>Вы успешно зарегистрированы</h2>}
        {errors && <div className={styles.errorLabel}>{errors}</div>}
        <EmailComponent
          email={email}
          setEmail={setEmail}
          setErrors={setErrors}
          setRegistrationFinish={setRegistrationFinish}
        />
        <PasswordComponent
          password={password}
          setPassword={setPassword}
          setError={setErrors}
        />
        <PasswordRepleyComponent
          passwordRepley={passwordRepley}
          setPasswordRepley={setPasswordRepley}
          password={password}
          setErrors={setErrors}
          submitButtonRef={submitButtonRef}
        />

        <button
          type="submit"
          ref={submitButtonRef}
          disabled={errors !== null || !email || !password || !passwordRepley}
        >
          Зарегистрироваться
        </button>
      </form>
    </>
  );
};
