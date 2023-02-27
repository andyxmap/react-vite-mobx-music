import { SnackbarProvider } from 'notistack';
import React, { Suspense } from 'react';;
import { createBrowserRouter,
  RouterProvider, } from 'react-router-dom';
import { observer } from "mobx-react-lite";
import { routeBasedFile } from '@/routes';
import { AppContainer } from '@/styled-components';
import { SnackbarUtilsConfigurator } from './utilities';
import 'mapbox-gl/dist/mapbox-gl.css';

const routes = await routeBasedFile()
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
        <AppContainer className="App">
          
          <SnackbarProvider>
            <SnackbarUtilsConfigurator />
              <RouterProvider router={router}></RouterProvider>
          </SnackbarProvider>
        </AppContainer>
        </Suspense>
    </React.StrictMode>
  );
}

export default observer(App);
