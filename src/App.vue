<template>
  <nav>
    <!-- Enlaces de navegación utilizando router-link -->
    <router-link to="/">Home</router-link> <!-- Enlace a la página de inicio -->
    |
    <router-link to="/contador">Contador</router-link> <!-- Enlace a la página del contador -->
|
    <router-link to="/parent">Conexion Componentes</router-link>
  </nav>
  
  <!-- Componente que renderiza el componente de vista basado en la ruta activa -->
  <router-view/>
</template>

<style>
/* Estilos globales para la aplicación */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; /* Define las fuentes utilizadas en la aplicación */
  -webkit-font-smoothing: antialiased; /* Mejora la suavidad de las fuentes en WebKit (Chrome, Safari) */
  -moz-osx-font-smoothing: grayscale; /* Mejora la suavidad de las fuentes en Mozilla (Firefox) */
  text-align: center; /* Centra el texto dentro del contenedor */
  color: #2c3e50; /* Color del texto de la aplicación */
}

/* Estilos para el contenedor de navegación */
nav {
  padding: 30px; /* Espaciado interno para el contenedor de navegación */
}

/* Estilos para los enlaces dentro del contenedor de navegación */
nav a {
  font-weight: bold; /* Estilo de fuente en negrita para los enlaces */
  color: #2c3e50; /* Color de los enlaces de navegación */
}

/* Estilo para el enlace activo exacto en la navegación */
nav a.router-link-exact-active {
  color: #42b983; /* Color del enlace cuando es la ruta activa exacta */
}
</style>
