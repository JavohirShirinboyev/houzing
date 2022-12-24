import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-dark);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--textColor-white);
  padding: var(--padding);
  height: 64px;
  width: 100%;
  max-width: 1440px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: #b8ff06;
  }
`;

const Logo = styled.img`
  width: 30px;
  margin-right: 12px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  font-size: 16px;
  color: var(--textColor-white);
`;

export { Container, Wrapper, Section, Logo, Link, Main };
