import { Theme } from '@mui/material';
import { createContext } from 'react';

export type ThemeString = 'light' | 'dark' | 'system' | '';
export type ThemeMode = 'light' | 'dark' | '';

interface ContextProps {
    theme: Theme;
    currentTheme: ThemeString;
    mode: ThemeMode;
    changeTheme: (theme: ThemeString) => void;
}

export const ThemeContext = createContext({} as ContextProps);