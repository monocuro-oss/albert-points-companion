import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

import BaseLink from './HashLink';

const Link = styled(BaseLink)`
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

// Make sure ids do not contain whitespaces
export const cleanId = (dirtyId: string): string =>
  dirtyId.replace(/\s+/g, '-');

interface IdLinkProps {
  id: string;
  style?: 'block' | 'underline';
  children: ReactNode;
}
const IdLink: FC<IdLinkProps> = ({ id, style, children }) => {
  switch (style) {
    case 'underline':
      return (
        <UnderlineLink to={`#${cleanId(id)}`} id={cleanId(id)}>
          {children}
        </UnderlineLink>
      );
    case 'block':
      return (
        <BlockLink to={`#${cleanId(id)}`} id={cleanId(id)}>
          {children}
        </BlockLink>
      );
    default:
      return (
        <Link to={`#${cleanId(id)}`} id={cleanId(id)}>
          {children}
        </Link>
      );
  }
};

export default IdLink;
