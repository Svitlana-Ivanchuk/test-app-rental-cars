import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  display: flex;
  gap: 16px;
  padding: 16px;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: #3470ff;

  &.active {
    background-color: #0b44cd;
  }
`;
