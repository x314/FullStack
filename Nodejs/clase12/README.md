# Nodejs
## Iniciar proyecto node
```
Creamos tsconfig.json
npm init
```

## Instalar paquetes, declaraciones de propiedades, mètodos, funciones
```
npm i --save express ts-node @types/node @types/express
```

## Iniciar server
```
ts-node src/servidor
```

## Instalar plantilla
```
npm i --save pug
```

## Dependencia de desarrollo / no se lleverá a producción
Nodemon, controla si se generan cambios en los archivos
```
npm i --save-dev nodemon
```

Luego crear nodemon.json
```
nodemon
```

Creamos "scripts" en package.json
```
"scripts": {
	"start": "ts-node src/servidor",
	"watch": "nodemon"
}
```

Para ejecutar
```
npm start
```
Cuando se quiere ejecutar palabras reservadas agregar 'run'
```
npm run watch
```

Para convertir a json todos los valores que vienen en el cuerpo
```
npm i --save body-parser
```
Importar en servidor.ts
```
import bodyParser = require('body-parser')
```

En node la parametrizacion la mayotia de parametros van dentro de varables de netorno, por que cuando pasas a heroku el caso es el puerto.
```
npm i --save dotenv
```





## Ejecutar js (con o sin extensión) con node
```
node index
node src/index
```

## Ejecutar ts con node
```
npm i --save ts-node
ts-node <<nombre_archivo>>
```

## Instalar definiciones de node
```
npm i --save-dev @types/node
```

## Instalar express
````
npm i --save express
npm i --save-dev @types/express
```
