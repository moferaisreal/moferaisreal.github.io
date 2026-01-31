import styled from 'styled-components';

export const CardWrapper = styled.a`
  display: block;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background.card};
  border-radius: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.border.default};
  transition: all ${({ theme }) => theme.transitions.normal};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.hover};
    background-color: ${({ theme }) => theme.colors.background.cardHover};
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const CardIcon = styled.div`
  svg {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.colors.accent.primary};
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.muted};
  margin-bottom: 1rem;
  line-height: 1.6;
`;

export const CardDate = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.875rem;
`;
