import { useState, useEffect } from "react";
import { validateCharactersLimit } from "../utils/validationUtils";

export const useValidateDetailForm = (formData: any) => {
  const [errorMessage, setErrorMessage] = useState({
    title: "",
    summary: "",
    description: "",
  });

  const { title, summary, description } = formData;

  useEffect(() => {
    const validateForm = () => {
      let updatedErrorMessage = {
        title: "",
        summary: "",
        description: "",
      };

      if (title === "") {
        updatedErrorMessage = {
          ...updatedErrorMessage,
          title: "Title is required",
        };
      }

      if (title !== "" && validateCharactersLimit(title, 1, 20)) {
        updatedErrorMessage = {
          ...updatedErrorMessage,
          title: "Title must be between 1 and 20 characters",
        };
      }

      if (summary !== "" && validateCharactersLimit(summary, 10, 50)) {
        updatedErrorMessage = {
          ...updatedErrorMessage,
          summary: "Summary must be between 10 and 50 characters",
        };
      }

      if (description !== "" && validateCharactersLimit(description, 20, 150)) {
        updatedErrorMessage = {
          ...updatedErrorMessage,
          description: "Description must be between 20 and 150 characters",
        };
      }

      setErrorMessage(updatedErrorMessage);
    };

    validateForm();
  }, [title, summary, description]);

  const isAnyError = Object.values(errorMessage).some(
    (message) => message !== ""
  );
  return { errorMessage, isAnyError };
};
