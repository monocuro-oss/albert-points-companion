import { createGlobalStyle } from 'styled-components';

export const styledComponentTheme = {
  colors: {
    background: '#242629',
    backgroundLight: '#474C53',
    primaryAccent: '#77AE54',
    primaryAccentDark: '#62844C',
    text: '#FFFFFF',
    textHover: '#C4C4C4',
    scrollbar: '#313131',
    textbox: '#484848',
  },
  layout: {
    headerHeight: '6rem',
    sectionNavWidth: '15rem',
    contentMaxWidth: '1200px',
  },
  font: {
    baseFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
    headerFamily: `'Righteous', cursive`,
  },
};

export const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
}

html {
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.font.baseFamily};
  font-size: 16px;
}

h1 {
  font-family: ${(props) => props.theme.font.headerFamily};
  text-transform: uppercase;
}

a {
  color: ${(props) => props.theme.colors.text};
}

code {
  background-color: ${(props) => props.theme.colors.backgroundLight};
}
`;
