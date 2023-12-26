# PROYECTO FINAL

El proyecto es una aplicación web destinada a la compartición de imágenes, comentarios y otros contenidos relacionados. Esta aplicación proporciona una plataforma para que los usuarios carguen imágenes, dejen comentarios y participen en interacciones sociales en torno a esas imágenes.

# Objetivo del Proyecto
El objetivo principal de este proyecto es crear una plataforma interactiva y amigable para que los usuarios compartan imágenes y participen en conversaciones significativas a través de comentarios. La aplicación debe permitir a los usuarios registrarse, cargar imágenes, dejar comentarios en las imágenes de otros usuarios y expresar interacción social a través de funciones adicionales, como la opción de "me gusta" o compartir.

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
