import styles from "./form-component.module.css";
import {
  EmailComponent,
  PasswordComponent,
  PasswordRepleyComponent,
} from "./form-field";

export const FormRegistration = () => {
  return (
    <>
      <form className={styles.form}>
        <EmailComponent />
        <PasswordComponent />
        <PasswordRepleyComponent />
        <button>Зарегистрироваться</button>
      </form>
    </>
  );
};
