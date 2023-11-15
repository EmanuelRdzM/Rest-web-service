# Rest-web-service

Este repositorio contiene un sencillo servicio web API REST implementado con Firebase, que gestiona una lista de tareas (To-Do). Proporciona endpoints básicos para realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en la lista de tareas.

## Endpoints
- GET /tasks: Obtiene la lista de tareas.
- POST /task: Agrega una nueva tarea.
- PUT /task/{taskId}: Marca una tarea como completada por su ID.
- DELETE /task/{taskId}: Elimina una tarea por su ID.

## Comenzar

Antes de comenzar, asegúrate de tener [Node.js](https://nodejs.org/en/download/current) instalado en tu máquina.

1. Instala Firebase CLI globalmente usando npm:

    ```bash
    npm install -g firebase-tools
    ```

2. Inicia sesión con Firebase:

    ```bash
    firebase login
    ```

3. Descarga las credenciales SDK admin de Firebase [aquí](https://console.firebase.google.com/project/service-web-rest/settings/serviceaccounts/adminsdk) y guárdalas en tu proyecto.

## Debug

Para realizar pruebas y depuración local, puedes usar las herramientas de desarrollo que proporciona Firebase. Puedes encontrar información detallada en la [documentación de Firebase Emulator Suite](https://firebase.google.com/docs/emulator-suite).

## Despliegue

Para implementar la función en Firebase y obtener la URL para acceder al servicio REST, utiliza el siguiente comando. Asegúrate de realizar el despliegue solo cuando quieras subir nuevos cambios:

```bash
firebase deploy --only functions
```

Recuerda que debes gestionar adecuadamente las credenciales y asegurarte de que tu configuración de Firebase sea correcta antes de desplegar la función.

