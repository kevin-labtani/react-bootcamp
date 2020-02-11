import { useState } from "react";

export default initialVal => {
  const [value, setValue] = useState(initialVal);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };
  // can also return an object in a hook, doesn't need to be an array
  return [value, handleChange, reset]
};

// eg usage: const [age, handleAgeChange, resetAge] = useFormState("")
