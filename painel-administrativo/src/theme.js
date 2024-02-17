import {createContext, useState, useMemo} from 'react';
import {createTheme} from '@mui/material/styles';

// color design tokens export
export const tokens = (mode) => ({});

// mui theme settings
export const themeSettings = (mode) => {};

// context for color mode
export const ColorModeContext = createContext({});

export const useMode = () => {
    const [mode, setMode] = useState('dark');

    const colorMode = useMemo(() => ({
        toggleColorMode: () =>
            setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }), []);

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
};