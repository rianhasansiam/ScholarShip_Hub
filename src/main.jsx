import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Contex from './Contex.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



const queryClient = new QueryClient()



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contex>


      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Root} />
      </QueryClientProvider>

    </Contex>
  </StrictMode>,
)
