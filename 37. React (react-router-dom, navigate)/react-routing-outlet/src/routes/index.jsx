import About from "../pages/User/About";
import Home from "../pages/User/Home";
import UserRoot from "../pages/User/UserRoot";
import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard";
import Products from "../pages/Admin/Products";

export const ROUTES = [
    {
        path: '/',
        element: <UserRoot/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'about',
                element: <About/>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminRoot/>,
        children: [
            {
                path: '',
                element: <Dashboard/>
            },
            {
                path: 'products',
                element: <Products/>
            }
        ]
    }
]