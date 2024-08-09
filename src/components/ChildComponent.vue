<template>
  <!-- Formulario que envía datos al componente padre -->
  <form @submit.prevent="handleSubmit">
    <!-- Campo de entrada para el contenido -->
    <input type="text" name="content">
    <!-- Botón para enviar el formulario -->
    <button type="submit">Click</button>
  </form>
</template>

<script>
export default {
  name: 'ChildComponent', // Nombre del componente
  methods: {
    /**
     * Maneja el envío del formulario.
     * 
     * @param {Event} event - El evento de envío del formulario.
     */
    handleSubmit(event) {
      // Obtiene el valor del campo de entrada con nombre "content"
      const content = event.target.content.value;

      // Emite un evento personalizado 'receiveContent' con el valor del contenido al componente padre
      this.$emit('receiveContent', content);

      // Resetea el formulario después de enviar
      event.target.reset();
    }
  }
}
</script>

<style>
/* Estilos del componente (actualmente vacío) */
</style>
