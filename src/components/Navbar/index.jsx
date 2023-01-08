import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Section, Wrapper, Logo, Link, Main } from "./styled";
import logoImg from "../../assets/icons/logo.png";
import navbar from "../../utils/navbar";
import Button from "../Generic/Button";
import Filter from "../Filter";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo>
            <Logo src={logoImg} />
            <h3 className="logo">Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    key={index}
                    to={path}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            <Button onClick={() => navigate("signin")} type={"dark"}>
              Sign In
            </Button>
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
    </Container>
  );
};

export default Navbar;
