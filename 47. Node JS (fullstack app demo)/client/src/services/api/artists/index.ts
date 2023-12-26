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

export const registerArtist = async(newArtist: Artist): Promise<Artist | undefined>=>{
    let postedArtist: Artist | undefined = undefined;
    await axios.post(`${BASE_URL}/artists/register`, newArtist).then((res: AxiosResponse)=>{
       postedArtist = res.data;
    });

    if (postedArtist) {
        return postedArtist;
    }
    else{
        return undefined;
    }
}

export const loginArtist = async(currentArtist: {email: string, password: string}): Promise<{status: number,message: string} | undefined>=>{
   let result = undefined;
    await axios.post(`${BASE_URL}/artists/login`, currentArtist)
    .then((res: AxiosResponse)=>{
        result = res.data;
    });
    if (result) {
        return result;
    }
    else{
        return undefined;
    }
}
