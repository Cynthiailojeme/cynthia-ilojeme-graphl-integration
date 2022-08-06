import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const SignIn = () => {
  return (
    <div>
      <Input
        label="First name"
        type="text"
        name="first_name"
        onChange={() => {}}
        placeholder="Enter first name"
      />
      <Button text="Submit" onClick={() => {}} marginTop={30}/>
    </div>
  );
};

export default SignIn;
