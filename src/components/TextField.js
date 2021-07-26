import { Field, useField } from "formik";
import React from "react";

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  //   const { label, name, type } = props;
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input {...field} {...props} autoComplete="off" />
    </div>
  );
}

export default TextField;
