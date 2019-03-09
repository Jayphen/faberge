import { useCallback, useState } from "react";

export default function useForm() {
  const [values, setValues] = useState<{ [k: string]: string }>();

  const setFormValues = useCallback(function setFormValues(
    event: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) {
    const {
      currentTarget: { value, name },
    } = event;

    setValues({
      [name]: value,
    });
  },
  []);

  const handleEnterSubmit = useCallback(function handleEnterSubmit(
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    cb: (e: React.KeyboardEvent<HTMLTextAreaElement>) => any,
  ) {
    if (e.key === "Enter") {
      e.preventDefault();
      cb(e);
    }
  },
  []);

  function reset() {
    setValues(undefined);
  }

  return { values, setFormValues, handleEnterSubmit, reset };
}
