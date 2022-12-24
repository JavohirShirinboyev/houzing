import React from "react";
import { Input, Button } from "../Generic";
import { Container } from "./styled";

const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Input pleceholder={"City"} />
    </Container>
  );
};

export default Home;
