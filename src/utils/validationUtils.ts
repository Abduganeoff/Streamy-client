const MIN_LIMIT = 4;
const MAX_LIMIT = 20;

export const isValidEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validateCharactersLimit = (name: string) => {
  return name.trim().length > MAX_LIMIT || name.trim().length < MIN_LIMIT;
};

export const isEqualPassword = (password: string, confirmPassword: string) =>
  password === confirmPassword;

export const clearValidation = { isValid: true, message: "" };
