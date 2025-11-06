import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import { AboutUs, ContactUs } from '../pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'gallery',
                async lazy() {
                    let { Gallery } = await import('../pages');
                    return { Component: Gallery }
                }
            },
            {
                path: 'contact-us',
                element: <ContactUs />
            },
            {
                path: 'about-us',
                element: <AboutUs />
            },
            {
                index: true,
                element: <Navigate to="/gallery" replace />
            }
        ]
    }
]);

export default router;