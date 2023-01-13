import React, { useRef } from "react";
import { Carousel } from "antd";
import { Arrow, Blur, Container, Content, Img } from "./style";

import img1 from "../../assets/images/house1.png";
import img2 from "../../assets/images/house2.png";

const CarouselHome = () => {
  const carouselRef = useRef();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") carouselRef.current.next();
    if (name === "left") carouselRef.current.prev();
  };

  return (
    <Container>
      <Carousel ref={carouselRef} afterChange={onChange}>
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc>112 Glenwood Ave Hyde Park, Boston, MA</Content.Desc>
        <Content.Price>$5,250/mo</Content.Price>
      </Content>
      <Arrow onClick={onMove} data-name="left" left />
      <Arrow onClick={onMove} data-name="right" right />
    </Container>
  );
};

export default CarouselHome;
