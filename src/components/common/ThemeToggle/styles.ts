import styled from 'styled-components';

export const ToggleButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background.card};
  border: 2px solid ${({ theme }) => theme.colors.border.default};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.primary};
    transform: rotate(180deg);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.accent.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 1rem;
    right: 1rem;
    width: 2.5rem;
    height: 2.5rem;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;
