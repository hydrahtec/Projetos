import { useEffect, useState } from 'react';
import { Box, Grid, LinearProgress, Paper, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';

import { CidadesService } from '../../shared/services/api/cidades/CidadesService';
import { VTextField, VForm, useVForm, IVFormsErros } from '../../shared/forms';
import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';

interface IFormData {
    nome: string;
};

const formValidationSchema: yup.Schema<IFormData> = yup.object().shape({nome: yup.string().required().min(3)});

export const DetalheDeCidades: React.FC = () => {
    const {formRef, save, saveAndClose, isSaveAndClose} = useVForm();
    const {id = 'nova'} = useParams<'id'>();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [nome, setnome] = useState('');

    useEffect(() => {
        if (id !== 'nova') {
            setIsLoading(true);

            CidadesService.getById(Number(id))
            .then((result) => {
                setIsLoading(false);

                if (result instanceof Error) {
                    alert(result.message);
                    navigate('/cidades');
                } else {
                    setnome(result.name);
                    formRef.current?.setData(result)
                }
            });
        } else {
            formRef.current?.setData({
                nome: '',
            });
        }
    }, [id]);

    const handleSave = (dados: IFormData) => {
      formValidationSchema
      .validate(dados, {abortEarly: false})
      .then((dadosValidados) => {
        setIsLoading(true);

        if (id === 'nova') {
            CidadesService.create(dadosValidados)
            .then((result) => {
                setIsLoading(false);

                if (result instanceof Error) {
                    alert()
                } else {
                    if () {

                    } else {

                    }
                }
            });
        } else {

        }
      })
      .catch(() => {});  
    };


    return ();
};