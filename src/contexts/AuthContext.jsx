import { createContext, useEffect, useState } from "react";
import { parseJwt } from "../utils/parseJwt";
import { api } from "../services/api";

// Create the context
// @ts-ignore
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [authenticatedUser, setAuthenticatedUser] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("serracandy@token");

        if (token) {
            const userId = parseJwt(token).sub;

            const fetchUser = async () => {
                const response = await api.get(`/users/${userId}`);
                setAuthenticatedUser(response.data);
            };

            fetchUser();
        }
    }, []);

    return (
        <AuthContext.Provider
            value={
                // @ts-ignore
                {
                    authenticatedUser,
                    setAuthenticatedUser,
                }
            }
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };
