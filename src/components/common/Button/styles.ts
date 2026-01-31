import styled, { css } from 'styled-components';
import { ButtonProps } from './types';

export const StyledButton = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 500;
  border-radius: 9999px;
  transition: all ${({ theme }) => theme.transitions.normal};
  cursor: pointer;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  /* Sizes */
  ${({ size = 'medium' }) => {
    switch (size) {
      case 'small':
        return css`
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        `;
      case 'large':
        return css`
          padding: 1rem 2rem;
          font-size: 1.125rem;
        `;
      default:
        return css`
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        `;
    }
  }}

  /* Variants */
  ${({ variant = 'primary', theme, isActive }) => {
    switch (variant) {
      case 'secondary':
        return css`
          background-color: transparent;
          color: ${theme.colors.text.secondary};
          border: 2px solid ${theme.colors.border.default};

          &:hover {
            border-color: ${theme.colors.border.hover};
            color: ${theme.colors.text.primary};
          }
        `;
      case 'ghost':
        return css`
          background-color: transparent;
          color: ${isActive
            ? theme.colors.accent.primary
            : theme.colors.text.secondary};

          &:hover {
            background-color: ${theme.colors.background.tertiary};
            color: ${theme.colors.text.primary};
          }

          ${isActive &&
          css`
            background-color: ${theme.colors.accent.primary};
            color: white;
          `}
        `;
      default:
        return css`
          background-color: ${isActive
            ? theme.colors.accent.primary
            : 'transparent'};
          color: ${isActive ? 'white' : theme.colors.text.primary};

          &:hover {
            background-color: ${theme.colors.accent.hover};
            color: white;
          }

          ${isActive &&
          css`
            background-color: ${theme.colors.accent.primary};
          `}
        `;
    }
  }}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
