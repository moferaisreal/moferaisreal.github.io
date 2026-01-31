import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1rem;
  }
`;
