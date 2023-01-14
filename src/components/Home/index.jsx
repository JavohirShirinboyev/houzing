import React from "react";
import CarouselHome from "../Carousel";
import { Input, Button } from "../Generic";
import HouseCard from "../HouseCard";
import { Container } from "./styled";

const Home = () => {
  return (
    <Container>
      <CarouselHome />
      <HouseCard />
    </Container>
  );
};

export default Home;
