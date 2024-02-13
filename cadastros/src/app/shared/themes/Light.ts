import { createTheme } from '@mui/material';
import { cyan, orange } from '@mui/material/colors';

export const LightTheme = createTheme({
    palette: {
        primary: {//cor aplicada a botoes e lugares com mais destaque. main, dark,light, constast são variações.
            main: orange[700],
            dark: orange[800],
            light: orange[500],
            contrastText: '#ffffff',
        },
        secondary: { //aplicada  a autocomplete
            main: cyan[700],
            dark: cyan[800],
            light: cyan[500],
            contrastText: '#ffffff',
        },
        background: {
            paper: '#ffffff', // usado no fundo dos cards
            default: '#f7f6f3' // usado no fundo da pagina
        }
    }
});