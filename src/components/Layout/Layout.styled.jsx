import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  box-shadow: 0px 3px 0px grey;

  > nav {
    display: flex;
  }
`;
Header.displayName = 'Header';

export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;
Ul.displayName = 'Ul';

export const LinkItem = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: red;
    /* cursor: default; */
    /* background-color: orangered; */
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    /* color: blue; */
    text-decoration: underline;
    /* background-color: orangered; */
  }
`;
LinkItem.displayName = 'Link';
