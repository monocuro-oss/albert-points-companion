import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Page from './Page';

const Container = styled.div`
  margin-left: ${(props) => props.theme.layout.sectionNavWidth};
`;

const SectionNav = styled.nav`
  inset: ${(props) => props.theme.layout.headerHeight} auto 0 0;
  overflow: auto;
  padding-left: 1rem;
  padding-top: 2rem;
  position: fixed;
  width: ${(props) => props.theme.layout.sectionNavWidth};
`;
const SectionNavItemLink = styled(Link)<{ level: number }>`
  color: ${(props) => props.theme.colors.primaryAccentDark};
  display: block;
  margin-bottom: 0.5rem;
  padding-left: ${(props) => props.level * 1.5}rem;
  text-decoration: none;
`;

export const Section = styled.section`
  margin-bottom: 3rem;

  p {
    margin-bottom: 2rem;
  }
`;

export type SectionNavItem = {
  name: string;
  id: string;
  children?: SectionNavItem[];
};

interface SectionNavItemProps {
  navItems: SectionNavItem[];
  level: number;
}
const SectionNavItem: FC<SectionNavItemProps> = ({ navItems, level }) => {
  return (
    <>
      {navItems.map((navItem, index) => (
        <div key={index}>
          <SectionNavItemLink to={`#${navItem.id}`} level={level}>
            {navItem.name}
          </SectionNavItemLink>
          {navItem.children && (
            <SectionNavItem navItems={navItem.children} level={level + 1} />
          )}
        </div>
      ))}
    </>
  );
};

interface SectionedPageProps {
  children: ReactNode;
  navItems: SectionNavItem[];
}
const SectionedPage: FC<SectionedPageProps> = ({ children, navItems }) => {
  return (
    <Container>
      <SectionNav>
        <SectionNavItem navItems={navItems} level={1} />
      </SectionNav>

      <Page>{children}</Page>
    </Container>
  );
};

export default SectionedPage;
