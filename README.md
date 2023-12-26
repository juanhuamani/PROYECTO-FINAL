<a name="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]

<br />
<div align="center">
  <a href="https://github.com/juanhuamani/PROYECTO-FINAL">
    <img src="src/public/img/imgshare-logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">PROYECTO FINAL ING. SOFTWARE II</h3>

  <p align="center">
    Nuestro proyecto es una aplicación web para compartir imágenes, comentarios y más.
    <br />
  </p>
</div>



# Variables de entorno

- `MONGODB_URI`, the mongodb database uri
- `PORT` the http server port. By default is `3000`



# Estructura de Proyecto

- **`src` - Código Fuente:**
  - `index.js` o `app.js`: Punto de entrada principal de la aplicación.
  - **Rutas (`routes`):** Carpeta que contiene archivos que definen las rutas y controladores de la aplicación.
  - **Controladores (`controllers`):** Carpeta que contiene lógica de controladores para manejar las solicitudes HTTP.
  - **Modelos (`models`):** Carpeta que puede contener definiciones de modelos si se utiliza una base de datos (por ejemplo, con Mongoose para MongoDB).
  - `database.js`: Archivo que configura y establece la conexión con la base de datos.

- **`public` - Recursos Estáticos:**
  - `img`: Carpeta que podría contener imágenes utilizadas en la aplicación.
  - `css`: Carpeta que podría contener archivos CSS para estilos.
  - `js`: Carpeta que podría contener archivos JavaScript para lógica del lado del cliente.

- **`config` - Configuraciones:**
  - `config.js` o archivos similares: Archivos que contiene configuraciones generales para la aplicación.

- **`views` - Vistas :**
  - Carpeta que contiene archivos de vistas usando un motor de plantillas como EJS o Handlebars.

- **`node_modules` - Dependencias de Node.js:**
  - Carpeta que contiene todas las dependencias instaladas mediante npm.

- **`docker-compose.yml` - Configuración de Docker Compose:**
  - Archivo que describe la configuración de los contenedores Docker utilizados para la aplicación y la base de datos.

- **`Dockerfile` - Configuración de Docker:**
  - Archivo que describe cómo se construirá la imagen del contenedor Docker para la aplicación.

- **`sonar-scanner.properties` - Configuración de SonarScanner:**
  - Archivo que puede contener configuraciones específicas para SonarScanner, que se utiliza para análisis estático del código.

# Instalación

## Instalación rápida

```
git clone https://github.com/juanhuamani/PROYECTO-FINAL
cd PROYECTO-FINAL
npm install
npm run dev
```

## Intalación con docker-compose (Recomendado)

```
docker-compose up
```

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/juanhuamani/PROYECTO-FINAL/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/juanhuamani/PROYECTO-FINAL/network/members


[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 