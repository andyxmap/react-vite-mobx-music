import { routeBasedFile } from '@/routes';
import 'mapbox-gl/dist/mapbox-gl.css';
import { observer } from "mobx-react-lite";
import { SnackbarProvider } from 'notistack';
import React, { Suspense } from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { SnackbarUtilsConfigurator } from './utilities';


const routes = routeBasedFile()
const router = createBrowserRouter(routes.map(({path,Element,...rest})=>{
  return { 
    path: path,
    element: <Element></Element>,
    ...rest
  }
}))

function App() {
  return (
    <React.StrictMode>
      <Suspense>
          <SnackbarProvider>
            <SnackbarUtilsConfigurator />
              <RouterProvider router={router}></RouterProvider>
          </SnackbarProvider>
        </Suspense>
    </React.StrictMode>
  );
}

export default observer(App);
