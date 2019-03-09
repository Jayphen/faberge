import { useCallback, useState } from "react";

export default function useForm() {
  const [values, setValues] = useState();

  const setFormValues = useCallback(function setFormValues(
    event: React.FormEvent<HTMLInputElement>,
  ) {
    const {
      currentTarget: { value, name },
    } = event;

    setValues({
      [name]: value,
    });
  },
  []);

  return { values, setFormValues };
}
