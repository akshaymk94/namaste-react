import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList';
import About from './components/About';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
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
                element: <About name={"Akshay"} />,
            },
            {
                path: '/contact',
                element: <Contact />,
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