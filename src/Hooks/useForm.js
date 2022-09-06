import { useState } from "react";
import { omit } from "lodash";

const useForm = (callback) => {
  // Set Values
  const [values, setValues] = useState({});

  // Set Errors
  const [errors, setErrors] = useState({});

  const validate = (event, name, value) => {
    // A function to validate each input value

    switch (name) {
      case "name":
        if (value.length <= 4) {
          // set the error state

          setErrors({
            ...errors,
            name: "Username should be at least 5 letters",
          });
        } else {
          // set the error state empty or remove the error for username input
          let newObj = omit(errors, "name");
          setErrors(newObj);
        }

        break;

      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }

        break;

      case "password":
        if (
          !new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{8,}$/).test(
            value
          )
        ) {
          setErrors({
            ...errors,
            password:
              "Password should contain at least 8 characters (at least one uppercase, lowercase, number and symbol)",
          });
        } else {
          let newObj = omit(errors, "password");
          setErrors(newObj);
        }

        break;
      default:
        break;
    }
  };

  // A method to handle the form inputs
  const handleChange = (event) => {
    // To stop default events
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);

    // Setting values in the state
    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      alert("Please fill the form apporpriately");
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
