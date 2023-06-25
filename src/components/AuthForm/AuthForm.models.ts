export type Form = {
  email: string;
  password: string;
  passwordConfirmation?: string;
};
export type handleFormTypes = {
  inputName: string;
  inputVal: string;
};
export interface AuthFormProps {
  form: Form;
  onHandleForm: (args: handleFormTypes) => void;
  handleCreateAccount: () => void;
  serverError?: string[];
  handleLogin: () => void;
}
