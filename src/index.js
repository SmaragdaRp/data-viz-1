import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import PageLayout from "./PageLayout/page-layout.component";
import Home from "./Home/home.component";
import Analytics from "./Analytics/analytics.component";
import Credits from "./Credit/credit.components";
import Reflections from "./Reflections/reflections.component";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <BrowserRouter>
//         <React.StrictMode>
//             {/*<NavbarComponent/>*/}
//             <App />
//         </React.StrictMode>
//     </BrowserRouter>
//
// );


const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'analytics',
                element: <Analytics/>
            },
            {
                path: 'credits',
                element: <Credits/>
            },
            {
                path: 'paper',
                element: <Reflections/>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
