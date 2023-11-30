# Aplicación de Reportede Ventas para Gerencia - DFE Proyecto Parcial 3

El proyecto tiene como objetivo aplicar los conocimientos adquiridos en elcurso de Typescript y Angular,desarrollandouna Aplicación de Reporte de Ventas destinada a la gerencia de la empresa ficticia Play&Stars.

La aplicación consiste en un sitio web que cuenta con 2 páginas. La página principal que funge como dashboard, mostrando de forma resumida los datos sobre ventas de la empresa. A su vez, hay una segunda página consta de 3 componentes: una sección de filtros para el listado de ventas, un mensaje resumiendo los resultados de la búsqueda, y una tabla que muestra las películas que la empresa ha proyectado junto con sus estadísticas de ventas.

## Requisitos del Sistema

Antes de comenzar, asegúrate de que tengas instalados los siguientes requisitos en tu sistema:

- **Node.js**: Versión 12 o superior. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
- **npm**: Versión 6 o superior. npm generalmente se instala junto con Node.js.

## Instalación del proyecto

Una vez que tengas Node.js y npm instalados, sigue estos pasos para instalar el proyecto en tu entorno de desarrollo local:

1. Clona este repositorio en tu máquina local utilizando el siguiente comando:

```bash
git clone https://github.com/rssv384/DFE-Proyecto-Parcial-3.git
```

2. Instala Angular CLI version 16 de manera global:

```bash
npm install -g @angular/cli@16
```

3. Navega al directorio del proyecto:

```bash
cd desarrollo-frontend-avance-obra
```

4. Instala las dependencias del proyecto utilizando npm (Node Package Manager):

```bash
npm install
```

## Ejecutar el ambiente de desarrollo

Para ejecutar el ambiente de desarrollo en tu navegador, ejecuta el siguiente comando (`http://localhost:4200/`):

```bash
ng serve -o
```

La aplicación se recargará automáticamente si cambia alguno de los archivos fuente.

## Build

Ejecuta `ng build` para compilar el proyecto. Los archivos generados en la compilación se almacenarán en el directorio `dist/`.

## Más ayuda

Para obtener más ayuda sobre Angular CLI, utiliza `ng help` o consulte el sitio [Angular CLI Overview and Command Reference](https://angular.io/cli).

## Estructura del proyecto

Estructura general del proyecto:

```bash

src/                          # Carpeta principal del proyecto.
├── app/
│   ├── pages/                # Carpeta con los modulos de cada pagina y sus componentes.
│   │   ├── dashboard/                  # Módulo dashboard
│   │   │   ├── dashboard.module.ts
│   │   │   ├── homepage/               # Componente Homepage (Padre del resto de componentes)
│   │   │   ├── banner/                 # Componente para el banner
│   │   │   └── dashboard-data/         # Componente para mostrar datos generales sobre la empresa
│   │   │
│   │   ├── error-pages/                # Módulo para las páginas de error
│   │   │   ├── error-pages.module.ts
│   │   │   └── not-found/              # Componente NotFound
│   │   │
│   │   └── sales/                      # Módulo para la página del reporte de ventas
│   │       ├── sales.module.ts
│   │       ├── explorer/               # Componente Explorer (Padre del resto de componentes)
│   │       ├── filter/                 # Componente para la sección del formulario de filtros para ventas
│   │       ├── search-summary/         # Componente que muestra un mensaje sobre el resultado de la búsqueda
│   │       └── sales-view/             # Componente para mostrar la lista de ventas en una tabla
│   │
│   ├── services/             # Carpeta con los servicios de datos.
│   │   └── sales.service.ts    # Consumo de API
│   │
│   │
│   ├── models/               # Carpeta con los modelos, interfaces y datos estaticos.
│   │   ├── sale.model.ts       # Interface para definir una venta como objeto
│   │   └── search-params.model.ts  # Interface para definir un mapa con los filtros de búsqueda
│   │
│   │
│   ├── app-routing.module.ts # Módulo de configuración del routing de la app.
│   ├── app.module.ts         # Módulo principal.
│   ├── ...
│
│
├── assets/     # Recursos multimedia
│   └── img/
│
├── styles/
│
├── ...

```

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
