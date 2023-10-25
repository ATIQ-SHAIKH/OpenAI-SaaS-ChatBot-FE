import React from "react";
import { TextField } from "@mui/material";

const CustomInput = ({ name, type, label }) => {
  return (
    <TextField
      InputLabelProps={{ style: { color: "white" } }}
      InputProps={{
        style: {
          width: "400px",
          borderRadius: 10,
          fontSize: 20,
          color: "white",
        },
      }}
      margin="normal"
      name={name}
      label={label}
      type={type}
    ></TextField>
  );
};

export default CustomInput;
