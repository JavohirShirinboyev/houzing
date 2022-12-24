import React from "react";
import { ContainerInput } from "./style";

const Input = ({
  type,
  onChange,
  value,
  defaultValue,
  pleceholder,
  name,
  width,
  height,
}) => {
  return (
    <ContainerInput
      type={type}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
      placeholder={pleceholder}
      name={name}
      width={width}
      height={height}
    />
  );
};

export default Input;
