# Rest-web-service

# Get started 

Intalar firebase CLI en local com npm (necesita tener instalado [node.js](https://nodejs.org/en/download/current))

    npm install -g firebase-tools

Iniar sesión con Firebase.

    firebase login

Descargar la credenciales SDK admin de firebase -> [Descargar](https://console.firebase.google.com/project/service-web-rest/settings/serviceaccounts/adminsdk)



# Debug

# Deploy

Implementación de la función en firebase, esta comando generara una URL para acceder a la funcion rest
(hacer unicamente deploy cuando se quieran subir nuevos cambios)

    firebase deploy --only functions


