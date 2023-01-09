import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  position: relative;
  height: 571px;
`;

const Arrow = styled(arrow)`
  position: absolute;
  top: 50%;
  /* transform: translate(50%, 50%); */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;

  transform: ${({ left }) => (left ? "rotate(0deg)" : "rotate(-180deg)")};
  left: ${({ left }) => left && "20px"};
  right: ${({ left }) => !left && "20px"};

  :hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: var(--textColor-white);
`;

Content.Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  /* identical to box height, or 109% */

  letter-spacing: -0.02em;
`;

Content.Desc = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

Content.Price = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  /* identical to box height, or 129% */

  letter-spacing: -0.02em;
`;

export { Container, Arrow, Img, Blur, Content };
