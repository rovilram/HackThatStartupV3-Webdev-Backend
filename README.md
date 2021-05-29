# HACK THAT STARTUP VOL.2 Reto Individual

## RETO

### Unit Testing

Para poder revisar que las funciones creadas funcionan complemente, implementa algún test unitario para revisar que realmente está funcionando.

Algunas librerias utilizadas por empresas para implementar tests:

- [Jest](https://github.com/facebook/jest)
- [Mocha](https://github.com/mochajs/mocha)
- [Supertest]()
- [react-testing-library]()



### Repository search


Mientras el equipo de desarrollo implementa una API para poder cargar datos de usuarios, gestionar logins y registers, el euipo de front va a tener que implementar las vistas que les permita gestionar y enviar los datos de usuarios

**Obejtivos**

- Crear un proyecto basado en ReactJS utilizando los estilos que más os gusten 
- Cread una vista desde dónde el usuario pueda introducir su nombre de github y se le muestren sus respositorios en formato grid.
- Cread una card para mostrar el avatar, el nombre usuario y el número de repositorios que tiene en github.
- Utilizad la API de github para poder hacer fetch de los datos de un usarios 

> - Llamad a la api de Github accediéndo a:
    - user:gagocarrilloedgar
    - repo:htsv3
    - utilizad el id de la repo para desbloquear los siguientes pasos


### Evaluación del código


- Calidad de código (bugs, errores, duplicados, etc)
- Objetivos cumplidos
- Documentación proporcionada
- Velocidad de dessarrollo


### MODELOS

#### USER

**id** String, unique, required, generado con nanoid
**username** String, unique, required
**password** String, required, hasheada SHA256
**email** String, required, validada.
**repos** Number

#### REPO

**id** String, unique, required, generado con nanoid
**name**: String
**url** String
**description** String
**stack** Array


### ENDPOINTS CRUD

#### USER

**/user/** _POST_ CREA nuevo usuario. Recibe objeto del modelo User.
**/user/** _GET_ DEVUELVE todos los usuarios.

**/user/:id/** _GET_ DEVUELVE el usuario pasado en _req.params_.
**/user/:id/** _PATCH_ MODIFICA el usuario pasado en _req.params_. Si se modifica la contraseña hace hash SHA256 antes de actualizar la base de datos
**/user/:id/** _DELETE_ BORRA el usuario pasado en _req.params_.

#### REPO

**/repo/** _POST_ CREA nuevo repo. Recibe un objeto del modelo Repo
**/repo/** _GET_ DEVUELVE todos los repo.

**/repo/:id/** _GET_ DEVUELVE el repo con id pasado en _req.params_.
**/repo/:id/** _PATCH_ MODIFICA el repo con id pasado en _req.params_.
**/repo/:id/** _DELETE_ BORRA el repo con idr pasado en _req.params_.


### MIDDLEWARE ERRORES

middleware **errorMiddleware** que envía respuesta a front en caso de que haya habido algún error en los endpoints.

## INSTALACIÓN

1. Clonar repositorio: `git clone https://github.com/rovilram/HackThatStartupV3-Webdev-Backend`.
2. reconstituir dependencias npm: `npm install`.
3. añadir datos de configuración de base de datos en .env con este formato:
```bash
#API server
HTTP_API_PORT = 3000
HTTP_API_HOST = "localhost"

#mongoDB server
DB_URI = "mongodb+srv://<user>:<pass>@<atlashost>.mongodb.net/<database>"
```

4. lanzar con node el fichero js principal: `npm start`.
5. probar funcionamiento con postman. Se puede importar en postman el archivo `hackathon.postman_collection.json` incluido.
