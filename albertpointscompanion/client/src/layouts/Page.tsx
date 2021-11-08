import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Main = styled.main`
  padding: 2rem 3rem;
  margin: 0 auto;
  max-width: ${(props) => props.theme.layout.contentMaxWidth};
`;

interface PageProps {
  children: ReactNode;
}
const Page: FC<PageProps> = ({ children }) => {
  return <Main>{children}</Main>;
};

export default Page;
