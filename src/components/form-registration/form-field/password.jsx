export const PasswordComponent = ({ password, setPassword, setError }) => {
  const onPasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const onPasswordBlur = ({ target }) => {
    let error = null;
    if (target.value !== "" && !/^[A-Za-z0-9]*$/.test(target.value)) {
      error = "Пароль должен содержать только латинские буквы и цифры.";
    }

    setError(error);
  };

  return (
    <>
      <input
        name="password"
        type="password"
        value={password}
        onChange={onPasswordChange}
        onBlur={onPasswordBlur}
        placeholder="Пароль"
      />
    </>
  );
};
