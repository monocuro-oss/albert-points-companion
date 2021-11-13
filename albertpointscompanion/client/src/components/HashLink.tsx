import React, { FC, ReactNode, useContext } from 'react';
import { HashLink as BaseLink } from 'react-router-hash-link';
import { ThemeContext } from 'styled-components';

interface HashLinkProps {
  to: string;
  id?: string;
  className?: string;
  children: ReactNode;
}
const HashLink: FC<HashLinkProps> = ({ to, id, className, children }) => {
  const themeContext = useContext(ThemeContext);

  const remToPx = (x: string): number =>
    parseInt(x) * parseInt(getComputedStyle(document.documentElement).fontSize);

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -(
      remToPx(themeContext.layout.headerHeight) + remToPx('2rem')
    );

    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <BaseLink
      to={to}
      id={id}
      className={className}
      scroll={(el) => scrollWithOffset(el)}
    >
      {children}
    </BaseLink>
  );
};

export default HashLink;
