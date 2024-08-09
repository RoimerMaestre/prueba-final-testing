<template>
  <div class="home">
    <!-- Imagen del logo de Vue -->
    <img alt="Vue logo" src="../assets/logo.png">
    
    <!-- Componente HelloWorld con un mensaje -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ es un alias para la carpeta /src
import HelloWorld from '@/components/HelloWorld.vue'; // Importa el componente HelloWorld

export default {
  name: 'HomeView', // Nombre del componente
  
  components: {
    HelloWorld // Registra el componente HelloWorld para que pueda ser utilizado en este componente
  }
}
</script>

<style scoped>
/* Estilos específicos para el componente (actualmente vacío) */
</style>
