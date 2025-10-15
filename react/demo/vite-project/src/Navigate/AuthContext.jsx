import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [readMoreClicked, setReadMoreClicked] = useState(false);
    
    const login = () => setLoggedIn(true);
    const activateReadMore = () => setReadMoreClicked(true);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, readMoreClicked, activateReadMore }}>
            {children}
        </AuthContext.Provider>
    );
}
