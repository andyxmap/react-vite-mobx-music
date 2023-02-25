# DataRd-Salud-Frontend reportes

El repo contiene una Single Page Application que permite visualizar diferentes reportes provenientes de diferentes fuentes de datos y de aplicaciones que permiten ser envevidas en otras. El sitio cuenta con una landing page, una seccion de autenticación y registro, ademas de un dashboard que permite administrar que reportes se desean ver.

## Stack Tecnológico

 - Web frontend framework & components : Reactjs/Typescript (https://www.typescriptlang.org/docs/handbook/react.html)
 - Componentes de interfaz de usuario Material UI (https://mui.com/)
 - Bundling : Vitejs (https://vitejs.dev/)
 - Manejador de estado: Redux Toolkit (https://redux-toolkit.js.org/)
 - Manejador de peticiones: Axios (https://axios-http.com/)
 - Validador de formularios https://react-hook-form.com/
 - Validador de modelos: Yup https://github.com/jquense/yup 


## Instalación

-Clonar el repo 

```
git clone https://github.com/intellisysdcorp/ayuntamiento-datahub-frontend/
```

-Instalar las dependencias.

```
	cd ayuntamiento-datahub-frontend
	pnpm install
	or
	npm install 
``` 

> Nota: Requiere instalar nodejs v16.13.0 o superior y pnpm como gestor de dependencias

-Ejecutar el servidor de desarrollo

```
	pnpm run dev
	or
	npm run dev
``` 

## Estructura de carpetas aplicando Clean Arquitecture

- api: Contiene las instancias del manejador de peticiones de la aplicacion
- components: Componentes generales de la aplicación los cuales serán usados en las vistas(pages)
- hooks: hooks personalizados que permiten acceder a la Store de la aplicacion, utilizar validadores de esquema, controlar el progreso de las peticiones. Son reutilizables 
- models: Contiene los modelos que intervienen en la 
lógica del negocio, entre otros modelos utiles para la aplicación
- im: contiene los assets de la aplicación
- pages: Vistas generales por el enrutador. Se utiliza React-Router para esta tarea
- redux: Store general de la app, contiene los slices, reducer y actions del estado de la aplicación
- services: Capa de servicios para comunicarse con API externa
- styled-components: Componentes de presentación basados en Styled Components 
- utilities:  Utilitarios generales 


