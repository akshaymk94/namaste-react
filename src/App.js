import React, { Suspense, lazy, } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import useOnlineStatus from './utils/custom_hooks/useOnlineStatus';
import UserContext from './components/contexts/UserContext';
import { Provider } from 'react-redux';
import appStore from './store/appStore';

// Lazy load the following pages to boost performance of the app
const About = lazy(() => import('./components/About'));

const Contact = lazy(() => import('./components/Contact'));

const Cart = lazy(() => import('./components/Cart'))

const AppLayout = () => {

    const onlineStatus = useOnlineStatus()

    const data = {
        firstname: "Akshay",
        lastname: "Mohan",
        username: "amohan",
        userId: "USER20230906121200"
    }


    return (

        <Provider store={appStore}>
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
        </Provider>
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
            },
            {
                path: '/cart',
                element: <Suspense><Cart /></Suspense>
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={router} />);