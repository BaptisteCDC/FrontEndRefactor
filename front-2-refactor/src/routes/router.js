import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import ContactUs from '../pages/contact-us/contact-us';
import { Gallery } from '../pages';
import { AboutUs } from '../pages/about-us/about-us';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'gallery',
                element: <Gallery />
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