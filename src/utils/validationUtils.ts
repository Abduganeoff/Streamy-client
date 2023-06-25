const MIN_LIMIT = 4;
const MAX_LIMIT = 20;

export const isValidEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validateCharactersLimit = (
  name: string,
  min = MIN_LIMIT,
  max = MAX_LIMIT
) => {
  return name.trim().length > max || name.trim().length < min;
};

export const isEqualPassword = (
  password: string,
  passwordConfirmation: string
) => password === passwordConfirmation;

export const clearValidation = { isValid: true, message: "" };
