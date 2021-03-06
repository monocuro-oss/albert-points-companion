import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundLight: string;
      primaryAccent: string;
      primaryAccentDark: string;
      text: string;
      textHover: string;
      scrollbar: string;
      textbox: string;
    };
    layout: {
      headerHeight: string;
      sectionNavWidth: string;
      contentMaxWidth: string;
    };
    font: {
      baseFamily: string;
      headerFamily: string;
    };
  }
}
