export const checkValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid)
    return "Password must be at least 6 characters long, include one uppercase letter, one lowercase letter, one digit, and one special character";

  return null;
};
