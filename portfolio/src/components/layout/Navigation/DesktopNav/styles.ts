import styled from 'styled-components';

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 9999px;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;
