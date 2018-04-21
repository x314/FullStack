# FullStack
Continuacion clase10

## Pase a producción
ng build --prod


## Conección DB
Si se trabaja con db, verificar
src/environments/
...environment.ts
...environment.prod.ts

## Iniciar un servidor local
Tenemos dos opciones
1.- http-server
```
npm i -g http-server
http-server
```
2.- web server

## Hosting Firebase
```
npm i -g firebase-tools
mkdir public
```
Copiamos todo el cotenido de la carpeta dist/
```
firebase login
firebase init
firebase deploy
```
