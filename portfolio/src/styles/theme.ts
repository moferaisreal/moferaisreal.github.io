import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    background: {
      primary: '#1D2B53', // Deep synthwave night
      secondary: '#261F4B', // Darkened blue-purple
      tertiary: '#3A2A63', // Elevated surface
      card: '#261F4B',
      cardHover: '#3A2A63',
    },

    text: {
      primary: '#FFFDF5', // Soft neon white
      secondary: '#E3C9D9', // Muted neon lavender
      muted: '#B89CB4',
    },

    accent: {
      primary: '#FF004D', // 🔥 Neon pink (main CTA)
      secondary: '#7E2553', // Magenta accent
      tertiary: '#FAEF5D', // ⚡ Neon yellow highlight
      hover: '#FF336D',
    },

    border: {
      default: '#3A2A63',
      hover: '#FF004D',
      focus: '#FAEF5D',
    },

    success: '#4DFF88', // Neon green (derived)
    warning: '#FAEF5D', // Neon yellow
    error: '#FF004D', // Neon pink-red
    info: '#7E2553',
  },

  fonts: {
    heading: "'Oswald', sans-serif",
    body: "'Source Code Pro', monospace",
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px',
  },
  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },
};

export const lightTheme: DefaultTheme = {
  name: 'light',
  colors: {
    background: {
      primary: '#F5FBE6', // Vintage paper
      secondary: '#E7F0DA', // Soft aged cream
      tertiary: '#D6E5CF',
      card: '#FFFFFF',
      cardHover: '#E7F0DA',
    },

    text: {
      primary: '#233D4D', // Deep slate blue
      secondary: '#215E61', // Muted teal
      muted: '#6B8A8E',
    },

    accent: {
      primary: '#FE7F2D', // Burnt orange
      secondary: '#215E61', // Teal accent
      tertiary: '#233D4D', // Ink-like contrast
      hover: '#E36F24',
    },

    border: {
      default: '#C7D6C2',
      hover: '#FE7F2D',
      focus: '#215E61',
    },

    success: '#6BAF92', // Muted vintage green
    warning: '#FE7F2D', // Warm amber-orange
    error: '#C84B31', // Rust red
    info: '#215E61',
  },

  fonts: {
    heading: "'Oswald', sans-serif",
    body: "'Source Code Pro', monospace",
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px',
  },
  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },
};
