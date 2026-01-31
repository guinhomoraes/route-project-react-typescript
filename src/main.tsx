import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home.tsx';
import QuemSomos from './pages/QuemSomos.tsx';
import Cadastro from './pages/Cadastro.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/quem-somos",
    element: <QuemSomos/>
  },
  {
    path: "/registrar",
    element: <Cadastro/>
  },
  {
    path: "*",
    element: '<h2>Pagina não encontrada</h2>'
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
