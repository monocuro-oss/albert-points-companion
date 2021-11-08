import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Link as BaseLink } from 'react-router-dom';

const Link = styled(BaseLink)`
  color: ${(props) => props.theme.colors.text};
  display: block;
  text-decoration: none;
`;

const UnderlineLink = styled(Link)`
  border-bottom: 0.3rem solid ${(props) => props.theme.colors.primaryAccentDark};
  margin-bottom: 1.5rem;

  & > * {
    font-size: 1.5rem;
    font-weight: 800;
    margin: 0.5rem 0;
  }
`;

const BlockLink = styled(Link)`
  background-color: ${(props) => props.theme.colors.backgroundLight};
  padding: 0.5rem 1rem;

  & > * {
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;
  }
`;

interface IdLinkProps {
  id: string;
  style?: 'block' | 'underline';
  children: ReactNode;
}
const IdLink: FC<IdLinkProps> = ({ id, style, children }) => {
  switch (style) {
    case 'underline':
      return (
        <UnderlineLink to={`#${encodeURIComponent(id)}`} id={id}>
          {children}
        </UnderlineLink>
      );
    case 'block':
      return (
        <BlockLink to={`#${encodeURIComponent(id)}`} id={id}>
          {children}
        </BlockLink>
      );
    default:
      return (
        <Link to={`#${encodeURIComponent(id)}`} id={id}>
          {children}
        </Link>
      );
  }
};

export default IdLink;
