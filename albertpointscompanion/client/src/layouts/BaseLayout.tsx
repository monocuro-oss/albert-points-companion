import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { pages } from '@/pages';

const Header = styled.header`
  align-items: center;
  background-color: ${(props) => props.theme.colors.primaryAccent};
  box-sizing: border-box;
  display: flex;
  font-family: ${(props) => props.theme.font.headerFamily};
  height: ${(props) => props.theme.layout.headerHeight};
  left: 0;
  justify-content: space-between;
  padding: 0 3rem;
  position: fixed;
  text-transform: uppercase;
  top: 0;
  width: 100%;
  z-index: 1000;
`;
const TitleLink = styled(Link)`
  text-decoration: none;

  h1 {
    font-size: 1.5rem;
    margin: 0;
  }
`;

const Nav = styled.nav`
  height: 100%;
`;
const NavLink = styled(Link)`
  align-items: center;
  display: inline-flex;
  font-weight: 600;
  height: 100%;
  margin: 0 1rem;
  padding: 0 1rem;
  text-decoration: none;
`;

const Body = styled.div`
  margin-top: ${(props) => props.theme.layout.headerHeight};
`;

interface BaseLayoutProps {
  children: ReactNode;
}
const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Header>
        <TitleLink to="/">
          <h1>Albert Points Companion</h1>
        </TitleLink>
        <Nav>
          {pages.map((page, index) => (
            <NavLink to={page.path} key={index}>
              {page.name}
            </NavLink>
          ))}
        </Nav>
      </Header>
      <Body>{children}</Body>
    </>
  );
};

export default BaseLayout;
