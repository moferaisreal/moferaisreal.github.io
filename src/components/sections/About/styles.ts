import styled from 'styled-components';

export const AboutWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.card};
  border-radius: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.border.default};
  padding: 2rem;
`;

export const AboutHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
    text-align: left;
  }
`;

export const ProfileImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.accent.primary};
  object-fit: cover;
  margin-bottom: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

export const ProfileInfo = styled.div`
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    text-align: left;
  }
`;

export const Name = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Role = styled.h2`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.accent.primary};
  margin-bottom: 1rem;
`;

export const Bio = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

export const Divider = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.border.default};
  padding-top: 1.5rem;
  margin-top: 2rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent.primary};
  margin-bottom: 1rem;
`;

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  list-style: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: flex-start;
  }
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.accent.primary};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    color: ${({ theme }) => theme.colors.accent.hover};
    transform: scale(1.1);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
