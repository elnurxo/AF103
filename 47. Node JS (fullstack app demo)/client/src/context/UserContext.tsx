import React, { createContext, Dispatch, FC, SetStateAction, useContext, useState } from "react";


type ArtistContextType = [User, Dispatch<SetStateAction<User>>]

const ArtistContext = createContext<ArtistContextType | undefined>(undefined);

type ArtistContextProviderProps = {
    children: React.ReactNode
}

export const ArtistContextProvider: FC<ArtistContextProviderProps> = ({children}) =>{
    const[artists, setArtists] = useState<User>({});

    return (
        <ArtistContext.Provider value={[user, serUser]}>
            {children}
        </ArtistContext.Provider>
    )
}

export const useArtistContext = (): ArtistContextType =>{
    const context = useContext(ArtistContext);

    if (!context) {
        throw new Error('failed!');
    }

    return context;
}