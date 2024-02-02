import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useVForm } from '../../shared/forms';
import { useNavigate, useParams } from 'react-router-dom';
import { PessoasService } from '../../shared/services/api/pessoas/PessoasService';
import { Email } from '@mui/icons-material';

interface IFormData {
    email: string;
    cidadeId: number;
    nomeCompleto: string;
}

const formValidationSchema: yup.Schema<IFormData> = yup.object().shape({
    email: yup.string().required().email(),
    cidadeId: yup.number().required() , 
    nomeCompleto: yup.string().required().min(3) ,
});

export const DetalheDePessoas: React.FC = () => {
    const {formRef, save, saveAndClose, isSaveAndClose} = useVForm();
    const {id = 'nova'} = useParams<'id'>();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [nome, setNome] = useState('');

    useEffect(() => {
        if (id !== 'nova') {
            setIsLoading(true);

            PessoasService.getById(Number(id))
                .then((result) => {
                    setIsLoading(false);

                    if (result instanceof Error) {
                        alert(result.message);
                        navigate('/pessoas');
                    } else {
                        setNome(result.nomeCompleto);
                        formRef.current?.setData(result);
                    }
                });
        } else {
            formRef.current?.setData({
                email: '',
                nomeCompleto: '',
                cidadeId: undefined,
            });
        }
    }, [id]);

    const handleSave = (dados: IFormData) => {
        formValidationSchema.validate(dados, {abortEarly: false})
            .then((dadosValidados) => {
                setIsLoading(true);

                if (id === 'nova') {
                    PessoasService
                        .create(dadosValidados)
                        .then((result) => {
                            setIsLoading(false);

                            if (result instanceof Error) {
                                alert(result.message);
                            } else {
                                if (isSaveAndClose()) {
                                    navigate('/pessoas');
                                } else {
                                    navigate(`/pessoas/detalhe/${result}`);
                                }
                            }
                        });
                } else {
                    
                }
            })
            .catch((erros: yup.ValidationError) => {

            });
    };
    return(
        <></>
    );
};