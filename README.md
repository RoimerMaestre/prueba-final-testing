# Desafio-final-roimer-maestre


![alt](./public/contador-img.png)
![alt](./public/componentes-conexion-img.png)

# Proyecto Vue.js

Este proyecto es una aplicación web desarrollada con Vue.js que incluye varias funcionalidades como un contador interactivo, un formulario que envía datos a un componente padre, y una navegación básica entre vistas.

## Estructura del Proyecto

<ul>
<li>HomeView: Vista principal con un mensaje de bienvenida.</li>
<li>AboutView: Vista con una simple página de información.</li>
<li>CounterView: Componente que muestra un contador interactivo conectado a un store de Vuex.</li>
<li>ParentComponent: Componente padre que recibe datos desde un componente hijo.</li>
<li>ChildComponent: Componente hijo que envía datos al componente padre.</li>
</ul>

## Funcionalidades Principales

1. Contador Interactivo
   El componente CounterView permite incrementar o decrementar un contador. Los cambios en el contador se gestionan a través de Vuex, un estado centralizado que permite compartir datos entre componentes.

2. Comunicación entre Componentes
   El componente ChildComponent envía datos al componente ParentComponent a través de eventos personalizados. Esto demuestra cómo los componentes pueden comunicarse entre sí en Vue.js.

3. Navegación
   La aplicación utiliza vue-router para gestionar la navegación entre diferentes vistas (HomeView, AboutView, CounterView, ParentComponent).

4. Pruebas Unitarias
   El proyecto incluye pruebas unitarias para el componente CounterView, asegurando que el contador interactúe correctamente con el store de Vuex.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
