import styled from "styled-components";

import { ReactComponent as filter } from "../../assets/images/filter.svg";
import { ReactComponent as house } from "../../assets/images/house.svg";
import { ReactComponent as search } from "../../assets/images/search.svg";

const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Icons = styled.div``;

Icons.Filter = styled(filter)`
  margin-right: 8px;
`;
Icons.House = styled(house)``;
Icons.Search = styled(search)`
  margin-right: 8px;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
`;
const Section = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
`;

export { Container, Icons, MenuWrapper, Section };
