import React, { useEffect, useRef, useState } from 'react';
import * as HeroIcons from 'react-icons/hi2';
import { categories } from '../../../../data/categories';
import {
  HamburgerButton,
  MobileMenu,
  MobileMenuButton,
  MobileNavWrapper,
} from './styles';

interface MobileNavProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

type HeroIconsType = typeof HeroIcons;
type IconKey = keyof HeroIconsType;

const isValidIconKey = (key: string): key is IconKey => {
  return key in HeroIcons;
};

export const MobileNav: React.FC<MobileNavProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    onCategoryChange(categoryId);
    setIsOpen(false);
  };

  return (
    <MobileNavWrapper>
      <HamburgerButton
        ref={buttonRef}
        $isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Toggle menu'
      >
        <span />
        <span />
        <span />
      </HamburgerButton>

      <MobileMenu ref={menuRef} $isOpen={isOpen}>
        {categories.map((category) => {
          const IconComponent = isValidIconKey(category.icon)
            ? HeroIcons[category.icon]
            : HeroIcons.HiCodeBracket;

          return (
            <MobileMenuButton
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              $isActive={activeCategory === category.id}
            >
              <IconComponent />
              {category.label}
            </MobileMenuButton>
          );
        })}
      </MobileMenu>
    </MobileNavWrapper>
  );
};
