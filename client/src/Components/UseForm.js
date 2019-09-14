import { useState } from "react";

export const UseForm = (initialValue, submitName) => {
  const [values, setValues] = useState(initialValue);

  const handleChanges = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values);
  };

  const submitHandler = event => {
    event.preventDefault();
    console.log(event);
    setValues({ ...values, [submitName]: "" });
    console.log("Form has submitted");
  };

  return [values, handleChanges, submitHandler];
};
