export const EmailComponent = ({
  email,
  setEmail,
  setErrors,
  setRegistrationFinish,
}) => {
  //обработчик для поля Email
  const onEmailChange = ({ target }) => {
    setEmail(target.value);
    setRegistrationFinish(false);
  };

  const onEmailBlur = ({ target }) => {
    let error = null;

    if (
      target.value !== "" &&
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(target.value)
    ) {
      error = "Введите корректный email";
    }

    setErrors(error);
  };

  return (
    <>
      <input
        name="email"
        type="email"
        value={email}
        placeholder="Введите почту"
        onChange={onEmailChange}
        onBlur={onEmailBlur}
      />
    </>
  );
};
