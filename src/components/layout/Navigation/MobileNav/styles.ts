import styled, { css } from 'styled-components';
import { slideDown } from '../../../../styles/animations';

export const MobileNavWrapper = styled.div`
  position: relative;
  margin-top: 2rem;
`;

export const HamburgerButton = styled.button<{ $isOpen: boolean }>`
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin: 0 auto;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 12px;

  span {
    width: 25px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.text.primary};
    transition: all ${({ theme }) => theme.transitions.normal};
    transform-origin: center;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      span:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
      }
    `}
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.background.card};
  border: 2px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 1rem;
  padding: 1rem;
  margin-top: 0.5rem;
  min-width: 200px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  animation: ${slideDown} ${({ theme }) => theme.transitions.normal};
`;

export const MobileMenuButton = styled.button<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  margin: 0.25rem 0;
  background: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.accent.primary : 'transparent'};
  border: none;
  color: ${({ theme, $isActive }) =>
    $isActive ? 'white' : theme.colors.text.primary};
  text-align: left;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.body};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  &:hover {
    background-color: ${({ theme, $isActive }) =>
      $isActive ? theme.colors.accent.hover : theme.colors.background.tertiary};
  }
`;
