import React from 'react';
import * as HeroIcons from 'react-icons/hi2';
import {
  CardDate,
  CardDescription,
  CardHeader,
  CardIcon,
  CardTitle,
  CardWrapper,
} from './styles';

interface CardProps {
  title: string;
  description: string;
  date: string;
  icon: string;
  url: string;
}

type HeroIconsType = typeof HeroIcons;
type IconKey = keyof HeroIconsType;

const isValidIconKey = (key: string): key is IconKey => {
  return key in HeroIcons;
};

export const Card: React.FC<CardProps> = ({
  title,
  description,
  date,
  icon,
  url,
}) => {
  const IconComponent = isValidIconKey(icon)
    ? HeroIcons[icon]
    : HeroIcons.HiCodeBracket;

  return (
    <CardWrapper href={url} target='_blank' rel='noopener noreferrer'>
      <CardHeader>
        <CardIcon>
          <IconComponent />
        </CardIcon>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardDescription>{description}</CardDescription>
      <CardDate>Concluído em: {date}</CardDate>
    </CardWrapper>
  );
};
