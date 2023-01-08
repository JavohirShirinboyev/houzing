import React, { useRef } from "react";
import { Dropdown } from "antd";
import { Input, Button } from "../Generic";
import { Container, Icons, MenuWrapper, Section } from "./style";

const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipCodeRef = useRef();

  const roomsRef = useRef();
  const sizeeRef = useRef();
  const sortRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input ref={countryRef} pleceholder="Country" />
        <Input ref={regionRef} pleceholder="Region" />
        <Input ref={cityRef} pleceholder="City" />
        <Input ref={zipCodeRef} pleceholder="Zip code" />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input ref={roomsRef} pleceholder="Rooms" />
        <Input ref={sizeeRef} pleceholder="Size" />
        <Input ref={sortRef} pleceholder="Sort" />
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input ref={minPriceRef} pleceholder="Min price" />
        <Input ref={maxPriceRef} pleceholder="Max price" />
      </Section>
    </MenuWrapper>
  );

  return (
    <Container>
      <Input
        icon={<Icons.House />}
        pleceholder="Enter an address, neighborhood, city, or ZIP code"
      />

      <Dropdown
        overlay={menu}
        placement="bottomRight"
        arrow={{ pointAtCenter: true }}
      >
        <div>
          <Button type="light">
            <Icons.Filter />
            Advanced
          </Button>
        </div>
      </Dropdown>
      <Button>
        <Icons.Search />
        Search
      </Button>
    </Container>
  );
};

export default Filter;
