import React from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as yup from "yup";

function Signup(props) {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        email: "",
        phoneNumber: "",
      }}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <div>
          <h1>Sign Up</h1>
          <form>
            <TextField label="Username" name="username" type="text" />
            <TextField label="Password" name="password" type="password" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Phone Number" name="phoneNumber" type="tel" />
            <button type="submit">Register</button>
            <button type="reset">Reset</button>
          </form>
        </div>
      )}
    </Formik>
  );
}

export default Signup;
