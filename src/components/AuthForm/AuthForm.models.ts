export type Form = {
  username: string;
  password: string;
  confirmPassword?: string;
};
export type handleFormTypes = {
  inputName: string;
  inputVal: string;
};
export interface AuthFormProps {
  form: Form;
  onHandleForm: (args: handleFormTypes) => void;
}
