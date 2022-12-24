import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid var(--textColor-white)",
        color: "var(--textColor-white)",
      };
    case "light":
      return {
        background: "var(--textColor-white)",
        border: "1px solid #E6E9EC",
        color: "var(--textColor-dark)",
      };
    case "primary":
      return {
        background: "var(--bg-primary)",
        border: "none",
        color: "var(--textColor-white)",
      };
    default:
      return {
        background: "var(--textColor-primary)",
        border: "none",
        color: "var(--textColor-white)",
      };
  }
};

const ContainerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  min-width: 120px;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "40px")};
  width: ${({ width }) => (width ? `${width}px` : "130px")};
  ${getType}
  cursor: pointer;
  :active {
    opacity: 0.7;
  }
`;

export { ContainerButton };
