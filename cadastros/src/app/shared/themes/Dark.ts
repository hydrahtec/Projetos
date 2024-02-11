import { createTheme } from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';

export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {//cor aplicada a botoes e lugares com mais destaque. main, dark,light, constast são variações.
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText: '#ffffff',
        },
        secondary: { //aplicada  a autocomplete
            main: cyan[700],
            dark: cyan[800],
            light: cyan[500],
            contrastText: '#ffffff',
        },
        background: {
            paper: '#303134',
            default: '#202124'
        }
    }
});