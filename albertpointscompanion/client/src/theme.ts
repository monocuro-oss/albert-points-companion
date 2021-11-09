import { createGlobalStyle } from 'styled-components';

export const styledComponentTheme = {
  colors: {
    background: '#2B2F34',
    backgroundLight: '#474C53',
    primaryAccent: '#77AE54',
    primaryAccentDark: '#62844C',
    text: '#FFFFFF',
  },
  layout: {
    headerHeight: '6rem',
    sectionNavWidth: '15rem',
    contentMaxWidth: '1200px',
  },
};

export const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
}

html {
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
}

a {
  color: ${(props) => props.theme.colors.text};
}

code {
  background-color: ${(props) => props.theme.colors.backgroundLight};
}
`;
