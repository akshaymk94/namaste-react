import React, { Suspense, lazy, } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList';
// import About from './components/About';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import useOnlineStatus from './utils/custom_hooks/useOnlineStatus';
import UserContext from './components/contexts/UserContext';

const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

const AppLayout = () => {

    const onlineStatus = useOnlineStatus()

    const data = {
        firstname: "Akshay",
        lastname: "Mohan",
        username: "amohan",
        userId: "USER20230906121200"
    }


    return (

        <UserContext.Provider value={data}>
            <div className='bg-gray-50 min-h-screen'>
                <Header />
                {
                    onlineStatus ?
                        <Outlet /> :
                        <h1>Oops! Looks like you're offline!</h1>
                }
            </div>
        </UserContext.Provider>
    )
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <RestaurantList />,
            },
            {
                path: '/about',
                element: <Suspense fallback={<h1>Loading...</h1>}><About name={"Akshay"} /></Suspense>,
            },
            {
                path: '/contact',
                element: <Suspense><Contact /></Suspense>,
            },
            {
                path: '/restaurants/:id',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={router} />);