import { useState } from "react";

export function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  function validate(validator: (value: string) => string | null) {
    const result = validator(value);

    if (result) {
      setError(result);
      return false;
    }

    setError("");
    return true;
  }

  return {value, setValue, error, setError, validate, 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value),
  };
}