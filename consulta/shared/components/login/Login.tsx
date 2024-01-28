import {useState} from 'react';

import { Box, Button, Card, CardActions, CardContent, CircularProgress, TextField, Typography } from '@mui/material';

import * as yup from 'yup';

import {useAuthContext} from '../../contexts';

const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(5),
});

interface ILoginProps {
    children: React.ReactNode;
}
export const Login:React.FC<ILoginProps> = ({children}) => {
    const {isAuthenticated, login} = useAuthContext();

    const [isLoading, setIsLoading] = useState(false);
    
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        setIsLoading(true);

        loginSchema.
        validate({email, password}, {abortEarly: false}).
        then(dadosValidados => {
            login(dadosValidados.email, dadosValidados.password).
            then(() => {
                setIsLoading(false);
            });
        }).
        catch((errors: yup.ValidationError) => {
            setIsLoading(false);

            errors.inner.forEach(error => {
                if () {

                } else if () {

                }
            });
        });
    };
    
    return (

    );
};