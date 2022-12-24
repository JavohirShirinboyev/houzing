import React from "react";
import { ContainerButton } from "./style";

const Button = ({ children, type, onClick, width, height }) => {
  return (
    <ContainerButton
      onClick={onClick}
      type={type}
      width={width}
      height={height}
    >
      {children || "Generic Button"}
    </ContainerButton>
  );
};

export default Button;
