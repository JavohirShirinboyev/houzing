// carousel
import React, { useRef } from "react";
import { Arrow, Blur, Container, Img, Content } from "./style";
import { Carousel } from "antd";

import img1 from "../../assets/images/sliderHouse1.png";
import img2 from "../../assets/images/sliderHouse2.png";

const GenCarousel = () => {
  const sliderRef = useRef();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "left") sliderRef.current.prev();
    if (name === "right") sliderRef.current.next();
  };
  return (
    <Container>
      <Carousel ref={sliderRef} afterChange={onChange}>
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc>112 Glenwood Ave Hyde Park, Boston, MA</Content.Desc>
        <Content.Price>$5,250/mo</Content.Price>
      </Content>
      <Arrow data-name="right" onClick={onMove} />
      <Arrow data-name="left" onClick={onMove} left />
    </Container>
  );
};

export default GenCarousel;
