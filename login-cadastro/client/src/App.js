import {useState} from 'react';
import * as yup from 'yup';
import Axios from 'axios';
import {ErrorMessage, Formik, Form, Field} from 'formik';

import './App.css';

export const App = () => {
    const handleLogin = (values) => {
        Axios.post("http://localhost:3001/login", {
            email: values.email,
            password: values.password,
        })
        .then((response) => {
            alert(response.data.msg)
        });
    };

    const handleRegister = (values) => {
        Axios.post("http://localhost:3001/register", {
          email: values.email,
          password: values.password,
        }).then((response) => {
          alert(response.data.msg);
          console.log(response);
        });
    };
    
    const validationsLogin = yup.object().shape({
        email: yup
            .string()
            .email('email inválido')
            .required('O email é obrigatório'),
        password: yup
            .string()
            .min(8,'A senha deve ter pelo menos 8 caracteres')
            .required('A senha é obrigatória'),
    });
    
    const validationsRegister = yup.object().shape({
        email: yup
            .string()
            .email('email inválido')
            .required('O email é obrigatório'),
        password: yup
            .string()
            .min(8, 'A senha deve ter peli menos 8 caracteres')
            .required('A senha é obrigatória'),
        confirmation: yup
            .string()
            .oneOf([yup.ref('password'), null], 'As senhas são diferentes')
            .required('A confirmação da senha é obrigatória'),
    });
    
    


    return (
        <div>
        </div>
    );
};
