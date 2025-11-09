export const PasswordRepleyComponent = ({
  passwordRepley,
  setPasswordRepley,
  password,
  setErrors,
  submitButtonRef,
}) => {
  const onPasswordRepleyChange = ({ target }) => {
    setPasswordRepley(target.value);

    if (setErrors) setErrors(null);

    if (submitButtonRef.current && target.value.length === password.length) {
      submitButtonRef.current.focus();
    }
  };

  return (
    <>
      <input
        name="password"
        type="password"
        value={passwordRepley}
        onChange={onPasswordRepleyChange}
        placeholder="Повтор пароля "
      />
    </>
  );
};
