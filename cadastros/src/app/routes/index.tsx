import {useEffect} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import {useAppThemeContext, useDrawerContext} from '../shared/contexts';
import {
    Dashboard,
    DetalheDePessoas,
    ListagemDePessoas,
    DetalheDeCidades,
    ListagemDeCidades,
} from '../pages';

export const AppRoutes = () => {
    const {setDrawerOptions} = useDrawerContext();

    const {toggleTheme} = useAppThemeContext();

    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                path: '/pagina-inicial',
                label: 'Página inicial',
            },
            {
                icon: 'location_city',
                path: '/cidades',
                label: 'Cidades',
            },
            {
                icon: 'people',
                path: '/pessoas',
                label: 'Pessoas',
            },
        ]);
    }, []);

    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard />} />

            <Route path="/pessoas" element={<ListagemDePessoas />} />
            <Route path="/pessoas/detalhe/:id" element={<DetalheDePessoas />} />

            <Route path="/cidades" element={<ListagemDeCidades />}/>
            <Route path="/cidades/detalhe/:id" element={<DetalheDeCidades />} />

            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
};