import React from "react";
import { Container, Content, Details, Icons, Img, Line } from "./style.js";
import noImg from "../../assets/images/noimg.jpg";

const HouseCard = ({ url, title, info, bed, bath, garage, ruler }) => {
  return (
    <Container>
      <Img src={url || noImg} />
      <Content>
        <div className="subTitle">{title || "New Apartment Nice Wiew"}</div>
        <div className="info">{info || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">{bed || 0} Beds</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">{bath || 0} Baths</div>
          </Details.Item>
          <Details.Item>
            <Icons.Car />
            <div className="info">{garage || 0} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">{ruler || 0} Sq Ft</div>
          </Details.Item>
        </Details>
      </Content>
      <Line />
      <Content footer>
        <Details.Item footer>
          <div className="info">$2,800/mo</div>
          <div className="subTitle">$7,500/mo</div>
        </Details.Item>
        <Details.Item row>
          <Icons.Resize />
          <Icons.Love />
        </Details.Item>
      </Content>
    </Container>
  );
};

export default HouseCard;
