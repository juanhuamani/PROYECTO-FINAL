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
    Nuestro proyecto es una aplicación web para compartir imágenes, comentarios y más.  Esta aplicación proporciona una plataforma para que los usuarios carguen imágenes, dejen comentarios y participen en interacciones sociales en torno a esas imágenes.
    <br />
    <a href="https://www.canva.com/design/DAF4GPKP4x0/q1nQ4JNAXnmcMoyasE0D4Q/edit?utm_content=DAF4GPKP4x0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><strong>Diapositivas»    </strong></a>
    <a href="https://trello.com/invite/b/bnAgQJZB/ATTIa2cb4bf74f8918d345b818378c514375320D2B47/proyecto-final-is-ii"><strong>Trello»</strong></a>
    <br />
  </p>
</div>

# Objetivo del Proyecto
El objetivo principal de este proyecto es crear una plataforma interactiva y amigable para que los usuarios compartan imágenes y participen en conversaciones significativas a través de comentarios. La aplicación debe permitir a los usuarios registrarse, cargar imágenes, dejar comentarios en las imágenes de otros usuarios y expresar interacción social a través de funciones adicionales, como la opción de "me gusta" o compartir.

## CONSTRUIDO CON:
Se empleo los siguientes frameworks y dependencias:
* [![Node][Node.js]][Node-url]
* [![Handlebars][Handlebars]][Handlebars-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![Express][Express]][Express-url]
## Características Específicas

### Registro de Usuarios

- Implementar un sistema de registro de usuarios con autenticación segura.
- Proporcionar perfiles de usuario que muestren las imágenes cargadas y los comentarios dejados por ese usuario.

### Carga de Imágenes

- Permitir a los usuarios cargar imágenes con títulos descriptivos.
- Validar y procesar las imágenes cargadas para garantizar la integridad y seguridad del sistema.

### Comentarios

- Habilitar la función de comentarios en las imágenes, permitiendo a los usuarios dejar sus opiniones y respuestas.
- Incluir opciones de edición y eliminación de comentarios para los usuarios que los han dejado.

### Interacción Social

- Implementar la opción de "me gusta" en las imágenes para que los usuarios puedan expresar su aprecio.
- Facilitar la opción de compartir imágenes en otras plataformas sociales.

### Diseño Responsivo

- Asegurarse de que la aplicación sea accesible y tenga un diseño responsivo para adaptarse a diferentes dispositivos y tamaños de pantalla.

### Seguridad

- Implementar medidas de seguridad para proteger la privacidad de los usuarios y prevenir posibles vulnerabilidades.

### Despliegue con Docker

- Garantizar que la aplicación se pueda implementar fácilmente utilizando Docker para simplificar el proceso de despliegue.

# Variables de entorno

- `MONGODB_URI`, the mongodb database uri.
- `PORT` the http server port. By default is `3000`.



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
    
# Pasos Automatizados

- **Clonación del Proyecto:**
   - Jenkins clona automáticamente el repositorio antes de cada despliegue.

- **Construcción:**
   - La construcción del proyecto se realiza automáticamente utilizando Jenkins.

- **Pruebas (JTest, Selenium):**
   - Se ejecutan pruebas automatizadas utilizando JTest y Selenium.
   - Escenarios de prueba incluyen funcionalidades como acceso a URL principal, subida/eliminación de imágenes, creación de imágenes y likes.

- **Análisis Estático con SonarQube:**
   - Se utiliza el plugin de SonarQube en Jenkins para analizar el código.
   - Configuración de SonarQube en Jenkins con credenciales específicas.
   - Integración del análisis en el pipeline, declarando el nombre del proyecto.

- **Despliegue con Docker:**
   - Se implementa la automatización del despliegue utilizando Docker.
   - El Dockerfile y docker-compose.yml están configurados para asegurar la escalabilidad y la gestión de dependencias.
     
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


[Node.js]: https://img.shields.io/badge/node.js-287236?style=for-the-badge&logo=nextdotjs&logoColor=white
[Node-url]: https://nodejs.org/en/
[Handlebars]: https://img.shields.io/badge/Handlebars-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Handlebars-url]: https://handlebarsjs.com/
[Express]: https://img.shields.io/badge/Express.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Express-url]: https://expressjs.com/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
