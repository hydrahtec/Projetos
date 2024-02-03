import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import { AuthService } from '../services/api/auth/AuthService';

interface IAuthContextData {
    logout: () => void;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<string | void>;
};

const AuthContext = createContext({} as IAuthContextData);

const LOCAL_STORAGE_KEY_ACESS_TOKEN = 'APP_ACCESS_TOKEN';

interface IAuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<IAuthProviderProps> = ({children}) => {
    const [accessToken, setAccessToken] = useState<string>()

    useEffect(() => {
        const acessToken = localStorage.getItem(LOCAL_STORAGE_KEY_ACESS_TOKEN);

        if (acessToken) {
            setAccessToken(JSON.parse(acessToken));
        } else {
            setAccessToken(undefined);
        }
    }, []);

    const handleLogin = useCallback(async (email: string, password: string) => {
        const result = await AuthService.auth(email, password);

        if (result instanceof Error) {
            return result.message;
        } else {
            localStorage.setItem(LOCAL_STORAGE_KEY_ACESS_TOKEN, JSON.stringify(result.accessToken));

            setAccessToken(result.accessToken);
        }
    }, []);

    const handleLogout = useCallback(() => {
        localStorage.removeItem(LOCAL_STORAGE_KEY_ACESS_TOKEN);
        setAccessToken(undefined);
    }, []);

    const isAuthenticated = useMemo(() => !!accessToken, [accessToken]);

    return (
        <AuthContext.Provider value={{isAuthenticated, login: handleLogin, logout: handleLogout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);