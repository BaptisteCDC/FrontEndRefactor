import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import ContactUs from '../pages/contact-us/contact-us';
import { Gallery } from '../pages';

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
                index: true,
                element: <Navigate to="/gallery" replace />
            }
        ]
    }
]);

export default router;