import React from 'react';
import * as HeroIcons from 'react-icons/hi2';
import { categories } from '../../../../data/categories';
import { Button } from '../../../common/Button';
import { NavWrapper } from './styles';

interface DesktopNavProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

type HeroIconsType = typeof HeroIcons;
type IconKey = keyof HeroIconsType;

const isValidIconKey = (key: string): key is IconKey => {
  return key in HeroIcons;
};

export const DesktopNav: React.FC<DesktopNavProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <NavWrapper>
      {categories.map((category) => {
        const IconComponent = isValidIconKey(category.icon)
          ? HeroIcons[category.icon]
          : HeroIcons.HiCodeBracket;

        return (
          <Button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            isActive={activeCategory === category.id}
            variant='ghost'
          >
            <IconComponent />
            {category.label}
          </Button>
        );
      })}
    </NavWrapper>
  );
};
