<template>
  <div id="app">
    <nav>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/contador">Contador</router-link></li>
        <li><router-link to="/parent">Conexion Componentes</router-link></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style>
/* Estilos globales para la aplicación */
#app {
  font-family: 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  background-color: #f4f4f4; /* Fondo más claro para contrastar con el contenido */
  min-height: 100vh; /* Asegura que el contenido ocupe al menos la altura completa de la pantalla */
  display: flex;
  flex-direction: column;
}

/* Estilos para el contenedor de navegación */
nav {
  background-color: #333; /* Fondo oscuro para la barra de navegación */
  padding: 15px 0; /* Espaciado vertical para la barra de navegación */
}

/* Estilos para la lista de enlaces de navegación */
.nav-links {
  list-style: none; /* Elimina los puntos de la lista */
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center; /* Centra los enlaces en el contenedor */
}

/* Estilos para cada enlace de navegación */
.nav-links li {
  margin: 0 15px; /* Espaciado horizontal entre los enlaces */
}

.nav-links a {
  font-size: 16px; /* Tamaño de fuente para los enlaces */
  color: #fff; /* Color blanco para el texto del enlace */
  text-decoration: none; /* Elimina el subrayado de los enlaces */
  font-weight: bold;
  transition: color 0.3s ease; /* Suaviza la transición del color del enlace */
}

.nav-links a:hover {
  color: #42b983; /* Color verde cuando el enlace está en estado hover */
}

/* Estilo para el enlace activo exacto en la navegación */
nav a.router-link-exact-active {
  color: #42b983; /* Color verde para el enlace activo */
}
</style>
