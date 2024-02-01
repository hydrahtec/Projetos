import { useEffect, useMemo, useState } from 'react';
import { Icon, IconButton, LinearProgress, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { IListagemCidade, CidadesService } from '../../shared/services/api/cidades/CidadesService';
import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { Environment } from '../../shared/environment';
import { useDebounce } from '../../shared/hooks';

export const ListagemDeCidades: React.FC= () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const {debounce} = useDebounce();
    const navigate = useNavigate();

    const [rows, setRows] = useState<IListagemCidade[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [totalCount, setTotalCount] = useState(0);

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    }, [searchParams]);

    const pagina = useMemo(() => {
        return Number(searchParams.get('pagina') || '1');
    }, [searchParams]);

    useEffect(() => {
        setIsLoading(true);

        debounce(() => {
            CidadesService.getAll(pagina, busca)
            .then((result) => {
                setIsLoading(false);

                if (result instanceof Error) {
                    alert(result.message)
                } else {
                    console.log(result);

                    setTotalCount(result.totalCount);
                    setRows(result.data);
                }
            });
        });
    }, [busca, pagina]);

    const handleDelete = (id: number) => {
        if (confirm('Realmente deseja apagar?')) {
            CidadesService.deleteById(id)
            .then(result => {
                if (result instanceof Error) {
                    alert(result.message);
                } else {
                    setRows(oldRows => [
                        ...oldRows.filter(oldRow => oldRow.id !== id),
                    ]);
                    alert('Registro apagado com sucesso');
                }
            });
        }
    };

    return(
        
    );
};