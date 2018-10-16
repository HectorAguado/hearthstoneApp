# hearthstoneApp

App en React-Native que ataca API oficial de HearthStone
https://market.mashape.com/omgvamp/hearthstone#
Desarrollada como práctica del módulo de React_Native del VI BootCamp Development Mobile de **KeepCoding**
---

### API de HeartStone 🚀
- http://hearthstoneapi.com/ que nos deriva a:
- https://market.mashape.com/omgvamp/hearthstone#
- _Conectándonos a esta API podemos acceder a todas las cartas existentes en el juego de Blizzard. Solo permite hacer búsquedas, y en esta aplicación hemos decidido centrarnos en las cartas cuyo `type` es `hero`_
- _He comprobado que varias de las imágenes de las cartas en castellano, a pesar de tener una url válida, la imagen no existe, así que finalmente he dejado la búsqueda de cartas en inglés, donde dichas imágenes estan practicamente todas funcionando correctamente_
- _En caso de querer que cambiar la **búsqueda a castellano**, sólo debes cambiar la línea comentada en `src/api/index.js` y comentar la activa:_

Búsqueda en castellano (inicialmene comentada)
```
 // const url = '/cards/types/Hero?collectible=1&locale=esES&'
```
Búsqueda en inglés (inicialmente activa)
```
 const url = '/cards/types/Hero?collectible=1'
```
---

### Pre-requisitos 📋

1. Tener instalado `node.js`
---

### Instalación 🔧

En la carpeta donde clone el proyecto

1. Instale las dependencias del proyecto con `npm install`

2. Iniciar el servidor de node.js con: `npm start` 

3. Corra el programa. Dependiendo de la plataforma en que desee hacerlo escriba:
    - `react-native run-ios` para iOS
    - `react-native run-android` para Android (ojo, debe tener ya abierto en emulador o conectado un disposivito)
---

### Autor ✒️

* **Héctor Aguado Pérez**


