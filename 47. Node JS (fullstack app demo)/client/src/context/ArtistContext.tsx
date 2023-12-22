import React, { createContext, Dispatch, FC, SetStateAction, useContext, useState } from "react";

type Artists = Artist[];

type ArtistContextType = [Artists, Dispatch<SetStateAction<Artists>>]

const ArtistContext = createContext<ArtistContextType | undefined>(undefined);

type ArtistContextProviderProps = {
    children: React.ReactNode
}

export const ArtistContextProvider: FC<ArtistContextProviderProps> = ({children}) =>{
    const[artists, setArtists] = useState<Artists>([]);

    return (
        <ArtistContext.Provider value={[artists, setArtists]}>
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