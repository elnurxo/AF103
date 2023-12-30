import React, { createContext, Dispatch, FC, SetStateAction, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { getAllArtists } from "../api/artists";

//should add user type with union type in future
type AuthContextType = [Artist | undefined, Dispatch<SetStateAction<Artist | undefined>>]

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthContextProviderProps = {
    children: React.ReactNode
}

export const AuthContextProvider: FC<AuthContextProviderProps> = ({children}) =>{
    const[auth, setAuth] = useState<Artist | undefined>(undefined);

    //set default state for auth context
    useEffect(() => {
        const fetchAccount = async () => {
          const token = await Cookies.get('token');
          if (token) {
            try {
              const decoded = jwtDecode<JwtPayload>(token);
              console.log('decoded email: ', decoded.email);
              getAllArtists().then((res)=>{
                const loggedIn = res.find((x)=>x.email==decoded.email);
                console.log('context data: ', loggedIn);
                setAuth(loggedIn);
              })
            } catch (error) {
              console.error('Error decoding token:', error);
            }
          }
        };
    
        fetchAccount();
      }, []); 

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = (): AuthContextType =>{
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('failed!');
    }

    return context;
}