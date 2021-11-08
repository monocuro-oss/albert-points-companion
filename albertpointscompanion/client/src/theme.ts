import { createGlobalStyle } from 'styled-components';

export const styledComponentTheme = {
  colors: {
    background: '#2B2F34',
    primaryAccent: '#77AE54',
    primaryAccentDark: '#62844C',
    text: '#FFFFFF',
  },
};

export const GlobalStyle = createGlobalStyle`
html, body {
  padding: 0;
  margin: 0;
}

html {
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
}
`;
