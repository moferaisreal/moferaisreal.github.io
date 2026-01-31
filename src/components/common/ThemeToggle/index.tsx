import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi2';
import { useTheme } from '../../../hooks/useTheme';
import { ToggleButton } from './styles';

export const ThemeToggle: React.FC = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme} aria-label='Toggle theme'>
      {themeMode === 'dark' ? <HiSun /> : <HiMoon />}
    </ToggleButton>
  );
};
