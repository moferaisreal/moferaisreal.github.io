import React from 'react';
import { useIsMobile } from '../../../hooks/useMediaQuery';
import { DesktopNav } from '../Navigation/DesktopNav';
import { MobileNav } from '../Navigation/MobileNav';
import { HeaderWrapper, Subtitle, Title } from './styles';

interface HeaderProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  const isMobile = useIsMobile();

  return (
    <HeaderWrapper>
      <Title>Marcelo Rocha</Title>
      <Subtitle>
        Minha coleção de projetos.
      </Subtitle>

      {isMobile ? (
        <MobileNav
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
        />
      ) : (
        <DesktopNav
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
        />
      )}
    </HeaderWrapper>
  );
};
