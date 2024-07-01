import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './routes/Routes';
import AuthProvider from './component/Authprovider/AuthProvider';

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>

    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
