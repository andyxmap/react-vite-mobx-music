import { SnackbarProvider } from 'notistack';
import React, { Suspense } from 'react';;
import { createBrowserRouter,
  RouterProvider, } from 'react-router-dom';
import './App.scss';
import { routeBasedFile } from '@/routes';
import { AppContainer } from './styled-components';
import { SnackbarUtilsConfigurator } from './utilities';
import { StoreContext } from './context/store';
import { JokeStore } from './mobx/joke';

const routes = await routeBasedFile()
const router = createBrowserRouter(routes.map(({path,Element,...rest})=>{
  return { 
    path: path,
    element: <Element></Element>,
    ...rest
  }
}))

const store = new JokeStore()

function App() {
  return (
    <React.StrictMode>
      <Suspense>
        <AppContainer className="App">
          <StoreContext.Provider value={store}>
          <SnackbarProvider>
            <SnackbarUtilsConfigurator />
              <RouterProvider router={router}></RouterProvider>
          </SnackbarProvider>
          </StoreContext.Provider>
        </AppContainer>
        </Suspense>
    </React.StrictMode>
  );
}

export default App;
