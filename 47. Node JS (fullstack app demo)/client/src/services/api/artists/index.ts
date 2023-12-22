import axios, { AxiosResponse } from "axios";
import BASE_URL from "../baseURL";


export const getAllArtists = async(name?: string):Promise<Artist[]>=>{
    let artists: Artist[] = [];
    if (name) {
        await axios.get(`${BASE_URL}/artists?name=${name}`)
        .then((res: AxiosResponse )=>{
            artists = res.data;
        } )
    }
    else{
        await axios.get(`${BASE_URL}/artists`)
        .then((res: AxiosResponse )=>{
            artists = res.data;
        } )
    }

    return artists;
}

export const getArtistByID = async(id: number | string):Promise<Artist | undefined>=>{
    let artist: Artist | undefined = undefined;
    await axios.get(`${BASE_URL}/artists/${id}`)
    .then((res: AxiosResponse )=>{
        artist = res.data;
    } )

    if (artist) {
        return artist;
    }
    else{
        return undefined;
    }
}