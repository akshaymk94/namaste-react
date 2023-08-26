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

const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

const AppLayout = () => {

    const onlineStatus = useOnlineStatus()


    return (
        <>
            <Header />
            {
                onlineStatus ?
                    <Outlet /> :
                    <h1>Oops! Looks like you're offline!</h1>
            }

        </>
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