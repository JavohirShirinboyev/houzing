import styled from "styled-components";

const ContainerInput = styled.input`
  border-radius: 2px;
  border: 1px solid #e6e9ec;
  outline: none;
  padding-left: 16px;
  color: #0d263b;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "40px")};
  width: ${({ width }) => (width ? `${width}px` : "200px")};
`;

export { ContainerInput };
