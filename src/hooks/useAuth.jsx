import React, { createContext, useContext, useEffect, useState } from 'react';
import http from '../services/api';
import { useNavigate } from 'react-router-dom';

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to consume the AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap your application and provide authentication context
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Initial authentication state

    const csrf = () => http.get('/sanctum/csrf-cookie');

    // Function to check if the user is logged in
    const loginCheck = async () => {
        await csrf();
        try {
            await http.get('/api/user')
                .then(response => {
                    if (response.status === 200) {
                        setIsLoggedIn(true);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }

    };
    const login = async (email, password) => {
        await csrf();
        try {
            await http.post('/login', {
                email,
                password
            }).then(response => {
                if (response.status === 204) {
                    setIsLoggedIn(true);
                    console.log('logged in');


                }
            });

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loginCheck();
    }, []);
    // Function to log out the user
    const logout = () => {
        try {
            http.post('/logout').then(response => {
                if (response.status === 204) {
                    setIsLoggedIn(false);
                    window.location.pathname = '/login';
                }
            });


        }
        catch (error) {
            console.log(error);
        }

    };

    // Value object to be provided by the AuthContext
    const value = {
        isLoggedIn,
        loginCheck,
        logout,
        login
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
