import axios, { AxiosResponse } from "axios";
import BASE_URL from "../baseURL";
import Cookies from 'js-cookie';


export const getAllArtists = async(name?: string):Promise<Artist[]>=>{
    let artists: Artist[] = [];
    const token = await Cookies.get('token');
    if (name) {
        await axios.get(`${BASE_URL}/artists?name=${name}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res: AxiosResponse )=>{
            artists = res.data;
        } )
    }
    else{
        await axios.get(`${BASE_URL}/artists`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res: AxiosResponse )=>{
            artists = res.data;
        } )
    }

    return artists;
}

export const getArtistByID = async(id: number | string):Promise<Artist | undefined>=>{
    let artist: Artist | undefined = undefined;
    const token = await Cookies.get('token');
    await axios.get(`${BASE_URL}/artists/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
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

type ArtistRegisterType = Artist & {message: string};

export const registerArtist = async(newArtist: Artist): Promise<ArtistRegisterType | undefined>=>{
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

export const loginArtist = async(currentArtist: {email: string, password: string}): Promise<{status: number,message: string, token?: string} | undefined>=>{
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
