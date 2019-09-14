import React from "react";
import { UseForm } from "./Components/UseForm.js";

const Form = props => {
  const [inputValues, changeHandler, submitHandler] = UseForm(
    {
      basicText: "",
      anotherText: ""
    },
    "basicText"
  );

  return (
    <form onSubmit={submitHandler}>
      <input
        name="basicText"
        placeholder="Type A Comment"
        value={inputValues.basicText}
        onChange={changeHandler}
      />
      <input
        name="anotherText"
        placeholder="Type A Comment"
        value={inputValues.anotherText}
        onChange={changeHandler}
      />
      <button hidden />
    </form>
  );
};

export default Form;
