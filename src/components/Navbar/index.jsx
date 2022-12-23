import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Section, Wrapper, Logo, Link } from "./styled";
import logoImg from "../../assets/icons/logo.png";
import navbar from "../../utils/navbar";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Section onClick={() => navigate("/home")} logo>
          <Logo to="/home" src={logoImg} />
          <h3>Houzing</h3>
        </Section>
        <Section>
          {navbar.map(({ title, path }, index) => {
            return (
              <Link
                className={({ isActive }) => isActive && "active"}
                key={index}
                to={path}
              >
                {title}
              </Link>
            );
          })}
        </Section>
        <Section>
          <button>Login</button>
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Navbar;
