import React, { forwardRef } from "react";
import { ContainerInput, Icon, Wrapper } from "./style";

const Input = forwardRef(
  (
    {
      type,
      onChange,
      value,
      defaultValue,
      pleceholder,
      name,
      width,
      height,
      icon,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <ContainerInput
          ref={ref}
          icon={icon}
          type={type}
          onChange={onChange}
          value={value}
          defaultValue={defaultValue}
          placeholder={pleceholder}
          name={name}
          width={width}
          height={height}
        />
      </Wrapper>
    );
  }
);

export default Input;
