import ArtistDetail from "../pages/ArtistDetail";
import Artists from "../pages/Artists";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MainRoot from "../pages/MainRoot";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import SongDetail from "../pages/SongDetail";

export const ROUTES = [
    {
        path: '/',
        element: <MainRoot/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'artists',
                element: <Artists/>,
            },
            {
                path: 'artists/:id',
                element: <ArtistDetail/>
            },
            {
                path: 'songs/:id',
                element: <SongDetail/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'profile',
                element: <Profile/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
]