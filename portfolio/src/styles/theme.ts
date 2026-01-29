import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    background: {
      primary: '#0F172A',
      secondary: '#1E293B',
      tertiary: '#334155',
      card: '#1E293B',
      cardHover: '#334155',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#CBD5E1',
      muted: '#94A3B8',
    },
    accent: {
      primary: '#3B82F6',
      secondary: '#8B5CF6',
      tertiary: '#06B6D4',
      hover: '#2563EB',
    },
    border: {
      default: '#334155',
      hover: '#3B82F6',
      focus: '#8B5CF6',
    },
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#06B6D4',
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
      primary: '#F8FAFC',
      secondary: '#F1F5F9',
      tertiary: '#E2E8F0',
      card: '#FFFFFF',
      cardHover: '#F8FAFC',
    },
    text: {
      primary: '#0F172A',
      secondary: '#475569',
      muted: '#64748B',
    },
    accent: {
      primary: '#2563EB',
      secondary: '#7C3AED',
      tertiary: '#0891B2',
      hover: '#1D4ED8',
    },
    border: {
      default: '#E2E8F0',
      hover: '#2563EB',
      focus: '#7C3AED',
    },
    success: '#059669',
    warning: '#D97706',
    error: '#DC2626',
    info: '#0891B2',
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
