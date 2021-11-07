import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primaryAccent: string;
      primaryAccentDark: string;
      text: string;
    };
  }
}
