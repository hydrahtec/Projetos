import axios from 'axios';

import {ResponseInterceptor, ErrorInterceptor} from './interceptors';
import {Environment} from '../../../environment';

const Api = axios.create({
    baseURL: Environment.URL_BASE
});

Api.interceptors.response.use(
    (response) => ResponseInterceptor(response),
    (error) => ErrorInterceptor(error)
);

export {Api};