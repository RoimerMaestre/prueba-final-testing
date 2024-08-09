<template>
  <!-- Renderiza el componente hijo y escucha el evento 'receiveContent' -->
  <ChildComponent @receive-content="processContent"/>
  
  <!-- Muestra el contenido recibido del componente hijo -->
  <h1>Contenido: {{ receivedContent }}</h1>
</template>

<script>
import ChildComponent from './ChildComponent.vue'; // Importa el componente hijo

export default {
  name: 'ParentComponent', // Nombre del componente padre
  components: {
    ChildComponent, // Registra el componente hijo
  },
  data() {
    return {
      // Variable que almacena el contenido recibido del componente hijo
      receivedContent: '',
    }
  },
  methods: {
    /**
     * Procesa el contenido recibido del componente hijo.
     * 
     * @param {String} content - El contenido enviado desde el componente hijo.
     */
    processContent(content) {
      // Asigna el contenido recibido a la variable 'receivedContent'
      this.receivedContent = content;
    }
  }
}
</script>

<style>
/* Estilos del componente (actualmente vacío) */
</style>
