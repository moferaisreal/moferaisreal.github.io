import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'light' | 'dark';
    colors: {
      background: {
        primary: string;
        secondary: string;
        tertiary: string;
        card: string;
        cardHover: string;
      };
      text: {
        primary: string;
        secondary: string;
        muted: string;
      };
      accent: {
        primary: string;
        secondary: string;
        tertiary: string;
        hover: string;
      };
      border: {
        default: string;
        hover: string;
        focus: string;
      };
      success: string;
      warning: string;
      error: string;
      info: string;
    };
    fonts: {
      heading: string;
      body: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    transitions: {
      fast: string;
      normal: string;
      slow: string;
    };
  }
}
